import fs from 'fs';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { log2, log2_e } from './logger';
import requestLoggerMiddleware from './middlewares/requestLoggerMiddleware';

log2('Initiailizing express framework');
const app = express();

log2('Disabling X-Powered-By header for security purposes. Do not disable!');
app.disable('x-powered-by');

log2('Initializing cookie-parser middleware');
app.use(cookieParser());

log2('Initializing body parser middleware');
app.use(bodyParser.json());

log2('Initializing request logger middleware');
app.use(requestLoggerMiddleware);

log2('Initializing custom security middleware');
app.use((req, res, next) => {
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Frame-Options', 'DENY');
    next();
});

log2('Making public folder acccessible');
const staticPath = path.join(__dirname, '..', 'docs');
app.use(express.static(staticPath));

//
// Handle rendering of base index.html page
// ------------------------------------------------------------------
const renderPage = ((req, res, htmlPageFile) => {
    const renderedPage = fs.readFileSync(path.join(__dirname, '..', 'docs', htmlPageFile));
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.write(renderedPage);
    res.end();
});

//
// Basic http(s) routes for page loading
// ------------------------------------------------------------------
app.get('/', (req, res) => {
    renderPage(req, res, "index.html");
});

const server = app.listen(process.env.PORT || 9001, () => {
    const host = server.address().address;
    const port = server.address().port;

    let absoluteHost = host;
    if (host === '::') {
        absoluteHost = 'localhost';
    }

    log2('UoPeopleSDS Application listening at %s', `${absoluteHost}:${port}`);
});

// Declare our exit handler in the event we have a
// SIGTERM or SIGINT signal sent to us by our
// parent Node process.
function exitHandler() {
    log2('Closing server socket connection');
    server.close(() => {
        log2('Closed out remaining connections.');
        process.exit();
    });
}

process.on('SIGTERM', exitHandler.bind(null));
process.on('SIGINT', exitHandler.bind(null));
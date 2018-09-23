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
app.use(express.static(path.join(__dirname, 'public')));

//
// Handle rendering of base index.html page
// ------------------------------------------------------------------
let renderedPage = null;

const renderPage = ((req, res, htmlPageFile) => {
    if (renderedPageTemplate === null) {
        renderedPage = fs.readFileSync(
            (process.env.NODE_ENV === 'development') ?
            `./build/${htmlPageFile}` : 
            /* We will never get to this point as long as are on GitHub Pages */
            path.join(__dirname, htmlPageFile), 'utf8'
        );
    }

    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.write(renderedHtml);
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
}).catch((err) => {
    log2_e('Unable to start UoPeopleSDS Application Server');
    log2_e(err);
    process.exit(-1);
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
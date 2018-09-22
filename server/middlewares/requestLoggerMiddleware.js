import {log2} from '../logger';

export default function requestLoggerMiddleware(req, res, next) {
    if ((req.method === 'GET' && req.url === '/') || req.method === 'POST') {
        log2("New Request with request object %s", JSON.stringify({
            httpVersion: req.httpVersion,
            headers: {
                host: req.headers.host,
                connection: req.headers.connection,
                contentLength: req.headers["content-length"],
                accept: req.headers.accept,
                userAgent: req.headers["user-agent"],
                contentType: req.headers["content-type"],
                referer: unescape(req.headers.referer),
                encoding: req.headers["accept-encoding"],
                language: req.headers["accept-language"],
                authorization: req.headers.authorization
            },
            url: req.url,
            host: req.hostname,
            method: req.method,
            params: req.params,
            query: req.query,
            cookies: req.cookies,
            body: req.body
        }, null, "\t"));
    }
    next();
}
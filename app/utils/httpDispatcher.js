import fetch from 'isomorphic-fetch';

export default class HttpDispatcher {
    processRequest(url, options, expectRawText = false) {
        const promise = fetch(url, options);
        return promise.then((resp) => {
            if (resp.status >= 400) {
                throw new Error(resp.status);
            } else if (expectRawText) {
                return resp.text();
            } else {
                return resp.json();
            }
        }).catch((error) => {
            throw error;
        });
    }
}
/*

 * Title: Handle Request and Response
 * Description: Handle Request and Response
 * Author: Md. Rafikul Islam
 * Date: 08/21/2022

*/

// Dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('./../Routes');
const { notFoundHandler } = require('./../handlers/RouteHandlers/NotFoundHandler')

// module scaffolding
const handle = {};

// Handle Requrest Response
handle.handleReqRes = (req, res) => {
    // Request handleing
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const quaryStringObject = parsedUrl.query;
    const headerObject = req.headers;

    const requrestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        quaryStringObject,
        headerObject
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const choosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    choosenHandler(requrestProperties, (statusCode, payload) => {
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload: {};

        const payloadString = JSON.stringify(payload);
        
        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end('Hello! Rafk');
    });
};

module.exports = handle;
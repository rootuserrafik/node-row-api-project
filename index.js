/*

 * Title: Uptime Monitoring Application
 * Description: A Restful API to monitor up or down time of user defined links
 * Author: Md. Rafikul Islam
 * Date: 08/21/2022

*/

// Dependencies
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder');

// App object - Module Scaffolding
const app = {};

// Configuration
app.config = {
    port: 3000
};

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server Runing Port is: ${app.config.port}`);
    });
}

// Handle Requrest Response
app.handleReqRes = (req, res) => {
    // Request handleing
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const quaryStringObject = parsedUrl.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end('Hello! Rafk');
    });

}

// Start The Server
app.createServer();
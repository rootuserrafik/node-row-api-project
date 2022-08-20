/*

 * Title: Uptime Monitoring Application
 * Description: A Restful API to monitor up or down time of user defined links
 * Author: Md. Rafikul Islam
 * Date: 08/21/2022

*/

// Dependencies
const http = require('http');

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
    // response handle
    res.end('Hello! Rafk');
}

// Start The Server
app.createServer();
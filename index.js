/*

 * Title: Uptime Monitoring Application
 * Description: A Restful API to monitor up or down time of user defined links
 * Author: Md. Rafikul Islam
 * Date: 08/21/2022

*/

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/HandleReqRes');
const enviroment = require('./helpers/Enviroments');

// App object - Module Scaffolding
const app = {};

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(enviroment.port, () => {
        console.log(`Server Runing Port is: ${enviroment.port}`);
    });
}

// Handle Requrest Response
app.handleReqRes = handleReqRes;

// Start The Server
app.createServer();
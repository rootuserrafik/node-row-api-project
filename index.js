/*

 * Title: Uptime Monitoring Application
 * Description: A Restful API to monitor up or down time of user defined links
 * Author: Md. Rafikul Islam
 * Date: 08/21/2022

*/

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/HandleReqRes');

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
        console.log(`Our enverment variable is: ${process.env.NODE_ENV}`); // We can pass variable when run server "NODE_ENV=production node index"
        console.log(`Server Runing Port is: ${app.config.port}`);
    });
}

// Handle Requrest Response
app.handleReqRes = handleReqRes;

// Start The Server
app.createServer();
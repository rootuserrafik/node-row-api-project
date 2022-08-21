/*

 * Title: Routes
 * Description: Applaction Routes Setup
 * Author: Md. Rafikul Islam
 * Date: 08/21/2022

*/

// Dependencies
const { sampleHandler } = require('./handlers/RouteHandlers/SampleHandler')

const routes = {
    'sample': sampleHandler,
};

module.exports = routes;
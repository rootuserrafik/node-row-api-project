/*

 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Md. Rafikul Islam
 * Date: 08/21/2022

*/

// module scaffholding 
const handler = {};

handler.sampleHandler = (requrestProperties, callback) => {
    callback(200, {
        message: "This is a smaple url",
    });
};

module.exports = handler;
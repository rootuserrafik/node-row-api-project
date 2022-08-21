/*

 * Title: Not Found Handler
 * Description: Not Found Handler - 404
 * Author: Md. Rafikul Islam
 * Date: 08/21/2022

*/

// module scaffholding 
const handler = {};

handler.notFoundHandler = (requrestProperties, callback) => {
    callback(404, {
        message: "Your reqursted URL was not found!",
    });
}

module.exports = handler;
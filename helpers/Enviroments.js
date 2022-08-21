/*

 * Title: Enviroments
 * Description: Handle all enviroment related things
 * Author: Md. Rafikul Islam
 * Date: 08/21/2022

*/

// Module scaffolding
const enviroments = {};

enviroments.staging = {
    port: 3000,
    envName: 'staging',
};
enviroments.production = {
    port: 5000,
    envName: 'production',
};

// Determine which enviroment was passed
const currentEnviroment = 
                        typeof process.env.NODE_ENV === 'string' 
                        ? process.env.NODE_ENV 
                        : 'staging';

// Export corresponding envermant object
const enviromentToExport = 
                        typeof enviroments[currentEnviroment] === 'object' 
                        ? enviroments[currentEnviroment] 
                        : enviroments.staging;

// Export module
module.exports = enviromentToExport;
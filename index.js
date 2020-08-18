// We should be able to get the values of the config parameters in code, via their name. How this is done specifically is up to you.

// No express or other lib.
const config = require("./config.json");

const defaultConfig = config.development;

// all config data
let host = defaultConfig.host;
let server = defaultConfig.server_id;
let server_alarm = defaultConfig.server_load_alarm;
let user = defaultConfig.user;
let verbose_value = defaultConfig.verbose;
let test = defaultConfig.test_mode === "on" ? true : false;
let debug = defaultConfig.debug_mode === "off" ? false : true;
let log = defaultConfig.log_file_path;
let notifications = defaultConfig.send_notifications === "yes" ? true : false;

// See the initital values:
// console.log(`The default host for this config file is ${host}.`);
// console.log(`The default server for this config file is port ${server}.`);
// console.log(
//   `The default server alarm value for this config file is ${server_alarm}.`
// );
// console.log(`The default user for this config file is ${user}.`);
// console.log(`The default verbose configuration is set to ${verbose_value}`);
// console.log(
//   `The default test mode is ${defaultConfig.test_mode}. This is ${test}.`
// );
// console.log(`The default debug tool is turned on? ${debug}.`);
// console.log(`The default log will be located in this file: ${log}.`);
// console.log(
//   `The defauly notification settings are turned on: ${notifications}.`
// );

// export values to modify
module.exports.host = host;
module.exports.server = server
module.exports.server_alarm = server_alarm
module.exports.user = user
module.exports.verbose_value = verbose_value
module.exports.test = defaultConfig.test_mode
module.exports.debug = defaultConfig.debug_mode
module.exports.log = log
module.exports.notifications = defaultConfig.send_notifications

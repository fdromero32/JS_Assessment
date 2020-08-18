// We should be able to get the values of the config parameters in code, via their name. How this is done specifically is up to you.

// No express or other lib. 
const config = require('./config.json');

const defaultConfig = config.development;

// all config data
let host = defaultConfig.host;
let server = defaultConfig.server_id;
let server_alarm = defaultConfig.server_load_alarm;
let user = defaultConfig.user;
let verbose_value = defaultConfig.verbose;
let test = (defaultConfig.test_mode === "on") ? true : false;
let debug = defaultConfig.debug_mode
let log = defaultConfig.log_file_path
let notifications = defaultConfig.send_notifications

// Logic to modify boolean-like values into actual boolean values:

// See the initital values:
// console.log(`The default host for this config file is ${host}.`)
// console.log(`The default server for this config file is ${server}.`)
// console.log(`The default server alarm value for this config file is ${server_alarm}.`)
// console.log(`The default user for this config file is ${user}.`)
// console.log(`The default verbose configuration is set to ${verbose_value}`)
console.log(`The defauly test mode is ${defaultConfig.test_mode}. This is ${test}.`)
// console.log(`The default debugger for this assesment is ${debug}.`)
// console.log(`The default log will be located in this file: ${log}.`)
// console.log(`The default notification setting will be turned to ${notifications}.`)
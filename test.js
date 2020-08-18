const {
  host,
  server,
  server_alarm,
  user,
  verbose_value,
  test,
  debug,
  log,
  notifications,
} = require("./index");

//short program using the above data:
//checking host
const correctHost = () => {
  if(host === "test.com"){
    return "This is the correct hosting site. Your site will load on test.com!"
  } else {
    return "Incorrect hosting site. Please check your network status."
  }
}
// console.log(correctHost(host))

//checking server
const liveserver = (server_num) => {
  if(server_num === 55331 || server_num === 3000) {
    return `Youre on the develeopment server ${server}. Please proceed with any updates.`
  } else if(server_num === 4080){
    return `You're on the deployment server ${server_num}, these changes will affect the live appliation.`
  } else {
    return "Incorrect server. Shutting down."
  }
}
// console.log(liveserver(server))

//checking server alarm
const server_alarm_timer = () => {
  let new_timer = 0;
  for(let i = 0; i < 5; i++){
    new_timer += server_alarm
  }
  return new_timer
}
// console.log(`The new timer will execute after ${server_alarm_timer(server_alarm)} seconds`)

//checking user
const userAdmin = (name) => {
  if(name === "user") {
    return "You have admin privileges."
  } else if(name === "Drew"){
    return "Oh hi Drew! Did you finish that task I asked?"
  } else {
    return "You do not have access to this site!"
  }
}
// console.log(userAdmin(user))
// console.log(userAdmin("Drew"))

//Checking Verbose
const verbose_2 = verbose_value ? "This is quite verbose... isnt it?" : "Do you know what verbose means...?" 
// console.log(verbose_2)

//checking test
const test_test = (status) => {
  if(status === "on") {
    return `Test mode is on? ${true}`
  } else {
    return `Test mode is off? ${false}`
  }
}
// console.log(test_test(test))

// debug check
const debug_the_bug = (setting) => {
  if(setting.toLowerCase() === "off") {
    return `Debug mode on? ${false}`
  } else if(setting.toLowerCase() === "on"){
    return `Debug mode is off? ${true}`
  } else{
    return "Please input either on or off to set."
  }
}
// console.log(debug_the_bug("bacon"))
// console.log(debug_the_bug("off"))

// updating log file via array
newLogArray = []
const log_file = (input, destination) => {
  if(destination === log){
    newLogArray.push(input)
  } else {
    return "Incorrect input method. Please input a valid destination for your log."
  }
  return newLogArray
}
// console.log(log_file("test new input", log))
// console.log(log_file("test another input", log))

// updating notifications via text
const send_text = (text, delivered) => {
  if(typeof text === 'string' && delivered === notifications) {
    return `Your text message is: "${text}" . Your message was successfully sent! Delivered: ${true}`
  } else if(typeof text != "string" || delivered != notifications){
    return `Your message had some issues. Unable to send. Delivered: ${false}`
  } else {
    return `Please input the a text and input either "yes" or "no" to send`
  }
}

// console.log(send_text("Hey how are you?!", "yes"))
// console.log(send_text("Hey!", "no"))

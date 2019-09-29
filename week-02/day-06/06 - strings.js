function logES5(timestamp, username, action) {
    return 'INFO - ' + timestamp + '\n' + username + ' : ' + action;
}

function logES6(timestamp, username, action) {
    return `INFO - ${timestamp}
${username} : ${action}`;
}

const date = new Date();
var timestamp = date.toLocaleTimeString();
var username = 'hh';
var action = 'code';

console.log(logES5(timestamp, username, action));
console.log(logES6(timestamp, username, action));
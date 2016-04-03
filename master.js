//var dataType = 'sine';  // sine wave
//var dataType = 'portLSD';  // least significant digit of port number, useful if ports take a pattern like 5001...5009
var dataType = 'sine-portmod';  // sine wave, but with values slightly modified by the least significant digit of the port number. good for charts

var _ = require('underscore');
var slave = require('./slave.js');
var users = require('./users.json').users;

_.each(users, function(user) {
  slave(user, dataType);
})
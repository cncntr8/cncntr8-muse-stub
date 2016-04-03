var dataType = 'sine';  // sine wave
//var dataType = 'portLSD';  // least significant digit of port number, useful if ports take a pattern like 5001...5009

var _ = require('underscore');
var slave = require('./slave.js');
var users = require('./users.json').users;

_.each(users, function(user) {
  slave(user, dataType);
})
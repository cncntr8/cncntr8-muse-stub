var _ = require('underscore');
var slave = require('./slave.js');
var users = require('./users.json').users;

_.each(users, function(user) {
  slave(user);
})
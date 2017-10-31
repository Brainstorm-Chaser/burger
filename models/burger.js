var orm = require("../config/orm.js");


var burger = {
  all: function(cb) {
    // console.log("burgerjs: burger.js")
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
     console.log("I'm in burger.js - create")
    orm.create("burgers", cols, vals, function(res) {
      console.log("response: ", res)
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
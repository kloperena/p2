var orm = require("../config/pass.orm");

var user = {
  selectWhere: function (cols, vals, cb) {
    orm.selectWhere("users", cols, vals, function(err, rows){
      cb(err, rows)
    })
  },
  // The variables cols and vals are arrays.
  create: function (cols_vals, cb) {
    orm.create("users", cols_vals, function(err, rows){
      cb(err, rows)
    })
  }
};

module.exports = user;

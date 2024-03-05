const moment = require('moment');
module.exports = {
    getName: function (user) {
      return user.username;
    },
    getRole: function (user) {
      return user.role;
    },
    getFullname: function (user) {
      return user.fullname;
    },
    getEmail: function (user) {
      return user.email;
    },
    getPassword: function (user) {
      return user.password;
    },
    getPhone: function (user) {
      return user.phone;
    },
    getAddress: function (user) {
      return user.address;
    },
    ifeq: function (event, y, options) {
        var currentCategory = event == undefined ? "" : event.category;
        if (currentCategory === y) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
    },
    
}
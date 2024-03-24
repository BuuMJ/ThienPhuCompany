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
    getGender: function(user){
      if(user.gender){
        if(user.gender === 'Nam'){
          return 'Ông'
        }else{
          return 'Bà'
        };
      }
    },
    getAvatar: function (user) {
      if(user && user.avatar){
        return `/${user.avatar}`;
      }else{
        if(user.gender){
          if(user.gender === 'Nam'){
            return "/img/avatar-men.png"
          }else{
            return "/img/avatar-women.png"
          }
      }
    }
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
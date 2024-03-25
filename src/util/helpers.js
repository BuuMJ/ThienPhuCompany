const moment = require('moment');
module.exports = {
    getName: function (user) {
      if(user && user.username){
        return user.username
      }
    },
    getRole: function (user) {
      if(user && user.role){
        return user.role
      }
    },
    getFullname: function (user) {
      if(user && user.fullname){
        return user.fullname
      }
    },
    getEmail: function (user) {
      if(user && user.email){
        return user.email
      }
    },
    getPassword: function (user) {
      if(user && user.password){
        return user.password
      }
    },
    getPhone: function (user) {
      if(user && user.phone){
        return user.phone
      }
    },
    getAddress: function (user) {
      if(user && user.address){
        return user.address;
      }
    },
    getGender: function(user){
      if(user && user.gender){
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
        if(user && user.gender){
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
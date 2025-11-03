const moment = require('moment');
const momentVN = require("moment-timezone");
momentVN.locale("vi");
module.exports = {
   formatDateGlobal: function (date) {
    if (!date) return "";
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  },
  // Helper 2: moment giờ Việt Nam
  formatDateVN: function (date) {
    if (!date) return "";
    return momentVN(date)
      .tz("Asia/Ho_Chi_Minh")
      .format("LLLL");
  },
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
'use strict';
module.exports = function () {

var vault = {

  setValue: function (key, value){
    vault[key] = value;
  },

  getValue: function (key){

    if(!vault[key]){
      return null;
    }else{
      return vault[key];
    }
  }
};
return vault;
};
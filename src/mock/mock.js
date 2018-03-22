var signin = require('./signin.json');
var signup = require('./signup.json');
var issignin = require('./issignin.json');
var checkcode = require('./checkcode.json');
var cart = require('./cart.json');
var deletepro = require('./deletepro.json');
var detail = require('./detail.json');

module.exports = function() {
  return {
    "issignin": issignin,
    "signup": signup,
    "signin": signin,
    "checkcode": checkcode,
    "detail": detail,
    "cart": cart,
    "deletepro": deletepro
  }
}

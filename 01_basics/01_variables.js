const accountId = 133427
let accountEmail = "veena@google.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;

// accountId = 3 // not alowed

accountEmail = "vn@vn.com"
accountPassword = "76767676"
accountCity = "Raipur"

console.log(accountId)

/*
  prefer not to use var
  because of issue in block scope and functional scope
*/


console.table({accountId, accountEmail, accountPassword, accountCity, accountState})

const accountId = 144434
let accountEmail = "tashu99@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 not allowed

accountEmail = "hv@hv.com"
accountPassword = "234678"
accountCity = "Bengaluru"

console.log(accountId);

/*
 prefer not to use var
 because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword,accountCity])

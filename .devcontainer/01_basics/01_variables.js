const accountId = 123321
let accountEmail = "hemanta@google.com"
var accountPassword = "432234"
accountCity = "berhampur"
let accountState;

// accountId = 22 // Not allowed

accountEmail = "ghd@r.com"
accountPassword = "121212"
accountCity = "bbsr"



console.log(accountId);

/*
Prefer not to use var because of in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

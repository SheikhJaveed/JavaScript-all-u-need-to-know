console.log("Hello world")
const accountId=14293
let accountEmail="hello@email.com"
var accountPassword="password123"
accountCity="New York" //global variable
let newKey; //undefined

console.log(accountId)
accountEmail="lsjd@email.com"
console.log(accountEmail)
accountPassword="newpassword123"
console.log(accountPassword)

console.table({accountId, accountEmail, accountPassword, accountCity, newKey})

//scope problem with var -> prefer not to use var
var n="10"
if(1){
    n="20"
    console.log(n)
}
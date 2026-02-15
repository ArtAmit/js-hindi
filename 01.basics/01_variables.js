const accountnumber=12345// unchangable
let accountname="Amit"//changable 
let accountemail="as20040127@gmail.com"
let accountstate;
//var  scope problem ,does not control over block space ,
/*
 prefer not to use var because of issue in block scope and fuctional scope
*/
console.log(accountnumber);
console.table([accountemail,accountname,accountnumber,accountstate]);
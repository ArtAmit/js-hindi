let score =33
console.log(typeof score);
let scores="33"
console.log(typeof scores);
let values=Number(scores)
console.log(typeof values);
let k="333abc"
console.log(typeof k);
// "33" => easily converted into number using NUmber
//"33abc"=>Nan
let isloggedin=""
let booleanisloggedin=Boolean(isloggedin)
console.log(booleanisloggedin);
//""=> false


//  ***************************** Operations **********************
let value=3
let negative = -value// simple put negative sign 
console.log(negative)
// +,-,*,/,**,%

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

console.log(+true);//1
let  x=3
const y=x++
console.log(`x:${x},y:${y}`); //output =x=4,y=3 
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.


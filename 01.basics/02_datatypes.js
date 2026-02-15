"use strict"; //treat all js code as newer version
//alert("hello") we are using node js not browser
/*
datatypes
1.number (range of number is 2 to power 53)
2.string ""
3.boolean true or false
4.null (stand alone value) (representation of empty value) (its type is object) 
5.undefined  value is not defined (its type is undefined) 
6.symbol (finding uniqueness in component in react)

*/
console.log(typeof 123);
// data categorization 
//2 types
/*
1.primitive
7 types: call by value(copy is given)
string,number,boolean,null,undefined,symbol,bigint
2.non primitive
 reference type: call by reference(allocate the direct address)
 array,object,function
*/
let myobj={
    name:"Amit",
    age:22
}
const myFunction= function(){
    console.log("Hello World");
}
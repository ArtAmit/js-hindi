const score=400
// for declaring the data type explicitly
const balance=new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));//mainly usd in eccomerce website for storing the value
const digit=23.434323
console.log(digit.toPrecision(3));
const hundreds=1000000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++Maths ++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.5));
console.log(Math.ceil(4.00001));
console.log(Math.floor(7.9999));
console.log(Math.random());//always give nique value and lies between 0 to 1
// formula for generating value above the particular range
const min=10
const max=50
console.log(Math.floor(Math.random()*(max-min+1))+min); 
let mydate=new Date()
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);//object
// dclaration of the date
let mydates=new Date(2026,1,18)
console.log(mydates.toDateString());
//declaration of the date in the format
let mycreate=new Date("01,18,2026")
console.log(mycreate.toLocaleString());
//time stamp used in poles quezes and where there is used of exact time
let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(mycreate.getTime());
console.log(Math.floor(Date.now()/1000)) // for calculating in seconds
let aajkadin=new Date()
aajkadin.toLocaleString('default',{weekday:"long"});
console.log(aajkadin);
const tinderuser={}
tinderuser.name="AMit Singh"
tinderuser.class="CS3b"
tinderuser.number="7.9"
console.log(tinderuser);
const tinder={
    email:"asfeeece",
    fullname:{
        username:{
        first:"amit",
        last:"singh"
    }
}
}
console.log(tinder.fullname.username.first);

//combinig objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"v"}
//const obj3=Object.assign({},obj1,obj2)// this empty return the target and rest return the source
const obj3={...obj1,...obj2}//spread and put htem in array
console.log(obj3); 

//jab bhi user of database aayga to array of object ke form me aayga
// array containing th e different objects
const user=[
    {
        id:1,
        email:"nfionernd@gmail.com"
    }
]
// user[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));// its datatype is array 
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
// check givent value is present using tinderuser.hasownproperty('')
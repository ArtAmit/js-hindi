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
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
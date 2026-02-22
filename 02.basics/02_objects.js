//singleton  ye apne tarah ki eek hi object hai 
// when we declare thorugh literal then no singleton and if through literal then singleton
// object literals
//Object.create// construsctor ke through
const jsuser={// keys and value pair
    name:"Amit",
    age: 27,
    "class":"cs3b",
    location :"kanpur",
    email:"bawligand.com",
    isloggedin:false,
    lastloggin:["monday","tuesday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])// always try to exrtract the object vvalue by this syntal closing it in[]

console.log(jsuser["class"]);

// define the symbol
const mySym=Symbol("key1")
    const ak={
        [mySym]:"mykey1",
    }
console.log([mySym])
// how to cahnge the value in object 
jsuser.email="as2004012@gmail.com"
// hhow to make the value fix in object
//Object.freeze(jsuser)
console.log(jsuser);
jsuser.greeting=function(){
    console.log("hello js user");
}
jsuser.greetingtwoo=function(){
    console.log(`heelo jsuser,${this.lastloggin}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwoo());
//*************this keyword */
// this is used to refer the current context in function
const user={
    username:"Amit",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
user.welcomeMessage()
// jab bhi this direct console.log(this)ho tab ye refer karta hai eek empty{}

// function chai(){
//     //console.log(this)
//     let username="Amit"
//     console.log(this.username);      // we cannot use this function in function we can use it in object only
// }
// chai()

const chai=()=>{
    let username="amit"
    console.log(this);
}
chai()

// const total=(num1,num2) => {
//     return num1+num2
// }

const total=(num1,num2)=> num1+num2;
console.log(total(5,8))

//differnece between normal functoin and arow function 
// in normal have its own argument while arrow does not have its argumnet
// in normal this depends on how the functoin is called and in arrow they take this from the surrounding scope

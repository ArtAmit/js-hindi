function saymyname(){
    console.log("amit");
}
saymyname()  // here saymyname is refrence 

function addtwono(number1,number2){// parameter
    console.log(number1+number2);
}
addtwono(3,4)// argumnets

function summ(number1,number2){
    let gura=number1+number2;
    return gura;
}
const k=summ(3,5)
console.log("Result:",k);

// function loginusermessage(username){
//     return `${username} just logged in`
// }
//  console.log(loginusermessage("Amit Singh"))

 function loginusermessage(username="ABC"){// if not given then simply pass it in username="AABC"
    if(!username){
        console.log("Please enter your user name");
        return;
    }
    return `${username} just logged in`
 }
 console.log(loginusermessage())

 // shopping kart
 function calculatecartprice(...num1){  // ... rest operator and spread opeerator
    return num1
 }
 console.log(calculatecartprice(2,3,4))

 //
 const user={
    username:"Amit",
    price:199
 }
 function handleobject(anyobject){
    console.log(`username is${anyobject.username} and price is ${anyobject.price}`);
 }
// handleobject(user)
//object passing
handleobject({
    username:"Aman",
    price:2323
})
//arrray passing
const mynewArray=[200,200,300,100]
function returnseceondvalue(getArray){
    return getArray[2]
}
console.log(returnseceondvalue(mynewArray));
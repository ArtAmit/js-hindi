// immediately invoked function expression 
// for immediate execution of function 
// kai baar humre pass file hoti hai jisme sirf data connection hota hai aur hum chahte hai jase humre file start ho vase hi uss file me data connection start ho jaay
// for no pollution from the global scope

function chai(){
    console.log(`db connected`);
}
//chai()
// fro immediate executiion
//()() first tells us the function definition  and second one denote that execution 
(function chai(){
    console.log(`db connected`)
})();// we must apply the semicolon after this so that we can simply end the iife oherwise when ever we declare it again it will give an error
(()=> {
    console.log(`Amit`);
})()

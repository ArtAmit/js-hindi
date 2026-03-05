// in scope we dont use var as it does not follow the rules of scope
if(true){
    var c=50
}
console.log(c);
// here it will print the 30 but we havent declare it so it does not follow the rules of scope
// ******************scope************
// jo bhi if ke bahar hai vo hai global scope
// aur jo bhi andar hai vo hai block scope
//*****************closure***********************************
function one(){
    const username="Amit"
    function two(){
        const website="youtube"
        console.log(username);
        // console.log(website);
    }
    //console.log(website);
    two()
    
    
}
one()

 if(true){
    const username="Amit"
    if(username==="Amit"){
        const classatpsit="3b"
        console.log(username+classatpsit);
        console.log(classatpsit);
    }
    //console.log(classatpsit);
     console.log(username);
 }

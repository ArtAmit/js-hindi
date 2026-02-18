const name="AMit"
const surname="Singh"
console.log(`my first name ${name} and surname is ${surname}`);// in string th value is stored in the format of the key and value
const gamename=new String('Amit')
console.log(gamename[0]);// for accesing the value according to the index
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('A'));
const newString=gamename.substring(0,2);
console.log(newString);
// slice used for negative value(-3,0)
const newStringone="   Amit   "
console.log(newStringone.trim());// for removing extra spaces and it is mostly used when we want the user email
const stanza=" Hello my name is amit and i love to do the art "
console.log(stanza.split(' '));
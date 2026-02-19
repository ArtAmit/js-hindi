// const arr=[1,2,3,4,5]//resizable array
// const myheros=["saktiman","ironman"]
// console.log(arr[0]);
// myheros.push("spiderman");
// myheros.pop();
// // for checking element is present in array or not
// console.log(myheros.includes("spiderman"))
// const newarr=arr.join()// it will convert the array to string 
// //slice,splice
// console.log("A",arr);
// const myn1=arr.slice(1,3)
// console.log(myn1);
// console.log("B",arr);
// const myn2=arr.splice(1,3)
// console.log("C",arr);
// console.log(myn2);
//++++++++++++++++++++++++= array next part++++++++++++++
const marvelheros=["iron man","captain America"];
const dcheros=["superman","batman"];
// marvelheros.concat(dcheros);
// console.log(marvelheros);
// marvelheros.push(dcheros)
// console.log(marvelheros);
// for concatinating all the heros
const allheros=marvelheros.concat(dcheros)
console.log(allheros);
const all_new_heros=[...marvelheros,...dcheros]
console.log(all_new_heros);
// for making a array flat 
const another_array=[1,2,3,[4,5,6],7,[2,3,[4,6,1]]]
const real=another_array.flat(Infinity);
console.log(real);
console.log(Array.isArray("Amit"));
console.log(Array.from("Amit"))
console.log(Array.from({name:"Amit"}))//interesting
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
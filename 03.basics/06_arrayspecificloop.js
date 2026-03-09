// for of
//["","",""]
const arr=[1,2,3,4,5]
for (const val of arr) {
   // console.log(val);
    
}
const greeting="hello world";
for(const greet of greeting){
   // console.log(greet);
}

// Maps  //unique value 
const map=new Map()
map.set('IN',"India")
map.set('usa',"united state of america")
//console.log(map);
// iteration though map   // use square brackets after const

for(const [key] of map){
    //console.log(key);
}
// applying for of in object  // does not work
const myobject=
{
    'game1':'nfs',
    'game2':'gta'
}
//use for in for iteration of object
for(const key in myobject){
   // console.log(myobject[key]); // this only print the second value
    //console.log(`${key} shortcut is for ${myobject[key]}`);// this is for both one 
}

// use in for array
const p=["a","b","c"]
for(const l in p){
    console.log(p[l]);
}
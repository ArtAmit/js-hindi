const myNums=[1,2,3]
// const mytotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// },0)
// console.log(mytotal);

// using arrow function 
const mytotal=myNums.reduce((acc,curr)=> acc+curr,0)
console.log(mytotal);

const shoppingcart=[
    {
        itemname:"py",
        price:9
    },
    {
        itemname:"cpp",
        price:899
    }
]
const pricetopay=shoppingcart.reduce((acc,item)=> acc + item.price ,0)
console.log(pricetopay);
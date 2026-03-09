// for 
for (let i = 0; i < 5; i++) {
    const element = i;
    if(element==4){
        // console.log("5 is best number");
    }
    // console.log(element);
}

for(let i=0;i<10;i++){
    //console.log(`outerloop${i}`);
    for(let j=0;j<10;j++){
        //console.log(i +'*'+ j + '=' +i*j);
        //console.log(`inner loop ${j} and inner loop ${i}`);
    }
}

let myarray=["flash","batman","superman"]
for(let i=0;i<myarray.length;i++){
    const element=myarray[i];
    //console.log(element);
}

// while
let i=0
while(i<=10){
    console.log(i);
    i+=2;
}

// for each loop
const coding=["cpp","java","ruby","py"]
coding.forEach( function(item){
    console.log(item)
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const mycoding=[
    {
        language:"cpp",
        filename:"c++"
    },
    {
        language:"java",
        filename:"java"
    },
    {
        language:"python",
        filename:"py"
    }
]
mycoding.forEach((item=>{
    console.log(item.language,item.filename);
}))
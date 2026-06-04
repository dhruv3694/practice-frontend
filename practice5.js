
let line = document.getElementById("a");
console.log(line);

//function change(){
//    line.textContent="javascript is really tricky";
//    line.style.color="aqua";
//}

btn=document.querySelector("button");
btn.addEventListener("click",()=>{

    if(document.querySelector("h1").textContent=="now i know dom manipulation" ){
        document.querySelector("h1").textContent="javascript is really tricky";
        document.querySelector("h1").style.color="aqua";
    }else{
        document.querySelector("h1").textContent="now i know dom manipulation";
        document.querySelector("h1").style.color="white";

    }



})


//let btn=document.querySelector("button");
//btn.addEventListener("click",function(){
//    document.querySelector("h1").textContent="javascript is really tricky";
//    document.querySelector("h1").style.color="aqua";
//}) 

age=22;
if(age>=18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}
let mycolors=document.getElementById('circle')
console.log(mycolors)

function cc(){
    if(mycolors.style.background=="green"){
        mycolors.style.background = "yellow"

    }else if(mycolors.style.background == "yellow"){
        mycolors.style.background = "white"
    }else{
        mycolors.style.background = "green"
}
    
    

}

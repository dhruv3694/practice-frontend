let webPage = document.querySelector('body')
console.log(webPage)

let b1 = document.querySelector('button')

b1.addEventListener('click',()=>{
    webPage.classList.toggle ('night')
    if(b1.textContent == "🌚"){
        b1.textContent = "🌞"
    }else{
        b1.textContent = "🌚"
    }

})
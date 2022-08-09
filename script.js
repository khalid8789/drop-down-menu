const icon1 = document.querySelector(".icon1")
const icon2 = document.querySelector(".icon2")
const firstDiv = document.querySelector(".di")
const secondDiv = document.querySelector(".dii")

let isOpened = true


icon1.addEventListener('click', function(){
    if (isOpened===true) {
        icon1.classList.add("perform")
        isOpened = false
        firstDiv.style.display = "block"
    } else {
        icon1.classList.remove("perform")
        isOpened = true
        firstDiv.style.display = "none"
    }
   
})

 let ifOpened = true

icon2.addEventListener('click', function(){
    if (ifOpened===true) {
        icon2.classList.add("perform")
        ifOpened = false
        secondDiv.style.display = "block"
    } else {
        icon2.classList.remove("perform")
        ifOpened = true
        secondDiv.style.display = "none"
    }
})


const img = document.getElementById("img");
const body = document.body
const counter = document.getElementById("counter")
const btn = document.querySelector('button')
const btn2 = document.getElementById('button')
const theme = document.getElementById('theme')
const icon = document.querySelector('i')
let num = 0
counter.innerText = num + " Cookies"

img.addEventListener("click", function(e){
    num++
    counter.innerText = `${num} Cookies`

    if (num>5){
        btn.removeAttribute("hidden")
        btn2.removeAttribute("hidden")
    }
})

btn.addEventListener("click", function(e){
    num = 0
    counter.innerText = `${num} Cookies`
    btn.setAttribute("hidden", true)
    btn2.setAttribute("hidden", true)
})

btn2.addEventListener("click", function(e){
    num *=2
    counter.innerText = `${num} Cookies`
})

theme.addEventListener("click", function(e){
    body.classList.toggle("darkmode")
    if (icon.classList.contains("fa-regular")){
        icon.classList.remove("fa-regular")
    }else{
        icon.classList.add("fa-regular")
    }
})
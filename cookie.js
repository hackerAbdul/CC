const img = document.getElementById("img");
const body = document.body
const counter = document.getElementById("counter")
const btn = document.querySelector('button')
const btn2 = document.getElementById('button')
let num = 0
counter.innerText = num + " Cookies"

img.addEventListener("click", function(e){
    num++
    counter.innerText = `${num} Cookies`

    if (num>5 && num<25){
        btn.removeAttribute("hidden")
    }else if(num>20){
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
const img = document.getElementById("img");
const body = document.body
const counter = document.getElementById("counter")
const btn = document.querySelector('button')
const btn2 = document.getElementById('button')
counter.innerText = 0

img.addEventListener("click", function(e){
    counter.innerText ++;

    if (counter.innerText>5 && counter.innerText<25){
        body.style.backgroundColor = "pink"
        btn.removeAttribute("hidden")
    }else if(counter.innerText>20){
        btn2.removeAttribute("hidden")
    }
})

btn.addEventListener("click", function(e){
    counter.innerText = 0
    btn.hasAttribute("hidden")
})

btn2.addEventListener("click", function(e){
    counter.innerText *=2
})
//this is where we declare our variables to be referenced throughout the page
const body = document.body
const img = document.getElementById("img");
const counter = document.getElementById("counter")
const restartButton = document.querySelector('button')
const multiplyButton = document.getElementById('button')
const theme = document.getElementById('theme')
const icon = document.querySelector('i')

//start by setting our counter at 0
let num = 0
counter.innerText = num + " Cookies"


//once image is pressed it fires off this event listener that will update the counter based on number of clicks
img.addEventListener("click", function(e){
    num++
    counter.innerText = `${num} Cookies`

    //this condition checks if the counter is above 5 it will unhide the restart and *2 button
    if (num>5){
        restartButton.removeAttribute("hidden")
        multiplyButton.removeAttribute("hidden")
    }
})

//once the restart button is pressed it will fire off the event listener that will restart the counter and hide both buttons 
restartButton.addEventListener("click", function(e){
    num = 0
    counter.innerText = `${num} Cookies`
    restartButton.setAttribute("hidden", true)
    multiplyButton.setAttribute("hidden", true)
})

//the multiply button will multiply whatever value stored in the counter by 2
multiplyButton.addEventListener("click", function(e){
    num *=2
    counter.innerText = `${num} Cookies`
})

//theme button will change the theme from light and darkmode based on what is set in the darkmode class in css
theme.addEventListener("click", function(e){
    body.classList.toggle("darkmode")
    if (icon.classList.contains("fa-regular")){
        icon.classList.remove("fa-regular")
    }else{
        icon.classList.add("fa-regular")
    }
})
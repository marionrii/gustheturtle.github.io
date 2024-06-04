//globale variabler

let sleepy = 100
let hunger = 100
let cleanliness = 100
const img = document.getElementById("image")
const hungerDiv = document.getElementById("hungerDiv")
const cleanlinessDiv = document.getElementById("cleanlinessDiv")
const sleepyDiv = document.getElementById("sleepyDiv")

//start actions

updateLabels()

function updateLabels(){
    
    cleanlinessDiv.innerText = "Dirt: " + cleanliness
    hungerDiv.innerText = "Hunger: " + hunger
    sleepyDiv.innerText = "Sleep: " + sleepy

}

//GUS

function changeImgToEating() {
    
    img.src = "./img/eatGus.png"
}

function changeImgToSleeping() {
    
    img.src = "./img/sleepGus.png"
}

function changeImgToCleaning() {
    
    img.src = "./img/cleanGus.png" 
}

//FEED BUTTON

const feedBtn = document.getElementById("feedBtn")

feedBtn.addEventListener('click', feedGus)


function feedGus() {
    hunger = hunger - 2;
    changeImgToEating();
    updateLabels();
}


//WASH BUTTON

const washBtn = document.getElementById("washBtn")

washBtn.addEventListener('click', washGus)

function washGus() {

    cleanliness = cleanliness - 5;
    changeImgToCleaning();
    updateLabels();
}


//SLEEP BUTTON

const sleepBtn = document.getElementById("sleepBtn")

sleepBtn.addEventListener('click', sleepGus)

function sleepGus() {
    sleepy = sleepy - 10;
    changeImgToSleeping();
    updateLabels();

}

//LINK

var link = document.createElement("a");
var linkText = document.createTextNode("Click Here For Gus's Backstory!");
link.appendChild(linkText);  
document.body.appendChild(link);

link.href ="./story.html"
// link.href = "https://docs.google.com/document/d/1cRqbz6k_0n-rdTRXEoWCgpZuSCHNPL_buEI9zCU8bic/edit?pli=1#heading=h.udmqkw75ykhy";





// player 1 images
const steinP1 = document.querySelector(".stein1")
const saksP1 = document.querySelector(".saks1")
const papirP1 = document.querySelector(".papir1")


// player 2 images
const steinP2 = document.querySelector(".stein2")
const saksP2 = document.querySelector(".saks2")
const papirP2 = document.querySelector(".papir2")

// score board
const scoreBoard = document.querySelector("#scoreboard")

// countdown
const countdownelement = document.querySelector("#countdown")

// start button
const startButton = document.querySelector("#startButton")

// user selection
const steinButton = document.querySelector("#steinButton")
const saksButton = document.querySelector("#saksButton")
const papirButton = document.querySelector("#pappirButton")

// home button
const homeButton = document.querySelector("#home")

// elements for start/stop game
const startGameElements = document.querySelectorAll(".start")

// active images for players
let activeImgP1 = steinP1
let activeImgP2 = steinP2



let time = 2


startButton.addEventListener('click', function() {
  gamestarter()
});



function gamestarter() {
    startGameElements.forEach((Element) => Element.classList.toggle("hidden"))



    countdown()
}


function countdown() {
    
    const countdownInterval = setInterval(() => {
        if (time === 0) {
          countdownelement.textContent = 'vis';
          clearInterval(randomImg);
          clearInterval(countdownInterval);
        } else {
          countdownelement.textContent = time;
          time--;
        }
    
    }, 1000);

    const randomImg = setInterval(() => {
        const p1RandomNum = Math.floor(Math.random() * 3);
        const p2RandomNum = Math.floor(Math.random() * 3);

        console.log(p1RandomNum, p2RandomNum)

        if (p1RandomNum == 0) {
            activeImgP1.classList.toggle("hidden")
            steinP1.classList.toggle("hidden")
            activeImgP1 = steinP1
        } else if (p1RandomNum == 1) {
            activeImgP1.classList.toggle("hidden")
            saksP1.classList.toggle("hidden")
            activeImgP1 = saksP1
        } else if(p1RandomNum == 2) {
            activeImgP1.classList.toggle("hidden")
            papirP1.classList.toggle("hidden")
            activeImgP1 = papirP1
        }

        if (p2RandomNum == 0) {
            activeImgP2.classList.toggle("hidden")
            steinP2.classList.toggle("hidden")
            activeImgP2 = steinP2
        } else if (p2RandomNum == 1) {
            activeImgP2.classList.toggle("hidden")
            saksP2.classList.toggle("hidden")
            activeImgP2 = saksP2
        } else if(p2RandomNum == 2) {
            activeImgP2.classList.toggle("hidden")
            papirP2.classList.toggle("hidden")
            activeImgP2 = papirP2
        }

    }, 100);

}




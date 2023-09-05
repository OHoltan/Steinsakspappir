// player 1 images
const p1Img = document.querySelector(".p1")

// player 2 images
const p2Img = document.querySelector(".p2")

// score board
const scoreBoard = document.querySelector("#scoreboard")

// countdown
const countdownelement = document.querySelector("#countdown")

// start button
const startButton = document.querySelector("#startButton")

// user buttons
const userButtton = document.querySelectorAll(".buttons")

// user selection
const steinButton = document.querySelector("#steinButton")
const saksButton = document.querySelector("#saksButton")
const papirButton = document.querySelector("#pappirButton")

// home button
const homeButton = document.querySelector("#home")

// elements for start/stop game
const startGameElements = document.querySelectorAll(".start")

// active images for players
// let activeImgP1 = steinP1
// let activeImgP2 = steinP2



let time = 2

let p1Score = 0
let p2Score = 0

let playerChoise = 0

steinButton.addEventListener('click', () => playerButtonChoise(1));
saksButton.addEventListener('click', () => playerButtonChoise(2));
papirButton.addEventListener('click', () => playerButtonChoise(3));

startButton.addEventListener('click', () => {
    gamestarter()
    startButton.classList.toggle("hidden")

});



function gamestarter() {
    startGameElements.forEach((Element) => Element.classList.toggle("hidden"))
    userButtton.forEach((Element) => Element.classList.toggle("hidden"))

    countdown()
}

function playerButtonChoise(choise) {
    playerChoise = choise
    console.log(choise)
    userButtton.forEach((Element) => Element.classList.toggle("hidden"))
}


function winCheker(p1, p2) {

    // 0 = stein , 1 = saks , 2 pappir 
    console.log("HALOOO")

    switch (p1) {
        case 0:
            // user did not chose, looses
            p1Img.src = "../img/Barrier2.jpg"
            p2Score++
            newround()
            userButtton.forEach((Element) => Element.classList.toggle("hidden"))
            break;
        case 1:
            // user Rock    
            if (p2 == 0) {
                // tie
                newround()
            } else if (p2 == 1) {
                // p2 lose
                p1Score++
                newround()
            } else {
                // p2 win
                p2Score++
                newround()
            }

            break;
        case 2:
            // user saks
            if (p2 == 0) {
                // p2 win STEIN
                p2Score++
                newround()
            } else if (p2 == 1) {
                // tie Saks
                newround()
            } else {
                // p1 win pappir
                p1Score++
                newround()
            }
            break;
        case 3:
            // user papir
            if (p2 == 0) {
                // p1 win STEIN
                p1Score++                
                newround()
            } else if (p2 == 1) {
                // p2 win Saks
                p2Score++
                newround()
            } else {
                // tie pappir
                newround()
            }
            break;
    }
}

function newround() {
    console.log(p1Score,p2Score)
    scoreBoard.textContent = `${p1Score} - ${p2Score}`
    time = 2
    playerChoise = 0 


    setTimeout(() => {

        if (p1Score == 2) {
            restart()
        } else if (p2Score == 2){
            restart()
        } else {
                    // unhide / hide elements
        startGameElements.forEach((Element) => Element.classList.toggle("hidden"))
        countdownelement.textContent = 3;
        setTimeout(() => {
            gamestarter()
        }, 1500);

        }


    }, 750);
  
}

function restart() {
    startButton.classList.toggle("hidden")
    startGameElements.forEach((Element) => Element.classList.toggle("hidden"))
}


function countdown() {
    
    const countdownInterval = setInterval(() => {
        if (time === 0) {
          
            countdownelement.textContent = 'vis';
            clearInterval(randomImg);
            clearInterval(countdownInterval);
            console.log(playerChoise)

            
            const p2choise = Math.floor(Math.random() * 3)
            setTimeout(() => {    
                randomImageTool(playerChoise-1, p1Img)
                randomImageTool(p2choise, p2Img)
                console.log(p2choise)
                console.log(p2Img.src)
                console.log(p2choise)

                winCheker(playerChoise, p2choise)
            }, 110);
   

        } else if (time === 1) {

            if (playerChoise == 0) {
                countdownelement.textContent = time;
                time--;
            } else {
                countdownelement.textContent = time;
                time--;
            }

        } else {
          countdownelement.textContent = time;
          time--;
        }
    
    }, 1000);

    const randomImg = setInterval(() => {
        const p1RandomNum = Math.floor(Math.random() * 3);
        const p2RandomNum = Math.floor(Math.random() * 3);

        randomImageTool(p1RandomNum, p1Img)
        randomImageTool(p2RandomNum, p2Img)


    }, 100);

}


function randomImageTool(num, user) {
    
    if (num == 0) {
        user.src = "../img/Cobblestone.jpg"
    } else if (num == 1) {
        user.src = "../img/Saks.jpg"
    } else if(num == 2) {
        user.src = "../img/Papir.jpg"
    }
    
}



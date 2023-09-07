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

// definig player Computer Choise
let p2choise

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
    p1Score = 0
    p2Score = 0

});



function gamestarter() {
    startGameElements.forEach((Element) => Element.classList.toggle("hidden"))
    userButtton.forEach((Element) => Element.classList.toggle("hidden"))

    countdown()
}

function playerButtonChoise(choise) {
    playerChoise = choise
    // console.log(choise) 
    userButtton.forEach((Element) => Element.classList.toggle("hidden"))
}


function winCheker(p1, p2) {

    // 0 = stein , 1 = saks , 2 pappir 

    switch (p1) {
        case 0:
            // user did not chose, looses
            p1Img.src = "../img/Barrier2.jpg"
            p2Score++
            blink(p2Img)
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
                blink(p1Img)
                newround()
            } else {
                // p2 win
                p2Score++
                blink(p2Img)
                newround()
            }

            break;
        case 2:
            // user saks
            if (p2 == 0) {
                // p2 win STEIN
                p2Score++
                blink(p2Img)
                newround()
            } else if (p2 == 1) {
                // tie Saks
                newround()
            } else {
                // p1 win pappir
                p1Score++
                blink(p1Img)
                newround()
            }
            break;
        case 3:
            // user papir
            if (p2 == 0) {
                // p1 win STEIN
                p1Score++ 
                blink(p1Img)               
                newround()
            } else if (p2 == 1) {
                // p2 win Saks
                p2Score++
                blink(p2Img)
                newround()
            } else {
                // tie pappir
                newround()
            }
            break;
    }
    
}

function blink(player) {
    player.classList.toggle("blink-image")
    setTimeout(() => {
       player.classList.toggle("blink-image") 
    }, 1000);
}

function newround() {
    // console.log(p1Score,p2Score)
    scoreBoard.textContent = `${p1Score} - ${p2Score}`
    time = 2
    playerChoise = 0 


    setTimeout(() => {

        if (p1Score == 2) {
            restart()
            victory(p1Img)
        } else if (p2Score == 2){
            restart()
            victory(p2Img)
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

function victory(winner) {
    const audio = new Audio('../audio/winaudio.mp3');
    audio.play();

    winner.classList.toggle("blink-background")
    setTimeout(() => {
       winner.classList.toggle("blink-background") 
    }, 5000);
}

function countdown() {
    
    const countdownInterval = setInterval(() => {
        


        if (time === 0) {
          
            countdownelement.textContent = 'vis';
            clearInterval(randomImg);
            clearInterval(countdownInterval);
            // console.log(playerChoise) 

            

            setTimeout(() => {    
                randomImageTool(playerChoise-1, p1Img)
                randomImageTool(p2choise, p2Img)
                // console.log(p2choise, "i timeout")
                // console.log(p2Img.src)

                // console.log(playerChoise, p2choise, "playerChoise, p2Choise") 
                winCheker(playerChoise, p2choise)

            }, 110);
   

        } else if (time === 1) {


            if (playerChoise == 0) {
                countdownelement.textContent = time;
                time--;
                p2choise = Math.floor(Math.random() * 3)
                // console.log(p2choise, "test pcchoise") 
            } else {
                countdownelement.textContent = time;
                time--;
                p2choise = p2Autowin(playerChoise)
                // console.log(p2choise, "early")
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

function p2Autowin(p1choise) {
    let winNum

    switch (p1choise) {
        case 1:
            // player chose stone
            winNum = 2
            break;
        case 2:
            // player chose saks
            winNum = 0
            break;

        case 3: 
            // player chose pappir
            winNum = 1
            break;
    }
    // console.log(winNum, "test") 
    return winNum;

}

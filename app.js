let gameSeq = [];
let userSeq = [];
let btns = ["yellow" , "red" , "green" , "purple"];

let started = false;
let level = 0;
let highScore = 0;//

let h2 = document.querySelector("h2");

function startGame() {
    if (!started) {
        console.log("Game is Started");
        started = true;
        levelUp();
    }
}
document.addEventListener("keypress", startGame);

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    } , 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( function(){
        btn.classList.remove("userFlash");
    } , 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
        }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br>High Score: <b>${highScore}</b><br>Press any key to start.`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    if(level > highScore){
        highScore = level;
    }

    document.getElementById("high-score").innerText = `High Score: ${highScore}`;
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}




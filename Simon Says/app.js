let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["pink", "orange", "green", "purple"];

// Load sound files (you can replace these with your own)
let sounds = {
    pink: new Audio("B2.mp3"),
    orange: new Audio("C2.mp3"),
    green: new Audio("A2.mp3"),
    purple: new Audio("D2.mp3"),
    wrong: new Audio("fanfare.mp3")
};

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

function playSound(color) {
    if (sounds[color]) {
        sounds[color].currentTime = 0;
        sounds[color].play();
    }
}

function btnFlash(btn) {
    let color = btn.getAttribute("id");
    playSound(color);
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function playSequence() {
    let i = 0;

    let intervalId = setInterval(() => {
        let color = gameSeq[i];
        let btn = document.querySelector(`.${color}`);
        btnFlash(btn);
        i++;

        if (i >= gameSeq.length) {
            clearInterval(intervalId);
        }
    }, 600);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);

    playSequence();
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        playSound("wrong");
        h2.innerHTML = `GAME OVER! Your Score was <b>${level}</b><br>Press any key to start again.`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "black"; // Fix: stays black after game over
        }, 1000);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

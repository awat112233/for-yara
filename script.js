const startBtn = document.getElementById("startBtn");
const findBtn = document.getElementById("findBtn");
const key = document.getElementById("key");

const bgMusic = document.getElementById("bgMusic");

const welcome = document.getElementById("welcome");
const keyScreen = document.getElementById("keyScreen");
const letterScreen = document.getElementById("letterScreen");
const photoScreen = document.getElementById("photoScreen");
const finalScreen = document.getElementById("finalScreen");

key.style.display = "none";

// Start
startBtn.onclick = function(){

    welcome.classList.remove("active");
    keyScreen.classList.add("active");

};

// Find Key
findBtn.onclick = function(){

    findBtn.style.display = "none";
    key.style.display = "block";

};

// Click Key
key.onclick = function(){

    bgMusic.play();

    keyScreen.classList.remove("active");
    letterScreen.classList.add("active");
document.getElementById("letterText").innerHTML = "";
i = 0;
typeWriter();
};
const continueBtn = document.getElementById("continueBtn");

continueBtn.onclick = function(){

    letterScreen.classList.remove("active");
    photoScreen.classList.add("active");

};
const foreverBtn = document.getElementById("foreverBtn");

foreverBtn.onclick = function(){

    photoScreen.classList.remove("active");
    finalScreen.classList.add("active");

    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

};
const message =
`My dearest Yara,

Every moment with you makes my world brighter.

Thank you for being part of my life.

I Love You Forever ❤️`;

let i = 0;

function typeWriter(){

    if(i < message.length){

        document.getElementById("letterText").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}
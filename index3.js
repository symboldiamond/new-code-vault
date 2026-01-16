const input = document.getElementById("input");
const output = document.getElementById("output");
const backgroundAudio = document.getElementById("backgroundAudio");
const rightSound = document.getElementById("right");
const wrongSound = document.getElementById("wrong");

function music() {
    backgroundAudio.play().catch(e => console.log("Music play blocked by browser"));
}

const responses = {
    "hello": { text: "hoi there", width: "150px" },
    "thesymboldiamonds": { text: "thesymboldiamonds recreated the webpage of galaxyless to make the webpage good and fit from any screen", width: "auto" },
    "did thesymboldiamonds create this webpage": { text: "no, thesymboldiamonds didn't created this webpage it was a reference with the old webpage of galaxyless called the code vault", width: "auto" },
    "gold": { text: "ooh, shiny gold!", width: "250px" },
    "emerald": { text: "green is nice", width: "200px" },
    "galaxy": { text: "the galaxy is vast and full of wonders", width: "400px" }
};

function inputCheck() {
    const val = input.value.trim().toLowerCase();

    if (responses[val]) {
        output.textContent = responses[val].text;
        output.style.width = responses[val].width;
        
        output.style.display = "block";
        output.style.wordBreak = "break-all";

        rightSound.currentTime = 0;
        rightSound.play();
        music();
    }
    else if (val === "") { 
        wrongSound.currentTime = 0;
        wrongSound.play();
        output.textContent = output.textContent;
    }
    else if (val !== "") { 
        wrongSound.currentTime = 0;
        wrongSound.play();
        output.textContent = output.textContent;
    }
}

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        inputCheck();
    }
});

document.getElementById("btn").addEventListener("click", inputCheck);

const wrapper = document.querySelector('.wrapper');
if (wrapper) {
    const numSquares = 5;
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('span');
        const randomSize = Math.random() * 70 + 30; 
        
        square.style.width = `${randomSize}px`;
        square.style.height = `${randomSize}px`;
        square.style.left = `${Math.random() * 100}%`;
        square.style.position = 'fixed'; 
        square.style.bottom = '0'; 
        square.style.top = '900px'; 

        square.style.animationDelay = `${Math.random() * 30}s`; 
        square.style.animationDuration = `${Math.random() * 20 + 30}s`; 
        
        wrapper.appendChild(square);
    }
}
let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", startGame)
};

const startGame = () => {
    let button = document.getElementById("button");
    button.remove();
    play();
}

const play = () => {
    let playField = document.getElementById("playField");
    let img = document.createElement("img");
    randomImg(img);
    playField.appendChild(img);
    global.timeoutId = setInterval(changeAndMove, global.MOVE_DELAY);
    img.addEventListener("click", check);
}

const check = () => {
    let img = document.getElementById("doel")
    let nummerIMG = img.src.slice(-5,-4);
    if(nummerIMG === "0"){
        window.alert("je bent verloren, je score was "+global.score);
        document.location.reload(true);
    } else {
        global.score +=1;
        let counter = document.getElementById("score");
        counter.innerText = global.score;
        changeAndMove();
    }
    clearInterval(global.timeoutId);
    global.timeoutId = setInterval(changeAndMove, global.MOVE_DELAY);
}

const changeAndMove = () => {
    let img = document.getElementById("doel");
    let playfield= document.getElementById("playField");
    let maxLeft = playfield.clientWidth - img.offsetWidth;
    let maxHeight = playfield.clientHeight - img.offsetHeight;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    img.style.left=left+"px";
    img.style.top=top+"px";
    randomImg(img);
}

const randomImg = (img) => {
    let getal = Math.floor(Math.random() * 5);
    img.src = global.IMAGE_PATH_PREFIX + getal + global.IMAGE_PATH_SUFFIX;
    img.id = "doel";
}

window.addEventListener("load", setup);



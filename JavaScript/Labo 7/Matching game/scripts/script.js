let global ={
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,
    FIRSTCARD: null,
    SECONDCARD:null,
    ALEENKAARTOMGEDRAAID: false,
    ISBUSY: false
}

const setup = () => {
    let cards = [];
    for (let i = 1; i < global.AANTAL_KAARTEN + 1; i++) {
        cards[i - 1] = "kaart" + i + ".png";
    }
    for (let i = 1; i < global.AANTAL_KAARTEN + 1; i++) {
        cards[i + 5] = "kaart" + i + ".png";
    }
    for (let j = 1; j < global.AANTAL_KAARTEN * 2 + 1; j++) {
        let speelveld = document.getElementById("speelveld");
        let tag1 = document.createElement("div");
        tag1.classList.add("card");
        tag1.classList.add("cardnr")
        let value = "cardnr" + j;
        tag1.setAttribute("id", value);
        let tag2 = document.createElement("div");
        tag2.classList.add('voorkant')
        let tag3 = document.createElement("div");
        tag3.classList.add('achterkant')
        let tag4 = document.createElement("img");
        let gekozenKaart = Math.floor(Math.random() * cards.length)
        tag4.src = 'images/' + cards[gekozenKaart];
        cards.splice(gekozenKaart, 1);
        let value1 = "foto" + j
        tag4.setAttribute("id", value1)
        let tag5 = document.createElement("img");
        tag5.src = 'images/achterkant.png'
        tag2.appendChild(tag5)
        tag3.appendChild(tag4)
        tag1.appendChild(tag2)
        tag1.appendChild(tag3)
        speelveld.appendChild(tag1)
    }
    for(let k=1;k<13;k++){
        let img = document.getElementById("cardnr"+k);
        img.addEventListener("click",draaikaart)
    }
}
const draaikaart = (event) => {

    let target = event.currentTarget;
    let tussenStap = target.lastChild;
    let foto = tussenStap.firstChild;
    if (foto === global.FIRSTCARD) {
        return;
    }
    if (!global.ALEENKAARTOMGEDRAAID) {
        target.classList.toggle("flip")
        global.ALEENKAARTOMGEDRAAID = true;
        global.FIRSTCARD = foto;
        return;
    }
    if(!global.ISBUSY) {
        global.ISBUSY = true;
        target.classList.toggle("flip")
        global.SECONDCARD = foto;
        checkMatch()
    }
}

const remove =() => {
    let tussenstap1 = global.FIRSTCARD.parentElement;
    let tussenstap1bis = tussenstap1.parentElement;
    let tussenstap2 = global.SECONDCARD.parentElement;
    let tussenstap2bis = tussenstap2.parentElement;
}

const checkMatch = () => {
    if(global.FIRSTCARD.src === global.SECONDCARD.src){
        let tussenstap1 = global.FIRSTCARD.parentElement;
        let tussenstap1bis = tussenstap1.parentElement;
        let tussenstap2 = global.SECONDCARD.parentElement;
        let tussenstap2bis = tussenstap2.parentElement;
        tussenstap1bis.removeEventListener('click', draaikaart);
        tussenstap2bis.removeEventListener('click', draaikaart);
        setTimeout("",1000);
        tussenstap1bis.remove();
        tussenstap2bis.remove();

        resetGlobal();

    }
    else {
        setTimeout(terugdraaien,1500)
    }
}
const terugdraaien = () => {
    let tussenstap1 = global.FIRSTCARD.parentElement;
    let tussenstap1bis = tussenstap1.parentElement;
    let tussenstap2 = global.SECONDCARD.parentElement;
    let tussenstap2bis = tussenstap2.parentElement;
    tussenstap1bis.classList.remove('flip');
    tussenstap2bis.classList.remove('flip');
    resetGlobal()
}
const resetGlobal = () => {
    global.ALEENKAARTOMGEDRAAID = false;
    global.FIRSTCARD = null;
    global.SECONDCARD = null;
    global.ISBUSY = false;
}
window.addEventListener("load", setup);
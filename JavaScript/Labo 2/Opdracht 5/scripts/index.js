const setup = () => {
    let btnWijzig = document.getElementById("buttonWijzig");
    btnWijzig.addEventListener("click", Wijzig);
}

const Wijzig = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}


window.addEventListener("load", setup);
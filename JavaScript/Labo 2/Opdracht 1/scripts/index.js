const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", popUp);
}

const popUp = () => {
    window.alert("Dit is een mededeling");
    window.confirm("Weet u het zeker?");
    window.prompt("Wat is uw naam", "onbekend");
}
window.addEventListener("load", setup);
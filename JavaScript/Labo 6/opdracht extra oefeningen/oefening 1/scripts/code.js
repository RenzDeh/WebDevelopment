const setup = () => {
    //kan ook met innerText of textContent, gebruik zo weinig mogelijk innerHtml
    let pElement = document.querySelector('p');
    let firstChild = pElement.firstChild
    let tekst = document.createTextNode("Good job!");
    pElement.removeChild(firstChild)
    pElement.appendChild(tekst);
}
window.addEventListener("load", setup);
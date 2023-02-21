const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.getElementById("txtOutput");
    let van = document.getElementById("nrVooraan").value;
    let tot = document.getElementById("nrAchteraan").value;

    txtOutput.innerHTML =  txtInput.value.substring(van, tot);
}


window.addEventListener("load", setup);
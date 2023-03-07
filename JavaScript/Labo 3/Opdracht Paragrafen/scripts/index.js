const setup = () => {
    let txtOutput = document.getElementsByClassName("belangrijk");
    //txtOutput.className = txtOutput.className + " opvallend";
    for (let i = 0; i < txtOutput.length; i++) {
        txtOutput.item(i).classList.add("opvallend");
    }

}


window.addEventListener("load", setup);
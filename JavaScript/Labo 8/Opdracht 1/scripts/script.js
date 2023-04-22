const setup = () => {
    let verjaardag = new Date(2003,3,18);
    let now = new Date();
    let verschil = now.getTime()-verjaardag.getTime();
    console.log(Math.round(verschil/(1000*60*60*24)));
}
window.addEventListener("load", setup);
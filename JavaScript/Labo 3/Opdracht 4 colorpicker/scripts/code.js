const setup = () => {
	let sliders = document.getElementsByClassName("slider")
	sliders[0].addEventListener("input", update)
	sliders[1].addEventListener("input", update)
	sliders[2].addEventListener("input", update)
}
const update = () => {
	let sliderRed = document.getElementById("red");
	let sliderGreen = document.getElementById("green");
	let sliderBlue = document.getElementById("blue");

	let cijferRed = document.getElementById("nrRed");
	let cijferGreen = document.getElementById("nrGreen");
	let cijferBlue = document.getElementById("nrBlue");

	let colorDemo = document.getElementsByClassName("colorDemo");

	let valueRed = sliderRed.value;
	let valueGreen = sliderGreen.value;
	let valueBlue = sliderBlue.value;

	cijferRed.innerHTML = valueRed;
	cijferGreen.innerHTML = valueGreen;
	cijferBlue.innerHTML = valueBlue;

	let color = 'rgb('+valueRed+', ' + valueGreen + ', '+valueBlue+')';
	// kan ook met `rgb(${valueRed,${valueGreen}, ${valueBlue})`
	console.log(color);
	colorDemo[0].style.background = color;
}

window.addEventListener("load", setup);
window.addEventListener("load", update);
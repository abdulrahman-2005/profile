partnersContainer = document.getElementById("partners");

let names = [
	"stillhere.ya",
	"notemployedyet.io",
	"hmmm.really",
	"whatTheHell.com",
	"fake.org",
	"hey.what?",
	"GooNO",
	"stillhere.ya",
	"notemployedyet.io"
];

let fonts = ["f2vw", "f3vw", "f4vw", "f5vw", "f6vw"]


function getName() {
    return names[Math.floor((Math.random()*names.length))];
}

function getSize() {
    return fonts[Math.floor((Math.random()*fonts.length))];
}

function getRandomRGB() {
	const randomBetween = (min, max) =>
		min + Math.floor(Math.random() * (max - min + 1));
	const r = randomBetween(1, 43);
	const g = randomBetween(1, 90);
	const b = randomBetween(1, 123);
	const rgb = `rgb(${r},${g},0)`;
	return rgb;
}

function generate() {
    for (let i = 1; i < 12; i++) {
        partnersContainer.innerHTML += `<a href="haha.html"><button class="partner ${getSize()}" style="color: ${getRandomRGB()}; background: ${getRandomRGB()}">${getName()}</button></a>`;
    }
}

let currentTheme;
let currentLanguage;
window.onload = () => {
	document.getElementsByTagName("html")[0].innerHTML += `<a id="byMeCoffeePopUp" href="https://www.buymeacoffee.com/abdoazmy">☕$</a>	`
	const buyMeCoffeePopUp = document.getElementById("byMeCoffeePopUp");

	setInterval(() => {
		buyMeCoffeePopUp.style.zIndex = 10000;
		setTimeout(() => {
			buyMeCoffeePopUp.style.zIndex = -1;
		}, 15000);
	}, 5000);none

	try {
		currentTheme = JSON.parse(
			localStorage.getItem("__AbdulrahmanAzmyWebsiteStorage__")
		).mode;
	} catch (error) {
		currentTheme = "dark";
		changeLanguage = "en";
	}
	if (currentTheme === undefined) {
		currentTheme = "dark";
	}
	try {
		currentLanguage = JSON.parse(
			localStorage.getItem("__AbdulrahmanAzmyWebsiteStorage__")
		).language;
	} catch (error) {
		currentLanguage = "en";
	}
	localStorage.setItem(
		"__AbdulrahmanAzmyWebsiteStorage__",
		JSON.stringify({
			mode: currentTheme,
			language: currentLanguage,
		})
	);
	document
		.getElementsByTagName("html")[0]
		.setAttribute("data-theme", currentTheme);
	let button = document.getElementById("modeChange");
	button.innerHTML = currentTheme === "dark" ? "☀" : "🌙";
	button.setAttribute(
		"data-tooltip",
		currentTheme === "dark" ? "Light Mode" : "Dark Mode"
	);
	button.setAttribute("data-placement", "bottom");

	window.href = currentLanguage === "en" ? ".." : "ar";
};


class LocalStorageAccess {
	constructor(StorageName) {
		this._storage = window.localStorage;
		this._storageName = StorageName;
		try {
			this._storage.getItem(this._storageName);
		} catch (error) {
			this._storage.setItem(
				this._storageName,
				JSON.stringify({
					language: "en",
					theme: "dark",
				})
			);
		}
	}

	get() {
		return JSON.parse(this._storage.getItem(this._storageName));
	}

	set(value) {
		this._storage.setItem(this._storageName, JSON.stringify(value));
	}
}

MyWebsiteStorage = new LocalStorageAccess("__AbdulrahmanAzmyWebsiteStorage__");

const Styler = (stylerName) => {
	const style = `<style id="${stylerName}"></style>`;
	document.head.innerHTML += style;
	return document.getElementById(stylerName);
};

flashyBorderStyler = Styler("flashyBorderStyler");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
function flash() {
	flashyBorderStyler.innerHTML = `
	:root {
		--flash-border-color: ${colors[Math.floor(Math.random() * colors.length)]
		} !important;
	}`;
}

setInterval(flash, 1000);

const englishJokeMessages = [
	"stop it",
	"you're annoying",
	"stop",
	"what did you think would happen?",
	"just don't",
	"can you stop clicking any button?",
	"why are you doing this?",
	"why are you doing this to me?",
	"was it worth it?",
	"you're a bad person",
	"heck no",
	"haha, stop it",
];

const arabicJokeMessages = [
	"بس خلاص",
	"كفاية بقى",
	"مش كل شوية",
	"يعم صل عالنبي",
	"بطل تدوس الزراير",
	"كان هيحصل ايه يعني 🤣🤣",
	"طبعا لازم البيه",
	"بس",
	"كفاية",
	"بطل تدوس زرايري",
];
function jokeMessage() {
	let joke =
		MyWebsiteStorage.get().language === "en"
			? englishJokeMessages[
			Math.floor(Math.random() * englishJokeMessages.length)
			]
			: arabicJokeMessages[
			Math.floor(Math.random() * arabicJokeMessages.length)
			];
	let old = document.getElementById("container").innerHTML;
	document.getElementById(
		"container"
	).innerHTML = `<article style="border-radius: 40px;padding: 2vw; font-weight: bold;font-size: 1.2rem; background:var(--flash-border-color); color: white;">${joke}</article>`;
	setTimeout(() => {
		document.getElementById("container").innerHTML = old;
	}, 2000);
}

let oldStorage;
function changeLanguage() {
	oldStorage = MyWebsiteStorage.get();
	oldStorage.language = oldStorage.language === "en" ? "ar" : "en";
	MyWebsiteStorage.set(oldStorage);
	window.location.href = oldStorage.language === "en" ? ".." : "ar";
	let changeLanguageButton = document.getElementById("changeLanguage");
}

function changeMode(button) {
	oldStorage = MyWebsiteStorage.get();
	let htmlEl = document.getElementsByTagName("html")[0];
	htmlEl.setAttribute(
		"data-theme",
		htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark"
	);
	button.innerHTML =
		htmlEl.getAttribute("data-theme") === "dark" ? "☀" : "🌙";
	oldStorage.mode = htmlEl.getAttribute("data-theme");
	button.setAttribute(
		"data-tooltip",
		oldStorage.mode === "dark" ? "Light Mode" : "Dark Mode"
	);
	MyWebsiteStorage.set(oldStorage);
}

let defalutMessage = {
	ar: "مرحبا، اريد اتحدث معك",
	en: "Hello, I want to talk to you",
};
function sendMessage(option = "whatsapp") {
	let message = document.getElementById("message-textarea").value;
	message =
		message === ""
			? defalutMessage[MyWebsiteStorage.get().language.toLowerCase()]
			: message;

	if (option === "whatsapp") {
		message = message.replace(/ /g, "-");
		window.open(`https://wa.me/201201590033?text=${message}`, "_blank");
	} else if (option === "email") {
		message = message.replace(/ /g, "20%");
		window.open(
			`mailto:abuazmy.gg@gmail.com?subject=ContactFromWebsite&body=${message}`,
			"_blank"
		);
	}
}
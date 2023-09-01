const htmlEl = document.querySelector("html");
const container = document.querySelector("#container");
const modeChangeButton = document.getElementById("mode-change-button");
const langChangeButton = document.getElementById("lang-change-button");

class LocalStorageAccess {
	constructor(storageName) {
		this.storage = window.localStorage;
		this.storageName = storageName;
		try {
			this.storage.getItem(this.storageName);
		} catch (error) {
			this.storage.setItem(
				this.storageName,
				JSON.stringify({
					language: "en",
					theme: "dark",
				})
			);
		}
	}

	get() {
		return JSON.parse(this.storage.getItem(this.storageName));
	}

	set(value) {
		this.storage.setItem(this.storageName, JSON.stringify(value));
	}
}

const myWebsiteStorage = new LocalStorageAccess(
	"AbdulrahmanAzmyWebsiteStorage"
);

function setTheme(theme) {
	htmlEl.setAttribute("data-theme", theme);
	modeChangeButton.innerHTML = theme === "dark" ? "☀" : "🌙";
	myWebsiteStorage.set({ ...myWebsiteStorage.get(), mode: theme });
}

function changeTheme() {
	const theme =
		htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
	setTheme(theme);
}

function changeLanguage() {
	const oldStorage = myWebsiteStorage.get();
	const language = oldStorage.language === "en" ? "ar" : "en";
	myWebsiteStorage.set({ ...oldStorage, language });
	window.location.href = language === "en" ? "../en" : "../ar";
}

function sendMessage(option = "whatsapp") {
	let message = messageTextarea.value;
	message =
		message === ""
			? defalutMessage[myWebsiteStorage.get().language.toLowerCase()]
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

document.addEventListener("DOMContentLoaded", () => {
	try {
		const { mode, language } = myWebsiteStorage.get();
		setTheme(mode || "dark");
		myWebsiteStorage.set({ ...myWebsiteStorage.get(), language });
	} catch (error) {
		setTheme("dark");
		myWebsiteStorage.set({ ...myWebsiteStorage.get(), language: "en" });
	}
	modeChangeButton.addEventListener("click", () => {
		changeBG();
		changeTheme();
	});
	langChangeButton.addEventListener("click", changeLanguage);
});

const numberOfBGS = 12;
function randomBGImage() {
	let randomNumber = Math.floor(Math.random() * (numberOfBGS - 1)) + 1;
	return `bg${randomNumber}.svg`;
}

function changeBG() {
	container.style[
		"background-image"
	] = `url(../data/images/bgs/${randomBGImage()})`;
}

changeBG();

document.addEventListener("mousemove", (event) => {
	// Get the cursor position
	const x = event.clientX;
	const y = event.clientY;

	// Get the modeChangeButton's position and dimensions
	const rect = modeChangeButton.getBoundingClientRect();
	const elementX = rect.left;
	const elementY = rect.top;
	const elementWidth = rect.width;
	const elementHeight = rect.height;

	// Calculate the shadow position based on cursor position relative to the modeChangeButton
	const shadowX = ((x - elementX) / elementWidth) * 2 - 5;
	const shadowY = ((y - elementY) / elementHeight) * 2 - 5;

	// Update the box-shadow values
	modeChangeButton.style.boxShadow = `${shadowX}px ${shadowY}px 0 1px black`;
});

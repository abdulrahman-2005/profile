
const htmlEl = document.querySelector("html");
const modeChangeButton = document.getElementById("mode-change-button");

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

document.addEventListener("DOMContentLoaded", () => {
	try {
		const { mode, language } = myWebsiteStorage.get();
		setTheme(mode || "dark");
		myWebsiteStorage.set({ ...myWebsiteStorage.get(), language });
	} catch (error) {
		setTheme("dark");
		myWebsiteStorage.set({ ...myWebsiteStorage.get(), language: "en" });
	}
	modeChangeButton.addEventListener("click", changeTheme);
});
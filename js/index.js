const container = document.querySelector("#container");
const langChangeButton = document.getElementById("lang-change-button");

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
	modeChangeButton.addEventListener("click", () => {
		changeBG();
	});
	langChangeButton.addEventListener("click", changeLanguage);
});

const numberOfbgs =12
function randomBGImage() {
	let randomNumber = Math.floor(Math.random() * (numberOfbgs - 1)) + 1;
	return `bg${randomNumber}.svg`;
}

function changeBG() {
	container.style[
		"background-image"
	] = `url(../data/images/bgs/${randomBGImage()})`;
}

changeBG();


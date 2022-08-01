let PAGE = document.body.innerHTML;

function fetchRandomText() {
	let jokeList = majorData.currentLanguage;
	return jokeData[jokeList][Math.floor(Math.random() * jokeList.length)];
}

let translationsMapper;
function translatePage() {
	translationsMapper = [
		["#GETIN", majorData.translations[majorData.currentLanguage].getin],
		[
			"#ABOUT",
			majorData.translations[majorData.currentLanguage].descriptions
				.about,
		],
		[
			"#MYPIC",
			majorData.translations[majorData.currentLanguage].descriptions
				.profilePic,
		],
		[
			"#ABOUT1",
			majorData.translations[majorData.currentLanguage].descriptions
				.about1,
		],
		[
			"#ABOUT2",
			majorData.translations[majorData.currentLanguage].descriptions
				.about2,
		],
		[
			"#GITHUB",
			majorData.translations[majorData.currentLanguage].links.github,
		],
		[
			"#FACEBOOK",
			majorData.translations[majorData.currentLanguage].links.facebook,
		],
		[
			"#REDDIT",
			majorData.translations[majorData.currentLanguage].links.reddit,
		],
		[
			"#LINKEDIN",
			majorData.translations[majorData.currentLanguage].links.linkedin,
		],
		[
			"#TWITTER",
			majorData.translations[majorData.currentLanguage].links.twitter,
		],
		[
			"#GMAIL",
			majorData.translations[majorData.currentLanguage].links.gmail,
		],
		["#LNKGITHUB", majorData.links.github],
		["#LNKFACEBOOK", majorData.links.facebook],
		["#LNKREDDIT", majorData.links.reddit],
		["#LNKLINKEDIN", majorData.links.linkedin],
		["#LNKTWITTER", majorData.links.twitter],
		["#LNKGMAIL", majorData.links.gmail],
		[
			"#CHANGELANGBUTTON",
			majorData.currentLanguage === "english" ? "Ar" : "En",
		],
		["#PROFILEPICSOURCE", majorData.profilePicSource],
	];

	let page = PAGE;
	for (mapper of translationsMapper) {
		page = page.replace(mapper[0], mapper[1]);
	}
	document.body.innerHTML = page;
}

const languageStyler = createStyler("language-styler");
function changeLanguage() {
	languageStyler.innerHTML =
		majorData.currentLanguage === "english"
			? styleData.language.arabic
			: styleData.language.english; //change the language
	majorData.currentLanguage =
		majorData.currentLanguage === "english" ? "arabic" : "english"; //change the language
	translatePage();
}

function redButton() {
	const container = document.getElementById("container");
	container.innerHTML = `<div id="jokeMessagePlace"> ${fetchRandomText()} </div>`;
	setTimeout(() => {
		translatePage();
	}, 1300);
}

changeLanguage();

let colors = [
	"red",
	"blue",
	"green",
	"yellow",
	"orange",
	"purple",
	"pink",
	"black",
	"white",
];
const flashStyler = createStyler("flash-styler");
function flash() {
	let color = colors[Math.floor(Math.random() * colors.length)];
	flashStyler.innerHTML = `:root {--border-color: ${color};}`;
}

setInterval(flash, 700);

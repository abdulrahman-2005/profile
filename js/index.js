let PAGE = document.body.innerHTML;

const messagePanel = document.getElementById("message-panel");

const panel = (content = "") => {
	messagePanel.classList.toggle("close-panel");
	messagePanel.innerHTML = `<button id="close-panel" onclick="panel()">x</button></br>${content}`;
};

function ideabutton() {
	panel(`
    <div>
    The idea of the page style is from a better developer
    <div class="inner">Mr, Coding In Public
    <a target=_blank class="inner2" href="https://www.codinginpublic.dev">Visit His website</a></div>
    </div>
    
    
    </br>
    All rights reserved © 2022 Copyright Abdulrahman Azmy
    `);
}

function tipbutton() {
	panel(`
    <div>
    Look For The <p class="inner"></p>
    </div>
    `);
}


function fetchRandomText() {
	let jokeList = majorData.currentLanguage;
	return jokeData[jokeList][Math.floor(Math.random() * jokeList.length)];
}

let translationsMapper;
function translatePage() {
	translationsMapper = [
		[
			"#SERVICES",
			majorData.translations[majorData.currentLanguage].headerButtons
				.services,
		],
		[
			"#PROJECTS",
			majorData.translations[majorData.currentLanguage].headerButtons
				.projects,
		],
		[
			"#HIRE",
			majorData.translations[majorData.currentLanguage].headerButtons
				.hire,
		],
		[
			"#CONTACT",
			majorData.translations[majorData.currentLanguage].headerButtons
				.contact,
		],
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
		["#CHANGELANGBUTTON", majorData.currentLanguage === "english" ? "Ar" : "En"],
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

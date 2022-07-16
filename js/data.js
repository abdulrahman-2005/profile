

const majorData = {
	links: {
		facebook: "https://www.facebook.com/profile.php?id=100078502215093",
		github: "https://www.github.com/abdulrahman-2005",
		linkedin: "https://www.linkedin.com/in/abdulrahman-azmy-1129ab212/",
		reddit: "https://www.reddit.com/user/AbdoAzmy",
		twitter: "https://twitter.com/@Abdulra42082285",
        gmail: "abuazmy.gg@gmail.com"
	},
	currentLanguage: "english",
	translations: {
		english: {
			links: {
				facebook: "facebook",
				github: "github",
				linkedin: "linkedin",
				reddit: "reddit",
				twitter: "twitter",
                gmail: "gmail"
			},
			descriptions: {
				about: "about abdo",
				about1: "Hi, This is abdulrahman",
				about2: "a developer readt to learn",
				profilePic: "That's just me ⤣⤣",
			},
			headerButtons: {
				services: "services",
				contact: "contact",
				hire: "hire",
				projects: "projects",
			},
		},
		arabic: {
			links: {
				facebook: "فيسبوك",
				github: "جيت هاب",
				linkedin: "لينكد إن",
				reddit: "ريديت",
				twitter: "تويتر",
                gmail: "جمايل"
			},
			descriptions: {
				about: "عن عبدو",
				about1: "مرحبا، انا عبدالرحمن",
				about2: "مطور شغوف بالتعلم",
				profilePic: "دي صورتي ⤣⤣",
			},
			headerButtons: {
				services: "خدماتي",
				contact: "تواصل معي",
				hire: "عمل",
				projects: "مشاريعي",
			},
		},
	},
};

const styleData = {
	language: {
		english: `
        
        :root {
            --page-direction: ltr;
            --current-direction: left;
            --font-family: monospace;
            --opposite-direction: right;
        }
        `,
		arabic: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic&display=swap');
        :root {
            --page-direction: rtl;
            --current-direction: right;
            --font-family: 'Noto Naskh Arabic', serif;
            --opposite-direction: left;
        }`,
	},
	createdStylers: [],
};

const jokeData = {
	english: [
		"why, tho?",
		"just don’t",
		"like … can we just not?",
		"what’s up!?",
		"you won a useless prize!",
		"why would you? how could you?",
		"um … awkward …",
		"just moving through this world clicking things?",
		"stop pushing my buttons!",
		"you just had to try…",
		"have you <em>no</em> self control?",
		"psst! Don’t tell anyone else about this place!",
		"you couldn’t leave well enough alone …",
		"no…just no…",
		"stop clicking things!",
		"what did you <em>think</em> would happen?",
		"stop it!",
		"ouch! that hurts!",
		"it’s not a real browser, you know …",
		"let’s not click things and say we did …",
	],
	arabic: [
		"ليه، يعني",
		"حاول تبطل",
		"بس... ممكن تبطل",
		"ايه الحوار؟",
		"مكسبتش حاجة على فكرة!!",
		"انت فصييل",
		"بطل تضغط على زرايري",
		"لازم تجرب كل حاجة",
		"اي، بتوجع",
		"متقولش لحد علي السر",
		"انت تحتاج تجرب",
		"لازم تجرب كل حاجة",
		"بتفكر هيحصل ايه يعني",
		"ده مش برنامج حقيقي لو اخدت بالك",
		"بطل تدوس وتقول مدستش",
		"لا خلاص يعني",
		"الموضوع صار اوفر اوي",
	],
};


let translationsMapper = [
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
		majorData.translations[majorData.currentLanguage].headerButtons.hire,
	],
	[
		"#CONTACT",
		majorData.translations[majorData.currentLanguage].headerButtons.contact,
	],
	[
		"#MYPIC",
		majorData.translations[majorData.currentLanguage].descriptions
			.profilePic,
	],
	[
		"#ABOUT1",
		majorData.translations[majorData.currentLanguage].descriptions.about1,
	],
	[
		"#ABOUT2",
		majorData.translations[majorData.currentLanguage].descriptions.about2,
	],
	["#GITHUB", majorData.translations[majorData.currentLanguage].links.github],
	[
		"#FACEBOOK",
		majorData.translations[majorData.currentLanguage].links.facebook,
	],
	["#REDDIT", majorData.translations[majorData.currentLanguage].links.reddit],
	[
		"#LINKEDIN",
		majorData.translations[majorData.currentLanguage].links.linkedin,
	],
	[
		"#TWITTER",
		majorData.translations[majorData.currentLanguage].links.twitter,
	],
	["#GITHUBLNK", majorData.links.github],
	["#FACEBOOKLNK", majorData.links.facebook],
	["#REDDITLNK", majorData.links.reddit],
	["#LINKEDINLNK", majorData.links.linkedin],
	["#TWITTERLNK", majorData.links.twitter],
];

const createStyler = (stylerName) => {
	if (!styleData.createdStylers.includes(stylerName)) {
		document.head.innerHTML += `<style id="${stylerName}"></style>`;
		styleData.createdStylers.push(stylerName);
		return document.getElementById(stylerName);
	}
	throw Error(`${stylerName} already exists`);
};
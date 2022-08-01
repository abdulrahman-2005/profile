const majorData = {
	links: {
		facebook: "https://www.facebook.com/profile.php?id=100078502215093",
		github: "https://www.github.com/abdulrahman-2005",
		linkedin: "https://www.linkedin.com/in/abdulrahman-azmy-1129ab212/",
		reddit: "https://www.reddit.com/user/AbdoAzmy",
		twitter: "https://twitter.com/@Abdulra42082285",
        gmail: "abuazmy.gg@gmail.com"
	},
	currentLanguage: "arabic",
	profilePicSource: "pro.jpg",
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
				about2: "A Developer Looking Forward",
				profilePic: "That's just me ⤣⤣",
			},
			getin: "GET IN"
		},
		arabic: {
			links: {
				facebook: "فيسبوك",
				github: "جيت هاب",
				linkedin: "لينكد إن",
				reddit: "ريديت",
				twitter: "تويتر",
                gmail: "جيميل"
			},
			descriptions: {
				about: "عن عبدو",
				about1: "مرحبا، انا عبدالرحمن",
				about2: "مطور ومصمم وطالب ثانوي عام 😂",
				profilePic: "دي صورتي ⤣⤣",
			},
			getin: "استكشف"
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
        :root {
            --page-direction: rtl;
            --current-direction: right;
            --font-family: monospace;
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

const createStyler = (stylerName) => {
	if (!styleData.createdStylers.includes(stylerName)) {
		document.head.innerHTML += `<style id="${stylerName}"></style>`;
		styleData.createdStylers.push(stylerName);
		return document.getElementById(stylerName);
	}
	throw Error(`${stylerName} already exists`);
};
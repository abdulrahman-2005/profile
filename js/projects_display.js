const projectsListContainer = document.getElementById("projectsContainer")


let lang = myWebsiteStorage.get()["language"]
let data = DATA[lang]

let displayTitles = {
	en: {
		"desc": "description",
		"code": "code",
		"visit": "visit"
	},
	ar: {
		"desc": "الوصف",
		"code": "الكود",
		"visit": "زيارة"
	}
}[lang]


function randomBGImage() {
	return `bg${Math.floor(Math.random() * 8)+1}.svg`
}

function displayProject(project) {
    projectsListContainer.innerHTML += `
    <article class="project-card" style="background-image: url('../../data/images/${randomBGImage()}');">
				<div class="header">
					<h2>${project["name"]}</h2>
					<div class="img-container" >
						<img src="../../data/images/${project["github_repo"]}.jpg">
					</div>
				</div>
				<details style="width: 100%">
					<summary>${displayTitles["desc"]}</summary>
					<p>
						${project["desc"]}
					</p>
				</details>
				<div class="flexButtonContainer">
					<a target=_blank href="${project["url"]}" role="button"
						style="width: 100%">${displayTitles["visit"]}</a>
					<a target=_blank href="https://www.github.com/abdulrahman-2005/${project[" github_repo"]}"
						role="button" style="width: 100%">${displayTitles["code"]}</a>
				</div>
			</article>
            `
}

function displayProjects(data) {
    projectsListContainer.innerHTML = ""
    for (project of data) {
        displayProject(project)
    }
}


displayProjects(data)
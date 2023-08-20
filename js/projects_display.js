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

console.log(data)

function displayProject(project) {
    projectsListContainer.innerHTML += `
    <article>
		<h2>${project["name"]}</h2>
		<details style="width: 100%">
			<summary>${displayTitles["desc"]}</summary>
			<p>
                ${project["desc"]}
			</p>
		</details>
		<div class="flexButtonContainer">
			<a target=_blank href="${project["url"]}" role="button" style="width: 100%">${displayTitles["visit"]}</a>
			<a target=_blank href="https://www.github.com/abdulrahman-2005/${project["github_repo"]}" role="button" style="width: 100%">${displayTitles["code"]}</a>
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
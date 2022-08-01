window.onload = function () {
    document.querySelector("html").setAttribute("data-theme", "dark");
    document.getElementById("changeThemeButton").innerHTML = "🌙";
}

function changeTheme(changeThemeButton) {
    let HTML = document.querySelector("html");
    let currentTheme = HTML.getAttribute("data-theme");
    HTML.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
    changeThemeButton.innerHTML = currentTheme === "dark" ? "☀" : "🌙";
}
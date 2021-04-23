const screen = document.querySelector("body"),
    modeBtn = document.querySelector("mode_btn");

modeBtn.addEventListener("click", darkMode);

function darkMode() {
    screen.classList.toggle("dark_mode");
}
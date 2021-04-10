const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawRect() {
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 200, 200);
}

let painting = false

if (canvas) {
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", () => (painting = true));
    canvas.addEventListener("mouseup", () => (painting = false));
    canvas.addEventListener("mouseleave", () => (painting = false));
}

funcion handleMouseMove(event) {
    const x = event.offsetX;
    
}
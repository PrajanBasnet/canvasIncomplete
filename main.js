const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const size = document.querySelector("#size");
const erase = document.querySelector("#erase");
const color = document.querySelector("#color");
const penCIL = document.querySelector("#penCl");

let pencil = false;

// Tools
function rec(event) {
    ctx.beginPath();
    ctx.fillStyle = color.value;
    ctx.fillRect(event.clientX - 30, event.clientY - 30, 100, 100);
    ctx.clearRect(event.clientX - 20, event.clientY - 20, 80, 80);
    ctx.fill();
    console.log("Rect:position--", event.clientX, event.clientY);

}
function Erase() {
    pencil = false;
    url = "tst.png";
    canvas.style.cursor = ` url('img/Untitled 1.png'), pointer`;
}
function PencilActivate() {
    canvas.style.cursor = ` url('img/pencil.png'), pointer`;
    pencil = true;
}

function rectangleActivate() {
    let trg = document.querySelector(".roundCursor");
    let rect = document.querySelector("#rect");
    let draggedItem = null;

    function dragstartHandler(event) {
        draggedItem = event.target;
        event.dataTransfer.setData("text/plain", event.target.id);
        console.log("Rect droped");
    }

    canvas.addEventListener("dragover", (event) => {
        event.preventDefault();
    })
    canvas.addEventListener("drop", (event) => {
        event.preventDefault();
        console.log("Rect droped");

        rec(event);

    })

    rect.addEventListener("dragstart", dragstartHandler);

}
rectangleActivate();


let mouseDrag = false;
let lastX, lasty;
draw();

canvas.addEventListener("mousedown", (event) => {
    mouseDrag = true;
    let pos = getXY(canvas, event);
    lastX = pos.x;
    lasty = pos.y;
});

canvas.addEventListener("mouseup", (event) => {
    mouseDrag = false;
    // pencil = true;
});


function draw(x, y) {
    if (pencil == true) {

        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.lineWidth = size.value;
        ctx.strokeStyle = color.value;
        ctx.moveTo(lastX, lasty);
        ctx.lineTo(x, y);
        ctx.stroke();
        console.log(size.value);
    } else {
        console.log(size.value);
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x, y, size.value, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

canvas.addEventListener("mousemove", (event) => {

    if (mouseDrag == true) {

        let mouseX = event.offsetX;
        let mouseY = event.offsetY;


        let pos = getXY(canvas, event);
        console.log(`${pos.x}`);
        draw(pos.x, pos.y);
        lastX = pos.x;
        lasty = pos.y;
    }
})

function getXY(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

function convertToImg() {
    var dataUrl = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.href = dataUrl;
    a.download = 'canvas.down.jpeg';
    a.click();
}

// let download = document.getElementById("btnDow")


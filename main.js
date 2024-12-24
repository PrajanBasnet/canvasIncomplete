const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const size = document.querySelector("#size");
const erase = document.querySelector("#erase");
const color = document.querySelector("#color");
const penCIL = document.querySelector("#penCl");

let pencil = true;

// Tools
function Erase(){
    pencil = false;
    url = "tst.png";
    canvas.style.cursor = ` url('img/Untitled 1.png'), pointer`;
}
function PencilActivate(){
    pencil = true;
}

function rectangleActivate(){

}


let mouseDrag = false;
let lastX,lasty;
draw();

canvas.addEventListener("mousedown",(event)=>{
    mouseDrag = true;
    let pos = getXY(canvas,event);
    lastX = pos.x;
    lasty = pos.y;
});

canvas.addEventListener("mouseup",(event)=>{
    mouseDrag = false;
    // pencil = true;
});


function draw(x,y){
if(pencil == true){

    ctx.beginPath();
    ctx.lineCap = 'round'; 
    ctx.lineWidth = size.value; 
    ctx.strokeStyle = color.value;
    ctx.moveTo(lastX,lasty);
    ctx.lineTo(x,y);
    ctx.stroke();
    console.log(size.value);
}else{
    console.log(size.value);
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x,y,size.value,0, Math.PI *2 , true);
    ctx.fill();
}
}

canvas.addEventListener("mousemove",(event)=>{
    
    if(mouseDrag == true){
        
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    

    let pos = getXY(canvas,event);
    console.log(`${pos.x}`);
    draw(pos.x,pos.y);
    lastX = pos.x;
    lasty = pos.y;
}
})

function getXY(canvas,event){
    var rect = canvas.getBoundingClientRect();
    return{
        x:event.clientX - rect.left,
        y:event.clientY - rect.top
    }
}

function convertToImg(){
    var dataUrl = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.href = dataUrl;
    a.download = 'canvas.down.jpeg';
    a.click();
}

// let download = document.getElementById("btnDow")


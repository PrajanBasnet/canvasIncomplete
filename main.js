const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const size = document.querySelector("#size");
const erase = document.querySelector("#erase");
const color = document.querySelector("#color");

let pencil = true;

function Erase(){
    pencil = false;

}

function draw(x,y){
if(pencil == true){
    console.log(size.value);
    ctx.beginPath();
    ctx.fillStyle = color.value;
    ctx.arc(x,y,size.value,0, Math.PI *2 , true);
    ctx.fill();
}else{
    console.log(size.value);
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x,y,size.value,0, Math.PI *2 , true);
    ctx.fill();
}
}
draw();
let mouseDrag = false;

canvas.addEventListener("mousedown",(event)=>{
    mouseDrag = true;
});

canvas.addEventListener("mouseup",(event)=>{
    mouseDrag = false;
    pencil = true;
});


canvas.addEventListener("mousemove",(event)=>{

    if(mouseDrag == true){

    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let pos = getXY(canvas,event);
    console.log(`${pos.x}`);
    draw(pos.x,pos.y);
    }
})

function getXY(canvas,event){
    var rect = canvas.getBoundingClientRect();
    return{
        x:event.clientX - rect.left,
        y:event.clientY - rect.top
    }
}


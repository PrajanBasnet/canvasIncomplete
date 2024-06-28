const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const size = document.querySelector("#size");
// function sizeMouse(){
//         console.log(typeof(size.value));
//         console.log("coo");
// }
function draw(x,y){

    console.log(size.value);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(x,y,size.value,0, Math.PI *2 , true);
    ctx.fill();
    ctx.stroke();
}
draw();
let mouseDrag = false;

canvas.addEventListener("mousedown",(event)=>{
    mouseDrag = true;
});

canvas.addEventListener("mouseup",(event)=>{
    mouseDrag = false   ;
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


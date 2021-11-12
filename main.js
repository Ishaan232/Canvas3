var oldX,oldY;
var width = screen.width;
Newwidth = screen.width-70;
Newheight = screen.height-300;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="green";
width_of_line=1;
if(width<992){
document.getElementById("myCanvas").width=Newwidth;
document.getElementById("myCanvas").height=Newheight;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",FM1);
function FM1(e){
    colour=document.getElementById("colour").value;
    width_of_line=document.getElementById("width_of_line").value;
console.log("Enabled");
oldX=e.touches[0].clientX - canvas.offsetLeft;
oldY=e.touches[0].clientY - canvas.offsetLeft;
}
canvas.addEventListener("touchmove",FM2);
function FM2(e){
    currentx=e.touches[0].clientX - canvas.offsetLeft;
    currenty=e.touches[0].clientY - canvas.offsetLeft;
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width_of_line;
    console.log("Last position of X and Y is");
    console.log(oldX,oldY)
    ctx.moveTo(oldX,oldY)
    console.log("Current position of X and Y is");
    console.log(currentx,currenty)
    ctx.lineTo(currentx,currenty)
    ctx.stroke();
oldX=currentx;
oldY=currenty;
}

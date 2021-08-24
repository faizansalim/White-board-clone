const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
let  pencilSize = document.querySelector("#pencilSize");
let eraserSize = document.querySelector("#eraserSize");

let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let pencilWidth =1;
let eraserWidth =1;


pencilSize.addEventListener("change",function (e) {
    let size= e.target.value;
    pencilWidth=size;
    ctx.lineWidth = pencilWidth;
    
})


eraserSize.addEventListener("change",function (e) {
    let size = e.target.value;
    eraserWidth = size;
    ctx.lineWidth = eraserWidth;
})

let {top : offsetTop} = canvas.getBoundingClientRect();

canvas.height = window.innerHeight - offsetTop;
canvas.width = window.innerWidth;
let activeTool = "pencil";
let penciloptions = document.querySelector("#pencil-options");
let eraseroptions = document.querySelector("#eraser-options")


pencil.addEventListener("click", function () {
    if(!pencil.classList.contains("active-tool")){
        eraser.classList.remove("active-tool");
        pencil.classList.add("active-tool");
        eraseroptions.classList.add("hide");
        ctx.strokeStyle="black";
        ctx.lineWidth= pencilWidth;
    }
else{
    //agar already active hai
    if(penciloptions.classList.contains('hide')){
    penciloptions.classList.remove("hide");
    }
    else{
        penciloptions.classList.add("hide");
    }
}
    
});

eraser.addEventListener("click", function () {
    if(!eraser.classList.contains("active-tool")){
        pencil.classList.remove("active-tool");
        eraser.classList.add("active-tool");
        penciloptions.classList.add('hide');
        ctx.strokeStyle="white";
        ctx.lineWidth = eraserWidth;
    }
    else{
        if(eraseroptions.classList.contains('hide')){
            eraseroptions.classList.remove('hide');
        }
        else{
            eraseroptions.classList.add('hide');
        }
       
    }
   
})



window.addEventListener("resize",function(e){
    canvas.height = window.innerHeight - offsetTop;
    canvas.width = window.innerWidth;

    drawPoints();
});


let pointsdb =[];
var ispendown = false;
let line=[];
let redodb =[];

canvas.addEventListener("mousedown",function (e) {
    if(redodb.length){
        redodb=[];
    }
    ispendown=true;
    let x =e.clientX;
    let y =e.clientY - offsetTop;
    ctx.beginPath();
    ctx.moveTo(x,y);
    let point = {
        id : "md",
        x : x,
        y : y,
    strokeStyle : ctx.strokeStyle,
    lineWidth: ctx.lineWidth
    }
    line.push(point);
})

canvas.addEventListener("mousemove",function (e) {
    if(ispendown==true){
    let x =e.clientX;
    let y=e.clientY - offsetTop;
    ctx.lineTo(x,y);
    ctx.stroke();
    
   let point = {
        id : "mm",
        x : x,
        y : y,
    strokeStyle : ctx.strokeStyle,
    lineWidth: ctx.lineWidth
    }
    line.push(point);
}
    

})

canvas.addEventListener("mouseup",function (e) {
    ispendown = false;
    pointsdb.push(line);
    console.log(pointsdb);
    line=[];
})


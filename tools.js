const undo = document.querySelector("#undo");
const redo = document.querySelector("#redo");
let pencilColors = document.querySelectorAll(".pencil-colors div");{






for(let i=0;i<pencilColors.length;i++){
pencilColors[i].addEventListener("click",function () {
    if(pencilColors[i].classList.contains("red")){
            ctx.strokeStyle="red";

    }
    else if(pencilColors[i].classList.contains("yellow")){
        ctx.strokeStyle="yellow";
    }
    else if(pencilColors[i].classList.contains("blue")){
            ctx.strokeStyle= "blue";
    }
    else {
            ctx.strokeStyle="black";
    }


})

}









undo.addEventListener("click", function(){
// you will get latest line
if(pointsdb.length!=0){
let latestline = pointsdb.pop();
redodb.push(latestline);
ctx.clearRect(0,0,canvas.width,canvas.height);
drawPoints();
}
});


redo.addEventListener("click",function () {
if(redodb.length!=0){
let line = redodb.pop();
pointsdb.push(line);
for(let i=0;i<line.length;i++){
    ctx.lineWidth = line[i].lineWidth;
    ctx.strokeStyle = line[i].strokeStyle;
    if(line[i].id=="md"){
        ctx.beginPath();
        ctx.moveTo(line[i].x , line[i].y);
    }
    else{
        ctx.lineTo(line[i].x, line[i].y);
        ctx.stroke();

    }
}
}
});



function drawPoints() {
    for(let i =0;i<pointsdb.length;i++){
        let line= pointsdb[i];
        for(let j=0;j<line.length;j++){
            ctx.lineWidth = line[j].lineWidth;
            ctx.strokeStyle = line[j].strokeStyle;
            if(line[j].id=="md"){
                ctx.beginPath();
                ctx.moveTo(line[j].x , line[j].y);
            }
            else{
                ctx.lineTo(line[j].x, line[j].y);
                ctx.stroke();

            }
        }
    }
}
}

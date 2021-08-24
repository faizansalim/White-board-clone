let stickyAdd = document.querySelector("#sticky");

stickyAdd.addEventListener("click",function () {
    
    let sticky = document.createElement("div");
    sticky.classList.add("sticky");

    let stickyHeader = document.createElement("div");
    stickyHeader.classList.add("sticky-header");

    let minimize = document.createElement("div");
    minimize.classList.add("minimize");

    let close = document.createElement("div");
    close.classList.add("close");

    let stickyContent = document.createElement("div");
    stickyContent.classList.add("sticky-content");

    let textbox =document.createElement("textarea");
    textbox.setAttribute("class","stickybox");
    textbox.setAttribute("rows","10");
    textbox.setAttribute("cols","30");

    stickyContent.appendChild(textbox);
    stickyHeader.appendChild(minimize);
    stickyHeader.appendChild(close);
    sticky.appendChild(stickyHeader);
    sticky.appendChild(stickyContent);
    
    document.body.appendChild(sticky);

    let intialX;
    let initalY;
    let isStickyHold = false;

    stickyHeader.addEventListener("mousedown", function (e) {
        isStickyHold=true;
        intialX= e.clientX;
        intialY = e.clientY;
        
    })

    stickyHeader.addEventListener("mousemove",function(e){
            if(isStickyHold){
                let finalX = e.clientX; 
                let finalY = e.clientY;
                let dx = finalX-intialX;
                let dy = finalY-initalY;

                let {top , left} =sticky.getBoundingClientRect();
                sticky.style.top= top+dy+"px";
                sticky.style.left = left+dx+"px";

                intialX=finalX;
                intialY = finalY;
            }
    })

    stickyHeader.addEventListener("mouseup",function(){
            isStickyHold=false;
    })












    minimize.addEventListener("click",function () {
        textbox.style.display= textbox.style.display=="none"?"block":"none";
    })

    close.addEventListener("click",function () {
        sticky.remove();
    })
})
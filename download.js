let download = document.getElementById('download');

download.addEventListener("click",function(){
   let filepath = canvas.toDataURL('image/png');
   let aTag = document.createElement('a');
   aTag.setAttribute("download","canvas.png");
   aTag.setAttribute("href",filepath);
   aTag.click();
   aTag.remove();
})
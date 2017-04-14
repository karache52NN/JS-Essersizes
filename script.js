window.onload = init();

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = imgClickHandler;
    }
    var hidimage=document.getElementById("zero3");
    hidimage.onmouseover=imgClickHandler;
    hidimage.onmouseout=blurElem;
    /*setInterval(timerHandler, 5000);*/

}

function imgClickHandler(eventObj) {
    var img = eventObj.target;
    var name= "img/zero.jpg";
    img.src=name;

    setTimeout(timerHandler, 5000, img);

}
function blurElem(eventObj){
  var img=eventObj.target;
  img.src="img/zeroblur.jpg";
}
function timerHandler(img){
  img.src="img/zeroblur.jpg";
}

window.onload = init();

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = imgClickHandler(eventObj);
    }

}

function imgClickHandler(eventObj) {
    var img = eventObj.target;
    var name= "img/zero.jpg";
    img.src=name;

}

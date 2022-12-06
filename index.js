function zoomIn() {
    var pic = document.getElementById("pic");
    var width = pic.clientWidth;
    pic.style.width = width + 25 + "px";
}

function zoomOut() {
    var pic = document.getElementById("pic");
    var width = pic.clientWidth;
    pic.style.width = width - 25 + "px";
}


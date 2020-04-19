/*HOME BANNER POPUP FORM*/

function popup(){
    document.getElementById("hb-popup").classList.toggle("form-fade");
}

/*GALLERY*/

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "flex";
  }
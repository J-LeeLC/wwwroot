var photo = document.getElementById("photo");
var curImg = 0;
var figcaption = document.getElementById("figcaption");
var galleryList = document.getElementById("gallery").getElementsByTagName("ul")[0];
var mask = document.getElementsByClassName("mask")[0];
var listImg = galleryList.getElementsByTagName("img");
var len = listImg.length;
galleryList.addEventListener("click",function(e){
    var target = e.target;
    if(target.nodeName !== "IMG"){
        return;
    }
    mask.getElementsByClassName.display = "block";
    scrollTo(0,0);
    photo.src = target.getAttribute("src");
    figcaption.innerHTML = target.getAttribute("title");
    for(var i = 0; i < len; i++){
        if(listImg[i].src === photo.src){
            curImg = i;
        }
    }
},false);
var btnClose = document.getElementsByClassName("mask-close")[0];
btnClose.addEventListener("click",close,false);
document.addEventListener("keydown",jumpPage,false);
var btnPrev = document.getElementsByClassName("mask-prev")[0];
btnPrev.addEventListener("click",prev,false);
var btnNext = document.getElementsByClassName("mask-next")[0];
btnNext.addEventListener("click",next,false);
function close(){
    mask.style.display = "none";
}
function prev(){
    if(curImg - 1 <= 1){
        curImg = len;
    }
    curImg--;
    changePhoto();
}
function next(){
    if(curImg + 1 >= len){
        curImg = 0;
    }
    curImg++;
    changePhoto();
}
function changePhoto(){
    photo.src = listImg[curImg].src;
    photo.setAttribute("title",listImg[curImg].title);
    figcaption.innerHTML = photo.getAttribute("title");
}
function jumpPage(event){
    if(event.keyCode == 37){
        next();
    }
    if(event.keyCode == 39){
        prev();
    }
    if(event.keyCode == 27){
        close();
    }
}
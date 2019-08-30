var btn = document.getElementsByTagName("button")[0];
var layer = document.getElementById("layer");
var as = layer.getElementsByTagName("a");
var cls = layer.getElementsByClassName("layer-close")[0];
btn.addEventListener("click",function(){
    layer.style.display = "block";
});
cls.addEventListener("click",function(){
    layer.style.display = "none";
});
as[0].addEventListener("click",function(){
    layer.style.display = "none";
});
as[1].addEventListener("click",function(){
    layer.style.display = "none";
});
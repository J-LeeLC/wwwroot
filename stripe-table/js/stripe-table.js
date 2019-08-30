var ntr = 2;
var table = document.getElementsByClassName("stripe")[0];
var trs = table.getElementsByTagName("tr");
for(var j = 0; j < trs.length; j++){
    if(j % ntr == 0){
        trs[j].className = "stripe-row";
    }
    else{
        trs[j].className = "";
    }
}
table.addEventListener("mouseover",function (e){
    var current_row = e.target.parentNode;
    if(current_row.nodeName !== "TR"){
        return;
    }
    current_row.className = "active";
    current_row.addEventListener("mouseout",function(){
        this.className = "";
    });
});
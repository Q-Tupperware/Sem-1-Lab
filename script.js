function changeColor(squareId){
var square=document.getElementById(squareId);
var randomColor=getRandomColor();
square.style.backgroundColor=randomColor;
}
function getRandomColor(){
var letters='0123456789ABCDEF';
var color='#';
for (var i=0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)];
}
return color;
}
function flashColors(){
    var flashes=document.querySelectorAll(".flash")
    var fun=document.getElementById("fact")
    flashes.forEach(function(t){
        t.style.backgroundColor = getRandomColor()
    })
fun.style.color = getRandomColor()
}
setInterval(flashColors,100)
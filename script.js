let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let buttonCreate = document.getElementById("create");
let buttonReset = document.getElementById("reset");
let colorPalette = ["#F22294", "#EE05F2", "#BC04BF", "#151426", "#04D9C4" ]


let colorRandom = function(){
    color = colorPalette[getRandomInt(0,5)];
    return color;
}
console.log(colorRandom());
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let circle = function(x, y, r, sa, ea){
    context.beginPath();
    context.arc(x , y , r, sa, ea );
    context.fillStyle = colorRandom();
    console.log(colorRandom());
    context.fill();
}

let repeatCircle = function (){
    let cN = getRandomInt(10,50);
    for (let i = 1; i < cN; i++) {
            x = getRandomInt(0,2000);
            y = getRandomInt(0,2000);
            size = getRandomInt(10,100);
        circle(x,y,size,0,Math.PI*2);
    }
    
}
buttonCreate.addEventListener("click",repeatCircle);

let resetCanvas = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
buttonReset.addEventListener("click",resetCanvas);
var color = generateColor(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-text");
colorDisplay.textContent = pickedColor;

var squares = document.querySelectorAll(".square");
var messDisplay = document.querySelector(".message");

var resetBtn = document.querySelector("#reset-game");
var easyBtn = document.querySelector(".easyMode");
var hardBtn = document.querySelector(".hardMode");

function randomColor(){
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() *256);

    return "rgb("+ r + ", " + g + ", " + b +")";
}

function generateColor(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function pickColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function changeColor(color){

    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

for(var i=0; i<color.length; i++){
    squares[i].style.backgroundColor = color[i];

    squares[i].addEventListener("click", function(){

        var clickColor = this.style.backgroundColor;

        if(clickColor === pickedColor){
            messDisplay.textContent = "Correct!!";
            resetBtn.textContent = "Play Again???";
            changeColor(clickColor);
        }
        else{
            messDisplay.textContent = "Wrong, keep try again";
            this.style.backgroundColor = "#fff";
        }
    });
}

resetBtn.addEventListener("click", function(){
    //make new color
    color = generateColor(6);

    //pick a new random array
    pickedColor = pickColor();

    //change dispay color to match pick color
    colorDisplay.textContent = pickedColor

    //change color of squares
    for(var i=0; i<color.length; i++){
        squares[i].style.backgroundColor = color[i];
    }

    resetBtn.textContent = "New Game";
    messDisplay.textContent = "";
});
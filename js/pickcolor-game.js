
var numSquare = 6;
var color = [];
var pickedColor;

var colorDisplay = document.getElementById("color-text");
colorDisplay.textContent = pickedColor;

var squares = document.querySelectorAll(".square");
var messDisplay = document.querySelector(".message");
var resetBtn = document.querySelector("#reset-game");
var modeBtn = document.querySelectorAll(".mode-btn");

function randomColor(){

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb("+ r +", " + g + ", " + b +")";
}

function changeColor(color){

    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
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

function setUpSqaures(){

    for(var i=0;i<squares.length; i++){

        squares[i].addEventListener("click", function(){

            var clickColor = this.style.backgroundColor;

            if(clickColor === pickedColor){

                messDisplay.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
                changeColor(clickColor);
            }
            else{
                messDisplay.textContent = "Wrong, guest again!"; 
                this.style.backgroundColor = "#fff";
            }
        });
    }
}

//Reset Game
function resetGame(){

    //make new color array
    color = generateColor(numSquare);

    //pick new random color
    pickedColor = pickColor();

    //show new picked color
    colorDisplay.textContent = pickedColor;

    //change color of squares
    for(var i=0;i<squares.length; i++){

        if(color[i]){
            squares[i].style.backgroundColor = color[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }

    resetBtn.textContent = "New Game";
    messDisplay.textContent = "";
}

resetBtn.addEventListener("click", function(){
    resetGame();
});

//Mode game
function modeGame(){

    for(var i=0; i<modeBtn.length; i++){

        modeBtn[i].addEventListener("click", function(){

            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquare=3: numSquare=6;
    
            resetGame();
        });
    }
}

function init(){

    setUpSqaures();
    modeGame();
    resetGame();
}

init();
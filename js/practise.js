

var num = [1,2,7, "ae"];
var piece = num.slice(0,4);


var customer = {
    name: "salah",
    dob: {
        date: "08",
        month: "06",
        year: "1993"
    },
    job: "Doctor"
};

var txt ="";
Object.keys(customer.dob).forEach(function(prop){

    txt += customer.dob[prop];
    console.log(txt);
});

// Object.keys(customer.dob).forEach(function(prop){
//     var result = "DOB: ";
//     result += prop[0].toString() +"/";
//     console.log(result);
// });


var x;
for(x in customer.dob){
   
}

//Movie DB
var movies =[
    {
        title: "In Burger",
        hasWatched: true,
        rating: 4
    },

    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    }
]

movies.forEach(function(movie){
    
    var result ="You have ";

    if(movie.hasWatched){
        result += "watched ";
    }
    else result += "not watched ";

    result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars";

    console.log(result);
});

document.getElementById("demo_show").innerText = txt;

//Color game
// var colors =[
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ];



var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-text");
colorDisplay.textContent = pickedColor;
var messDisplay = document.querySelector(".message");
var resetBtn = document.querySelector("#reset-game");
var easyBtn = document.querySelector("#easyMode");
var hardBtn = document.querySelector("#hardMode");
var modeBtn = document.querySelectorAll(".mode-btn");

init();

function init(){

}


for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
       //alert("Click square "+ (squares[i]+1));

       var clickColor = this.style.backgroundColor;

        if(clickColor === pickedColor){
            messDisplay.textContent = "Correct!";
            changeColor(clickColor);
            resetBtn.textContent ="Play Again?";
        }
        else {
            messDisplay.textContent = "Wrong color, selectagain";
            this.style.backgroundColor = "#fff";
        }
    });
}

function changeColor(color){

    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb("+ r +", " + g + ", " + b +")";
}

//reset game
resetBtn.addEventListener("click", function(){
    reset();
});


// //choose Easy Mode
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     resetBtn.textContent = "New game";
//     messDisplay.textContent = "";

//     for(var i=0; i<squares.length; i++){

//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// });


// //choose Hard Mode
// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     resetBtn.textContent = "New game";
//     messDisplay.textContent = "";

//     for(var i=0; i<squares.length; i++){
//         squares[i].style.display = "block";
//         squares[i].style.backgroundColor = colors[i];
//     }
// });


//update function choose mode
for(var i=0; i<modeBtn.length; i++){

    modeBtn[i].addEventListener("click", function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        
        this.classList.add("selected");

        this.textContent ==="Easy" ? numSquares = 3 : numSquares = 6;

        reset();
    });
}

function reset() {
    //make new game
    colors = generateRandomColor(numSquares);

    //pick a new random array
    pickedColor = pickColor();

    //change dispay color to match pick color
    colorDisplay.textContent = pickedColor;

    //change color of squares
    for(var i = 0; i<squares.length; i++){

        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    resetBtn.textContent = "New game";
    messDisplay.textContent = "";
}

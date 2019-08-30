

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
var colors =[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-text");
colorDisplay.textContent = pickedColor;
var messDisplay = document.querySelector(".message");

for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
       //alert("Click square "+ (squares[i]+1));

       var clickColor = this.style.backgroundColor;

        if(clickColor === pickedColor){
            messDisplay.textContent = "Correct!";
            changeColor(clickColor);
        }
        else messDisplay.textContent = "Wrong color, selectagain";
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

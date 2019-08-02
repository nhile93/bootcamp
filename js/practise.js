

var num = [1,2,7, "ae"];
var piece = num.slice(0,4);

var pop_text = document.getElementsByClassName("pop_text").textContent;

document.getElementById("demo_show").innerText = piece + ", " + pop_text;

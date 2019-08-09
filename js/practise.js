

var num = [1,2,7, "ae"];
var piece = num.slice(0,4);

var pop_text = document.getElementsByClassName("pop_text").textContent;

//document.getElementById("demo_show").innerText = piece + ", " + pop_text;

//Object
var customer = {
    name: "salah",
    dob: {
        month: "06",
        date: "08",
        year: "1993"
    },
    job: "Doctor"
};

var txt ="";
var x;
var count=0;

for(x in customer.dob){
    txt += customer.dob[x];

    for(count; Object.keys(customer.dob).length -1; count++){
        txt += "/";
    }
}
console.log();

//document.getElementById("demo_show").innerText = txt;

//Object declare type 2
var staff = new Object();
staff.name = "Lily";
staff.dob = "Oct 15th 1986";
staff.position = "developer";
document.getElementById("demo_show").innerText = staff.dob;
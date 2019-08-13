

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
var len = Object.keys(customer.dob).length;

// Object.keys(customer.dob).forEach(function(prop){

//     txt += customer.dob[prop];
//     console.log(prop);

//     for(let i=0; i<len-1; i++){
//         txt += "/";
//     }
// });

for(let i=0; i<len; i++){
    txt += Object.keys(customer.dob) + "/";
    
}


document.getElementById("demo_show").innerText = txt;
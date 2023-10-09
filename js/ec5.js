// var miles;
// var gallons;
// var mpg;
// var again = "y";
let miles;
let gallons;
let mpg;
let again = 'y';
let repeat; // boolean variable required for inside loop to validate y/n entry for repeating entries
document.getElementById("title1").innerHTML="Lab 05 - Calculate MPG App"
do {
    // miles = parseFloat(window.prompt("Enter miles driven"));
    // gallons = parseFloat(window.prompt("Enter size of tank in gallons"));
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        // window.document.write("Miles per gallon: " + parseInt(mpg, 10));
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        // window.alert("One or both entries are invalid");
        alert('One or both entries are invalid.');
    }
    again = window.prompt("Repeat entries? (y/n)", "y").toLowerCase();
    /* 
    adding code tovlaidate repeat entry to y/n and repeat till correct answered*/
    do{ 
        console.log(again);
        if (again === 'y' || again === 'n') {
            repeat = false;
            break;
        } else {
        //  ans = prompt("continue? (y/n):").toLowerCase();
         again = window.prompt("Incorrect entry. Repeat entries? (y/n)", "y").toLowerCase();
         repeat = true;
         continue;
    
        }
    }while(repeat)    
} while (again === "y");

console.log('Application has exited.');
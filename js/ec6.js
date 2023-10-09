// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
// variables to use in while conditions in validation of input values.

let invBool, rateBool, yearsBool; 

document.getElementById("title1").innerHTML="Lab 06 - Future Value Application";

// COLLECT VALUES FROM THE USER AND VALIDATE
// Within investment, the number should be numeric. Within rate, the number should be numeric and between 0 and a realistic rate like 6%. For years, the number should be numeric and between 1 and 30.

investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
do {
    // console.log(!(isNaN(investment)));
    if ((isNaN(investment))) {
        // document.write("Investment amount should be a Number.");
        console.log("Investment amount should be a Number.");
        investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
        invBool = true;
        continue;
    } else {
        invBool = false; 
        break;
    }
} while (invBool);

rate = parseFloat(prompt('Enter interest rate as xx.x (0-6)'));
do {
    if ((isNaN(rate))) {
       rate = parseFloat(prompt('Interest rate should be a number between 0.00 and 6.00'));
        rateBool = true;
        continue;
    } else if(rate < 0.00 || rate > 6.00){
        rate = parseFloat(prompt('Enter reasonable interest rate between 0.00 and 6.00'));
        rateBool = true;
        continue;
    } else {
        rateBool = false;
        break;
    }
} while (rateBool);


years = parseInt(prompt('Enter the number of years you want to invest for (1-30): '),10);
do {
    if(years < 0 || years > 30){
        years = parseFloat(prompt('Enter number of years to invest for between 0-30: '),10);
        yearsBool = true;
        continue;
    } else {
        yearsBool = false;
        break;
    }
} while (yearsBool);



//CALCULATE FUTURE VALUE
futureValue = investment;
for (i = 1; i <= years; i += 1) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// //DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);

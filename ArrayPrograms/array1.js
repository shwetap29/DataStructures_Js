//Generates 10 random 3 digit values

const prompt = require('prompt-sync')();

    let numArray = [];

    for (index = 1; index < 10; index++) {
        let num = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
        numArray.push(num);
    }
    console.log("Array is " + numArray); // Store into an arrar

    let firstMax = numArray[0];  //Find The 2nd largest and 2nd smallest
    let secondMax = numArray[0];
    let firstMin = numArray[0];
    let secondMin = numArray[0];
    
    for (let number of numArray) {
        if (number > firstMax) {
            secondMax = firstMax;
            firstMax = number;
        }
        else if (number > secondMax) {
            secondMax = number;
        }
        if (number < firstMin) {
            secondMin = firstMin;
            firstMin = number;
        }
        else if (number < secondMin) {
            secondMin = number;
        }
    }
    console.log("Second Maximum : " + secondMax + "  Second Minimum : " + secondMin);



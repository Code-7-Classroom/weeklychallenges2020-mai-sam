/*
VERY HARD: You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
*/


var change = {};

const coinTypes = ["dollar", "quarter","nickle", "penny"];

const coinValues =[100, 25, 10, 5, 1]

var amount;

for (var i = 0; i <coinValues.length; i++) {
    amount = Math.floor(returnValue/coinValues[i]);
    if (amount > 0) {
        change [coinTypes[i]] = amount;
        returnValue = returnValue%coinValues[i];
    }
}

return change
console.log(calculateChange(50, 270));

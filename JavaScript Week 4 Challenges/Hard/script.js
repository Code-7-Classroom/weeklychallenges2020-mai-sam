/*
VERY HARD: You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
*/


//1. Make an array contanining the set of coin values. 

const coins= [1, 5, 10, 25]

//2. Determine an amount that can be reached using those numbers with the least amount of coins.

const total = 31 //25 + 5 + 1 = 31


//3. Make a function that has both the coins and the total, Using math.max and math.mix to find the highest and lowest number in the array

coinChange = (coins, total) =>{
    var highestNumber = Math.max(coins)
    var lowestNumber = Math.min(coins)
}

//4. Make the for loop that runs the the total and subtract all the numbers of the coin array until it equals zero, if it's either negative 
// or have numbers that it can't subtract by any other coins. 


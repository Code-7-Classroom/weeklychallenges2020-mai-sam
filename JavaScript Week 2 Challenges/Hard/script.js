var tomMass = 3629; // 8 lbs = 3629 grams
var tomHeight = 23;  // 9 inches = 22.86 cm 
 
var jerryMass = 45; // in grams 
var jerryHeight = 10; //in centimeters 

var tomBMI = tomMass / (tomHeight * tomHeight);
console.log(tomBMI);

var jerryBMI = jerryMass/ (jerryHeight * jerryHeight);
console.log(jerryBMI)


var higherBMI = jerryBMI > tomBMI;
console.log (higherBMI);

console.log (' Does Tom have a BMI higher than Jerry? ' + higherBMI )
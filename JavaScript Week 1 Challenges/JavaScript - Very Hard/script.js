
var num1 = parseInt(prompt('Enter Your First Number!'));
var operator=prompt('Enter Your Operator! (Either +,-,*,/)');
var num2=parseInt(prompt('Enter Your Second Number!'));


 //Addition
function add(num1, num2){
}

//Subtraction
function subtract(num1, num2){
}

//Multiplication
function multiply(num1, num2){
}

//Division
function divide(num1, num2){
}


switch (operator) {
    case '+': 
        //var total = num1 + num2; 
        add(num1,num2);
        console.log( num1 + ' + ' + num2 + ' = ' + total); 
        break;
    case '-':
        var total = num1 - num2; 
        subtract(num1,num2);
        console.log( num1 + ' - ' + num2 + ' = ' + total); 
        break;
    case '*':
        var total = num1 * num2; 
        multiply(num1, num2);
        console.log( num1 + ' * ' + num2 + ' = ' + total); 
        break;
    case '/' :
        var total = num1 / num2; 
        divide(num1, num2);
        console.log( num1 + ' / ' + num2 + ' = ' + total); 
        break;
    default:
        console.log(' Please Enter An Applicable Operator')    
    }


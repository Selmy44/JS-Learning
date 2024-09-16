//using javascipt to add text content 
// document.getElementById('myH1').textContent = 'hello world';

// document.getElementById('myP').textContent = 'I like pizza';

//variables

//Def, variable = Is a container that stores a value.
//                Behaves as if it were the value it contains

//types of js variables

// 1. declaration /  let x = 100 ;
// 2. assignment  /  x = 100;

//Accept user input

//types of user input

// 1. EASY WAY = Window prompt
// 2. PROFESSIONAL WAY = HTML textBox

// 1. EASY WAY TO ACCEPT USER INPUT
// let username = window.prompt("What's your username?");

// console.log(username);

// Another way to declare variable
// let username;

// username = window.prompt("What's your username?");

// console.log(username);


// 2. PROFESSIONAL WAY

let username;

document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById('myText').value;
    document.getElementById('myH1').textContent = `Hello ${username}`; //use text content to edit the html syntax
    // console.log(username);
}

//type conversion = change the data type of a value to another 
//                 (strings, number, booleans)

//example 1

// let age = window.prompt('How old are you?');

// age = Number(age);

// age += 1;

// console.log(age);

//a project of a counter

const decreaseBtn = document.getElementById('decreaseBtn');

const resetBtn = document.getElementById('resetBtn');

const increaseBtn = document.getElementById('increaseBtn');

const countLabel = document.getElementById('countLabel');

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

//IF STATEMENT

const myAge = document.getElementById('myAge');
const mysub = document.getElementById('mysub');
const resultElement = document.getElementById('resultElement');

let age;

mysub.onclick = function(){
    age = myAge.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `You're too old to enter this site`;
    }
    
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born`;
    }
    
    else if(age >= 18){
        resultElement.textContent = `You're old enough to enter this site`;
    }
    
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}

//checked property = property that determines the checked state of an
//                   HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mysub1 = document.getElementById("mysub1");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mysub1.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa Card`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with Master Card`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}


//Ternary operator = a shortcut to if {} and else {} statements
//                   helps to assign a variable based on a condition 
//                   condition? codeIfTrue : codeIfFalse;


//Example1

// let time = 10;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log(greeting);

//Example2

let isStudent = false;
let message1 = isStudent ? "You are a student" : "You are not a student";
console.log(message1);

//Challenge

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);


//Temperature conversion program

const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temp;

function convert(){

    if(toFahrenheit.checked){
        // result.textContent = 'You selected Fahrenheit'; this is to display the result message of Fahrenheit
        temp = Number(textBox.value);
        //calculation of Celcius to Fahrenheit
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + '°F';  //Added (.toFixed) for additional decimal number
    }
    else if(toCelsius.checked){
        // result.textContent = 'You selected Celsius'; this is to display the result message of Celsius
        temp = Number(textBox.value);
        //calculation of Celcius to Fahrenheit
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + '°C';  //Added (.toFixed) for additional decimal number
    }
    else{
        result.textContent = 'Select a unit';
    }
}




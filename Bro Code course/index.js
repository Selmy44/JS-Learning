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

// The end of Temperature conversion program

// DICE ROLLER Program

function rollDice(){

    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 5) + 1;
        values.push(value);
        images.push(`<img src = "/dice_images/${value}.png" alt = "Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}    

// The end of DICE ROLLER Program


//RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=';

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";

    //format of these conditions

    // if (allowedChars != lowercaseChars) {
    //     return "";
    // }

    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password length must be at least 1)`
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated password : ${password}`);


//The end of RANDOM PASSWORD GENERATOR

//CallBaks

//Callback = is a functon that is passed as an argument to another function.

//           used to handle asynchronous operation:

//           1. Reading a file 
//           2. Network requests
//           3. Interacting with databases

//           "Hey, when you're done, call this next"


//Format
//      x and y are parameters
//      2 and 8 are arguments

function sum(x, y){
    let add = x + y;
    console.log(add)
}
sum(2, 8);



//example 1

function hello(CallBak){
    console.log('hello');
    CallBak();
}

function goodbye(){
    console.log('goodbye');
}

hello(goodbye);

//example 2

total(displayConsole , 1, 2);

function total(callBack, a, b){
    let addition = a + b;
    callBack(addition);
}

function displayConsole(addition){
    console.log(addition);
}

// this is the output of this callBack example
// function displayPage(addition){
//     document.getElementById('myAddition').textContent = addition;
// }
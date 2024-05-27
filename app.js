/*
document.getElementById('title1').innerHTML = "Hello JavaScript";
document.getElementById('title2').innerHTML = "JavaScript Can Change the values of light";
document.getElementById('title2').style.fontSize ="15px";
document.getElementById("title1").style.display = "block";

//window.alert('Press ok button to in');  //This is used for make alert
let sum = 50 + 50 + 30 + 15;
console.log(sum);

if (sum > 150){
    console.log("Checp");
}
else {
    console.log("Expensive");
}

function sayhello(name){
    console.log('Hello ${name}');
}
sayhello('Ibrahim');

let firstName = 'Ibrahim';
let age =36;
firstName = 'Mohammad Ibrahim';
console.log(firstName);
console.log(age + 50);

let fruit = 'Mango';
console.log('${fruit} is my favorite, I like ${fruit}'); 

*/
/*
var a = 10;
var a = 30;
a = 'Bangladesh';
console.log(a);

let fruit = 'Mango';
console.log(`${fruit} is my  favorite, I like ${fruit}`); // ``(Backtik)

const people = {
    firstName : 'Mohammad',
    lastName : 'khalil',
    age : 36

}
people.country = 'Bangladesh';
people.age = 35;
console.log(people);




//Arethmatic operator 
let userInput = prompt('Enter a Number');
let number = parseInt(userInput);
if (number % 2 === 0) {
    console.log(`${number} is a Even`);
}
else{
    console.log(`${number} is a odd`);
}

let a = 10;
a = 10 + 1;
a++; //Increment 

console.log(`Increment value ${a}`);

let b = 12;
b = 12 + 1;
b--;

console.log(`Decrement value ${b}`); 



let d = 152;
let c = 11;
let e = d < c ? 'True' : 'False';
console.log(e);

let firstName = 'Ibrahim';
let fullName = 'Mohammad khalil';
firstName = 'Lisan';

console.log(`My name is ${firstName}`);

console.log(firstName);

let fruit = ['Mango', 'Apple', 'guba'];
console.log(fruit);

let student = {
    FullName: Mohammad Akkas,
    age : 34,
    DateOfBorth: 1999
};
*/
//function 01.................Declare by call

function myFunction (fullName, age, dateOfBirth = 1990, placeOfBirth){
    console.log(' Hello I am ' + fullName + ' I am ' + age + ' My date of Birth is ' + dateOfBirth + ' I am from ' + placeOfBirth);
}
myFunction('Ibrahim', 36, 1986, 'Bangladesh');
myFunction('khalil', 80, 1970, 'Canada');

//function 02................Declare by user
function isSubscribed (){
    console.log('Subscribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);

//function 03...............functional block

let maths = function (a, b){
    return (a / b);
}
console.log(maths(100, 2));

//function 

function newFunc(){
    let firstName = 'Mohammad';
    console.log(firstName);
}
newFunc();

function newfuncs(){
    let firstName = 'Mohammad';
    let secName = 'Ibrahim';
    console.log(firstName + secName);
}
newfuncs();

//fuction array squire number.............

let numbers = [5, 8, 6, 7];
let sqNumbers = numbers.map(function (number){
    return number * number;
});
console.log(sqNumbers);

// arro function====================

let add = function(x , y){
    return x + y;
};
console.log(add(10 + 20));
//Function 
let add2 = (C, D) => (C + D);
console.log(add(5, 6));

// Function 

let add3 = (E, F) => (E + F);
console.log(add3(10, 50));

// nested function 

function greet(firstName) {
    function sayHello(){
        alert('Hello' + firstName)
    }
    return sayHello();
}
greet(' "Mohammad Ibrahim Khalil"');

//JavaScript objects 1. litarace 2. Constractor object 

//const newSym = Symbol('key1');
const mobilePhon = {
    Brand :'Nokia',
    Model : 'ks230',
    Processor : '3.2Ghz Snapgragoan',
    Camera : ['50MP', '30MP', '15MP'],
    HasZoomCamera : true,
    'Selfie Camera MP': 15,
    //[newSym] = 'Mykey1',
    brandModel: function(){
        return `The Mobile Brand is ${this.Brand} and Model is ${this.Model}`;
    }

};
console.log(mobilePhon);
console.log(mobilePhon.Brand);
console.log(mobilePhon.Model);
//console.log(mobilePhon[newSym]);
//console.log(Object.keys(mobilePhon)); //To check the code keys
//console.log(Object.values(mobilePhon)); // TO check the values of property
//console.log(mobilePhon.hasOwnProperty('Camera')); //TO check the property 
console.log(mobilePhon.brandModel());

const obj1 = {
    G: 3,
    H: 4,
    K: 5,

};
const obj2 = {
    L: 6,
    M: 7,
    N: 8,

};

const obj3 = {
    P: 9,
    Q: 10,
    R: 11,

};

const objFinal = {...obj1, ...obj2, ...obj3} // Modern way to show object with a better memory uses
//const objFinal = Object.assign({}, obj1, obj2, obj3) // Way to show a object assign value
//const objFinal = {obj1, obj2};
console.log(objFinal);

//array 

const language = ['C#', 'JavaScript', 'PHP', 'Paython', true, 50]
console.log(language);

const language2 = new Array ('Java', 'Asp', 'Laravel')

console.log(language2);

console.log(language.length);
console.log(language2.length);

language [5] = 'Bootstrap';

console.log(language);

console.log(language[language.length-1]);

console.log(language.toString());
console.log(language)
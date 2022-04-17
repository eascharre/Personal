//Log to Console Lesson
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2})

console.error('This is an error')
console.clear();
console.warn('This is warning');
console.time('Hello')
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
console.timeEnd('Hello');

/*
same style as c

*/

//Variable Less
//Variable Types
    // var, let, const
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //init var
// var greeting;
// console.log(greeting); //will yeild undefinded
// greeting = 'Hello';
// console.log(greeting);

// //letters, number, _, $
// //Can't start with a number
// //var 1name = 'John'; //throws error

// //Multi word variables
// //camel case
// var firstName; //camel case
// var first_name; //underscore
// var FirstName; //Pascal Case used for classes

//let
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//const
const name = 'John'
console.log(name);

//can't reassign constant variable
//Have to assign a value to a const

const person = {
    name: 'John',
    age: 30
}
person.name = 'Sarah' //can change values but not keys/objects
console.log(person);

const numbers =[1,2,3,4,5]

numbers.push(6); //how to append to an array in Js
console.log(numbers); 

// Primative

//String
const names = 'John';

//number
const age = 46;

//boolean
const hasKids = true;

//null
const car = null;

//undefined
let test;

//symbol
const sym = Symbol();

//Reference types

//array
const hobbies = ['movies', 'music'];

//object literal
const address = {
    city: 'Boston',
    state: 'MA'
}
// function
const today = new Date();

console.log(typeof names);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car); //will return object (known bug in JS)
console.log(typeof test);
console.log(typeof sym);
console.log(typeof hobbies);
console.log(typeof address);
console.log(typeof Date);

console.clear();


/* Type Conversion*/

let val;

//Number to String
val = String(5);
val = String(4+4);

//Boolean to String
val = String(true);

//Date to String
val = String(new Date());

//array to string
val = String([1,2,3,4])

//toString()
val = (5).toString();

//string to number
val = Number('5');

//boolean to num
val = Number(true); //returns 1. false and null return 0 

//unarable string
val = Number('hello'); //NaN reutns NaN for arrays too

//string to int and float

val = parseInt(100.30)
val = parseFloat(100.30)

//coersioin
const val1 = 5;
const val2 = '6';
const sum = val +  val2;

console.log(sum);
console.log(typeof sum);

//Output
console.log(val);
console.log(typeof val);
console.log(val.length); //length only works on strings
console.log(val.toFixed());

//Numbers
console.clear()
const num1 = 100;
const num2 = 50;
let vari;

//simple math
vari = num1 + num2;
vari = num1 - num2;
vari = num1 * num2;
vari = num1 / num2;
vari = num1 % num2;

//math object
vari = Math.PI;
vari = Math.E;
vari = Math.round(2.4);
vari = Math.ceil(2.8);
vari = Math.floor(2.8);
vari = Math.sqrt(64);
vari = Math.abs(-3);
vari = Math.pow(8,2);
vari = Math.min(2,33,4,1,5,-6);
vari = Math.max(2,33,4,1,5,-6);
vari = Math.random();

vari = Math.floor(Math.random()*20 + 1); //multiplying random by a number will make that number the highest possible value, adding the one will be the minimum, floor removes the decimal, must multi and then add

//output
console.log(vari);

//strings and concats

const firstName = 'William'
const lastName = 'Johns'
const str = "Hello my name is Brad";
const tag = 'web design, web develop, web prog';
let xvar;

xvar = firstName + lastName; //smush

//concat
xvar = firstName + ' ' + lastName; //concats with space

//append
xvar = 'Brad';
xvar += 'dude';

//escaping
xvar = 'That\'s awesome, I can\'t wait';

//length
xvar = firstName.length;

//concat()
xvar = firstName.concat(' ',lastName);

//chane case
xvar = firstName.toUpperCase(); //all upper case
xvar = firstName.toLocaleLowerCase(); //all lower case

//index
xvar = firstName[2];

//indexof()
xvar = firstName.indexOf('l');
xvar = firstName.lastIndexOf('l');

//charAt()
xvar = firstName.charAt('2');

//get last char
xvar = firstName.charAt(firstName.length - 1); 

//subtring
xvar = firstName.substring(0,4); //retuns string values from 0 to 4

//slice
xvar = firstName.slice(0,4);
xvar = firstName.slice(-3); //works from end

//split
xvar = str.split(' ') //creates array
xvar = tag.split(',') //creates array

//replace
xvar = str.replace('Brad', 'Jack')

//includes
xvar = str.includes('hello'); //checks if hello is in string
//output
console.log(xvar);

//Template Literals
const named = 'John';
const aged = 29;
const job = 'web';
const city = 'miami';
let html;

//without tempate strings (es5)
html = '<ul><li>Name:' + named + '</li><li>Age: ' + aged + '</li><li>Job: ' + job + '</li><li>City: ' + city +'</li></ul>';

//with template strings (es6)
//just an example function 
function hello(){
    return 'hello';
}
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${aged}</li>
    <li>City: ${city}</li>
    <li>Job: ${job}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${aged > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`
//output to live 
document.body.innerHTML = html;

//Arrays and Array Methods
const numbered = [43, 56, 33, 23, 44, 5];
const num3 = new Array(22,45,33,76,45);
const fruits = ['Apple', 'Ban', 'Pine'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:2}, new Date()];

let vals;

//get array lengths
vals = numbered.length;

//array check
vals = Array.isArray(numbered);

//get signle value
vals = numbered[0];

//insert into array
numbered[2] = 100;
//find index
vals = numbered.indexOf(100);

//appending array
numbered.push(250);

//append to the front of array
numbered.unshift(120);

//pop (from end)
numbered.pop();

//shift (from front)
numbered.shift()

//splice (any point in array)
numbered.splice(1,3); //start to end

//flip array
numbered.reverse();

//concat
vals = numbered.concat(num3);

//sort
vals = fruits.sort();
vals = numbered.sort() //not right

//compare
//smallest to largest
vals = numbered.sort(function (x,y){
    return x -y
})
//largest to biggest
vals = numbered.sort(function (x,y){
    return y - x
})

//find
function under50(num){
    return num < 50
}
vals = numbered.find(under50)
console.log(numbered);
console.log(vals);

//Object Literals
const persond = {
    firstNames: 'Steve',
    lastNames: 'Smith',
    agged: '30',
    email: 'steve@gmaol.com',
    addressed: {
        city: 'Miami',
        state: 'IN'
    },
    getBithyear: function(){
        return 2017 - this.agged;
    }
}

let vald;
vald = persond;

//get specific value
vald = persond.firstNames;
vald = persond['lastNames'];
vald = persond.agged;
vald = persond.addressed.state;
vald = persond.getBithyear();

//loops
const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nacy', age: 40}
]

for(let i = 0; i <people.length; i++){
    console.log(people[i].name)
}
console.log(vald)

//Dates and Times
console.clear()
let valf;

const todays = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('Sept 10 1981')

valf = todays.getMonth();

//can do getDate, get Day, get FullYear, getHours, getMinutes...

//set time similar to get...
birthday.setMonth(2);


valf = birthday;


console.log(valf)

//if statements
console.clear()
const id = 100;

//equal to
if(id == 100){
    console.log('Correct')
} else {
    console.log('Incorrect')
}
//not equal to
if(id != 100){
    console.log('Incorrect')
} else {
    console.log('Correct')
}

//equal to value and type
if(id === 100){
    console.log('Correct')
} else {
    console.log('Incorrect')
}

//test for undefined
if(id){
    console.log(`The ID is ${id}`)
} else {
    console.log('No ID')
}

//greater than or less than
if(id > 200){
    console.log('Correct')
} else {
    console.log('Incorrect')
}

//ifelse
const color = 'yellow';

if(color === 'yellow'){
    console.log('Color is yellow')
} else if(color === 'red'){
    console.log('Color is red')
} else {
    console.log('No color')
}

//logical operators are the same

//switches
switch(color){
    case 'red':
        console.log('Color is red')
    case 'blue':
        console.log('Color is blue')
        break
    default:
        console.log('Color is not red or blue')
}
let dayd;

switch(new Date().getDay()){
    case 0:
        dayd = 'Sunday'
        break
    case 1:
        dayd = 'Monday'
        break
    case 2:
        dayd = 'Tuesday'
        break
    case 3:
        dayd = 'Wednesday'
        break
}
console.log(dayd)

//For Loops
console.clear()
for(let i=0; i < 10; i++){
    console.log(i);
}
//contine skips the iteration without breaking
//break breaks

//while loop
console.clear();
let i = 0;
while(i<10){
    console.log(i)
    i++;
}

//do while
console.clear();
i = 0;
do {
    console.log(i);
    i++
}
while(i <10);

//For each

const cared = ['Ford', 'Chevy', 'Toyot'];
cared.forEach(function(cared){
    console.log(cared);
})

//Map
const users =[
    {id: 1, name:'John'},
    {id: 2, name:'Sara'},
    {id: 3, name:'Joe'},
    {id: 4, name:'Sam'}
]

const ids = users.map(function(users){
    return users.id;
});

console.log(ids)
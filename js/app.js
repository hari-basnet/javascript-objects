// Exercises Date Object 
// 1
// Use the new Date() object to get month, date, year, hour and minute.
const today = new Date();

// 2
// Write a function name displayDateTime which display time in this format: 10/03/2019 04:08

function displayDateTime(){
    let myDate = new Date();

    let dd = myDate.getDate();
    let mm = myDate.getMonth() + 1;
    let yyyy = myDate.getFullYear();
    let myTime = myDate.getTime();
    let hrs = myDate.getHours();
    let min = myDate.getMinutes();

    if (dd<10){
        dd = "0" + dd;
    }

    if (mm <10){
        mm = "0" + mm;
    }

    let setDate = `Your moment is ${dd}/${mm}/${yyyy} ${hrs}:${min} `;
    
    return setDate;
}

console.log(displayDateTime());


// OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS

// 1
// Create an empty object called dog
const dog = {};

// 2
// Print the the dog object on the console
console.log(dog);

// 3
// Add name, legs, color, age and bark properties for the dog object. 
// The bark property is a method which return woof woof
dog.name = 'Kalu';
dog.legs = 4;
dog.age = 12;
dog.bark = function (){
    return 'woof woof';
};

console.log(dog);

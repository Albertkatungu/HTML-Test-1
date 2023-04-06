console.log("hello world, This is JavascriptLesson 1");

var fullName = "Albert Katungu";
let gender = "Male";
const age = 27;
let programmer = true || false;
experience = undefined;

console.log(fullName, gender, age, experience);

//Javascript objects and Arrays

let person = {
    age: 45,
    name: "Albert Katungu",
    weight: 55,
};

console.log(person);
console.log("The age is ", person.age, "Years old");
let student = [
        "John", "Bill", "Claire"
]

var age = 18;

if (age <= 18) {
    console.log("Not allowed to vote");
} else {
    console.log("You are allowed to vote");
}

var people = 36;

if (people < 20) {
    console.log("Less than 20 people turned out");
} else if (people > 30) {
    console.log("Turn out was too high");
} else  {
    console.log("People turn out in a good number");
}

let marks = 25;

if (marks >= 75) {
    console.log("Score too high");
} else if (mark >= 60 && mark <= 74) {
    console.log("Better");
} else if (mark >= 50 && mark <= 59) {
    console.log("Good");
} else {
    console.log("failed");
}

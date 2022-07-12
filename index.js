// objects
// objects have both keys and values
const student = {
    firstName: 'ram',
    class: 10
};
console.log(student)
console.log(typeof student)

// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(person); // object

const object_name = {
    key1: 1,
    key2: 2
 };
 console.log(object_name)

 const person2 = { name: 'John', age: 30 };
 console.log(person2)
//  console,log(person2.name);

// dot notation in objects
const person3 = { 
    name: 'John', 
    age: 20, 
};
// accessing property
console.log(person3.name);
console.log(person3.age)

// bracket notation
const people = { 
    name: 'John', 
    age: 20, 
};
// accessing property
console.log(people["name"]);
console.log(people["age"])

// nested objects
const students = { 
    name: 'liz', 
    age: 50,
    marks: {
        science: 70,
        math: 75
    }
}
console.log(students.marks);
console.log(students.marks.science);

// functions in objects
const pupils = {
    name: 'Sam',
    age: 30,
    greet: function() { console.log( "hello there ") }
};
pupils.age
pupils.greet(); 

// built in functions
// let number = '100';
// let result = parseInt(number);
// console.log(result); 

// // finding square roots.
// const numbers = prompt('Enter the number: ');
// const results = Math.sqrt(numbers);
// console.log(`The square root of ${numbers} is ${results}`);
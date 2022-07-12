// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}
const person = new Person();
console.log(person)

// constructor function
function Person (person_name, person_age, person_gender) {
     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }
 const person1 = new Person('liz', 23, 'male');
 const person2 = new Person('Sam', 25, 'female');
 // accessing properties
 console.log(person1.name); 
 console.log(person2.name); 

 
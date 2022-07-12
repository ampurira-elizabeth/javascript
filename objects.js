var people={
    name:"liz",
    country: "Uganda"
};
console.log(people['country']);
console.log(people.name);
// instance or inheritance
var person=new Object(people);
console.log(person.name);
person["age"]=34;
console.log(person)

for (key of Object.entries(person)){
    console.log(key);
}
for ([key,values] of Object.entries(person)){
    console.log({key:values});
}
delete(person.age);
console.log(person)
// assigns another value to an object
Object.assign(person,{school:"high"});
console.log(person);
// objects cant be added after freeze
// Object.freeze(person) 
// person['school']="Akirachix"
// console.log(person)
// changes the value
Object.seal(person)
person.name="agie"
console.log(person)

// objects with function methods
var student={
    name:"anitab",
    country:"kenya",
    hobby:function(){
        // console.log('my name is ${this.name} and my hobby is cookong');
        return "My favourite hobby is sports";
    },
    friends:{
        name:"dathan",
        age:12,
        first:"cook"
    }
}
console.log(student.hobby());
console.log(student.friends.name)
console.log(student.friends.first)

var sry=[{ name:"anitab",
country:"kenya"},{ name:"anitab",
country:"kenya"}]



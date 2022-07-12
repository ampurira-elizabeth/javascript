class Students{
    constructor(name,age,school){
        this.name=name
        this.age=age
        this.school=school  
        this.hobby=function(){
            return "i love sports"
        }
        Students.prototype.country="uganda"
    }
}

var firstStudent=new Students("LIZ",10,"akira");
console.log(firstStudent);
console.log(firstStudent.country)
console.log(firstStudent.hobby())

function students(name,age,school){
    this.name=name
    this.age=age
    this.school=school  
    this.hobby=function(){
        return "i love sports"
    }

}
var secondstudent= new Students("beth",50,"akirachix")
console.log(secondstudent)
console.log(secondstudent.hobby())


var names=["lizie","beth","chiri"];
var [conslate,... others]=names
console.log(conslate)
console.log(others)
console.log(names)

class Queen{
    constructor(name,age,school)
    
}
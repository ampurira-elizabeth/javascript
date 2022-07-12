let b = ["aple","banana","mango"];
let c= new Array("mango","banana","apple");
b.push("orange")
c.unshift("orange")
b.pop()
c.shift()

console.log(b);
console.log(c);
let r= new Array("mango","banana","apple");
// let d=c.map(item => 'i love ${item}');
let e=r.map(function(item){
    return 'i love ${item}'
})
console.log(e)




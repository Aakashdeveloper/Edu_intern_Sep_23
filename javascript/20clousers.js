// //enclosing something
// //global scope
// //local scope

// var a = 10
// function add(){
//     var b = 20;
//     return a+b
// }


// console.log(">>>>>a>>>>",a)
// //console.log(">>>>>b>>>>",b)
// //ReferenceError: b is not defined
// console.log(">>>>>add>>>>",add())

var a = 10
for(i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}

console.log(">>>>>a>>>>",a)
console.log(">>>>>b>>>>",b)
var a = 10
var b = 20
a+b
30

var a = 10
var b = 19
a+b
29

keyword namroffunction(parameter){
    keyword
}

function add(a,b){
    return a+b
}

add(1,2)
3
add(3,5)
8
add(31,56)
87
add("hii","JavaScript")
'hiiJavaScript'

function add(a,b,c){
    return a+b+c
}
add(1,2,3)
6
add(1,2)
NaN
add(1,2,3,4)
6

function aboutUser(city,state){
    let out = `Form city ${city} and state ${state}`
    return out
}

aboutUser('Panipat','Haryana')
'Form city Panipat and state Haryana'

aboutUser('Surat','Gurajat')
'Form city Surat and state Gurajat'


//es5
function add(a,b){
    return a+b
}
add(1,2)
3
//es6
let add = (a,b) => {return a+b}
add(1,2)
3

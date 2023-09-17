true is equal to 1
false is equal to 0

true+true
2
true+false
1

10+true
11
10/false
Infinity
"10"+true
'10true'
"true"+"true"
'truetrue'
"true"-"true"
NaN
true-true
0

var a = "10"
var b = "20"
undefined
a+b
'1020'
parseInt(a)
10
parseInt(a)+parseInt(b)
30
parseInt(a+b)
1020


var a = "10.67"
var b = "20.42"
undefined
parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
31.090000000000003


var a = "a10h32"
parseInt(a)
NaN

var a = "10ah32"
parseInt(a)
10

//es6
var a = "10.67"
var b = "20.42"
Number(a)+Number()
10.67
Number(a)+Number(b)
31.090000000000003

var a = "10"
var b = "20"
Number(a)+Number(b)
30

var a = "a10h32"
Number(a)
NaN

var a = "10ah32"
Number(a)
NaN
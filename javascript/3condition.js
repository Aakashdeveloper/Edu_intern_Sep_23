// all the conditional operator will return boolean output

=  // assignment
== // compare the data
=== // compare the data & datatype

var a = 10
var b = "10"
var c = 20

a == b //compare the data
true
a === b //compare the data and datatype
false


a == c // data does not match
false 
a === c
false


// Case senstive
var a = "hi"
var b = "Hi"
a == b
false


a < c
true
a > c
false
a !== c
true
a >= c
false
a <= c
true


//negation
var a = true
!a
false

var a = false
!a
true


var a = 0
!a
true

var a = -1
!a

false

var a = "hii"
!a

false
var a =0
!a

true

truthy > Any number except 0 weather +ve or -ve,true,any string
falsy  > 0,false,null,undefined
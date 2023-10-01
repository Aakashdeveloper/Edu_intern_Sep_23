var city = "aMstErDam";

city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'
city[0]
'a'
city[1]
'M'
city.charAt(0)
'a'
city.charAt(1)
'M'
city.charAt(-1)
''
city.at(1)
'M'
city.at(-1)
'm'
city.at(-2)
'a'


var a = "John"
var b = "john"
undefined
a == b
false
a.toUpperCase() == b.toUpperCase()
true


var city = "aMstErDam";
undefined
city.slice(1)
'MstErDam'
city.slice(2)
'stErDam'
city.slice(-1)
'm'
city.slice(-2)
'am'
city.slice(0,2)
'aM'
city.slice(0,5)
'aMstE'
city.slice(0,-1)
'aMstErDa'
city.slice(0,-2)
'aMstErD'
city.slice(2,-2)
'stErD'
city.slice(-2,2)
''

var city = "aMstErDam";
city.charAt(0).toUpperCase()
'A'
var city = "aMstErDam";
undefined
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
'Amsterdam'
var city = "pAris"
undefined
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
'Paris'

var uname = "  Nikita  "
undefined
uname.length
10
uname.trim()
'Nikita'
var out = uname.trim()
6
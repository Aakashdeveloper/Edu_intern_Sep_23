let a = [1,2,4,45,34,76] > Array of Number
let b = ["Hii","Hello","Bie","true"] > Array of string
let c =[true,false,false,true,true] > Array of boolean

Array is a collection of homogenious as well as hetriogenious

let d = [1,4,"hii",true,343,"ddsg","dfd",true,false]

var city = ["Delhi","Mumbai","Helsinki","Pune","Venice"]
undefined
city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[city.length-1]
'Venice'
city.push('Innsburg')
6
city
(6) ['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice', 'Innsburg']
city.pop()
'Innsburg'
city

['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']
city.pop(2)
'Venice'
city
(4) ['Delhi', 'Mumbai', 'Helsinki', 'Pune']
city.unshift('London')
5
city
(5) ['London', 'Delhi', 'Mumbai', 'Helsinki', 'Pune']
city.shift()
'London'

Push > add in the end of Array
pop > remove last values from the array
shift > remove first value from the array
unshift > add as first value to array

let z = ['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice', 'Innsburg']
undefined
z.slice(2,4)
(2) ['Helsinki', 'Pune']

z.splice(indexNumber,deletecount,values)

z.splice(2,0,'Dubai','Amsterdam')

let z = ['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice', 'Innsburg']
undefined
z.splice(2,0,'Dubai','Amsterdam')
[]
z
(8) ['Delhi', 'Mumbai', 'Dubai', 'Amsterdam', 'Helsinki', 'Pune', 'Venice', 'Innsburg']
z.splice(3,1)
['Amsterdam']
z
(7) ['Delhi', 'Mumbai', 'Dubai', 'Helsinki', 'Pune', 'Venice', 'Innsburg']
z.splice(4,2,'Indore')
(2) ['Pune', 'Venice']
z
(6) ['Delhi', 'Mumbai', 'Dubai', 'Helsinki', 'Indore', 'Innsburg']

z.indexOf('Delhi')
0
z.indexOf('Helsinki')
3
z.indexOf('Boston')
-1
z.indexOf('Pune')
-1
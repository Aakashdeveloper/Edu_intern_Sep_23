Map
> Map help to iterate over the Array
> it always return the same length of output as input Array
> it is use to apply the logics


a.map(() => {})
var a = [4,5,23,12,24,2,7,47]
a.map((data) => {return data*2})
[8, 10, 46, 24, 48, 4, 14, 94]

var a = [4,5,23,12]
a.map((data) => {return `<p>${data*2}</p>`})
['<p>8</p>', '<p>10</p>', '<p>46</p>', '<p>24</p>']

var a = [4,5,23,12,24,2,7,47]

Filter
> Help to filter out the values
> it may or may not return same length of output as input
> it only return those value for which condition is true

var a = [4,5,23,12,34,2,7,47]
a.filter((data) => { return data > 30})
[34, 47]

a.map((data) => { return data > 30})

var a = [4,5,23,12,34,2,7,47]
a.filter((data) => { return data > 30})
(2) [34, 47]
a.map((data) => { return data > 30})
 [false, false, false, false, true, false, false, true]


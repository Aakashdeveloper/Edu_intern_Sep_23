for
while
dowhile
for of >> Array
for in >> Object
----------------------------------------------------------------
> Iterate over the array and can also generate the series of values

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4


var city = ['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']
for(i=0;i<city.length;i++){
    console.log(city[i])
}
Delhi
Mumbai
Helsinki
Pune
Venice


var i = 10
do{
    console.log(i);
    i++
}
while(i<5)


var i = 10
while(i<5){
    console.log(i);
    i++
}

////////////////////
var city = ['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Venice']
for(mycity of city){
    console.log(mycity)
}
Delhi
VM1015:3 Mumbai
VM1015:3 Helsinki
VM1015:3 Pune
VM1015:3 Venice
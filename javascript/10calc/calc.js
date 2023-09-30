const calc = (opt) => {
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let output = 0;
    if(opt == 'Add'){
        output = `Sum of Number is ${Number(a)+Number(b)}`
    }else{
        output = `Sub of Number is ${Number(a)-Number(b)}`
    }
    document.getElementsByClassName('output')[0].innerText=output
}



// function add(){
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let output = Number(a)+Number(b);
//     document.getElementsByClassName('output')[0].innerText=`Sum of Number is ${output}`
// }

// function sub(){
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let output = Number(a)-Number(b);
//     document.getElementsByClassName('output')[0].innerText=`Sub of Number is ${output}`
// }
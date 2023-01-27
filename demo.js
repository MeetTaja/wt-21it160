// console.log("U again");
function myfun(){ 
    a = Number(document.getElementById("num1").value);
    console.log(a);
    b = Number(document.getElementById("num2").value);
    console.log(b);
    let sum = a+b;
    document.getElementById("sum").textContent = sum;
    console.log(sum);
}
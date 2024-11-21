let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');

let rez = document.getElementById('rez');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

btn1.onclick = ()=>{
    a = + inp1.value;
    b = + inp2.value;
    rez.textContent = a + b;
}

btn2.onclick = ()=>{
    a = + inp1.value;
    b = + inp2.value;
    rez.textContent = a - b;
}

btn3.onclick = ()=>{
    a = + inp1.value;
    b = + inp2.value;
    rez.textContent = a / b;
}

btn4.onclick = ()=>{
    a = + inp1.value;
    b = + inp2.value;
    rez.textContent = a * b;
}

btn5.onclick = ()=>{
    a = + inp1.value;
    b = + inp2.value;
    rez.textContent = a ** b;
}

btn6.onclick = ()=>{
    a = + inp1.value;
    b = + inp2.value;
    let  res = Math.pow(a, 1/b)
    rez.textContent = res;
}








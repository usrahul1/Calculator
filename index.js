let all = document.querySelectorAll(".num");
let buttons = document.querySelectorAll(".p");
let buttonsp = document.querySelectorAll(".n");
let op = document.getElementById("output");
let props = document.querySelectorAll(".prop");

let opr1, opr2, ops;
let final;

all.forEach(allp =>{
    allp.addEventListener('click', (event)=>{
        op.innerText += event.target.innerText;
    })
})

props.forEach(prop => {
    prop.addEventListener('click', (event) => {
        let len = op.innerText.length;
        if (len > 0 && (op.innerText[len - 1] === '+' || op.innerText[len - 1] === '-' || op.innerText[len - 1] === '*' || op.innerText[len - 1] === '/')) {
            op.innerText = op.innerText.slice(0, -1) + event.target.innerText;
        } else {
            op.innerText += event.target.innerText;
        }
        ops = event.target.innerText;
    });
});

let y = document.getElementById("end");

y.addEventListener('click', (event)=>{
    op.innerText = eval(op.innerText);
})


let clear = document.getElementById("c");

clear.addEventListener('click', ()=>{
    opr1=opr2=ops=undefined;
    op.innerText="";
})


let b = document.getElementById("backspace");
b.addEventListener('click', () => {
    op.innerText = op.innerText.slice(0,-1);
})

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

buttons.forEach(button => {
    button.addEventListener('click', (event) =>{
        if(ops === undefined){
            if(opr1 === undefined){
                opr1 = "";
            }
            opr1 = String(opr1)
            opr1 += event.target.innerText;
        }
        else{
            if(opr2 === undefined){
                opr2 = "";
            }
            opr2 = String(opr2)
            opr2 += event.target.innerText;
        }
    });
})

buttonsp.forEach(buttonsps  =>{
    buttonsps.addEventListener('click', (event)=>{
        if(ops ===undefined){
            ops = event.target.innerText;
        }
    })
})

let y = document.getElementById("end");

y.addEventListener('click', (event)=>{
    if(ops!==undefined && opr1!==undefined && opr2!==undefined){
        
        switch(ops){
            case '+': ops = add; break;
            case '-': ops = sub; break;
            case '*': ops = mul; break;
            case '/': ops = div; break;
            default: alert("Please enter properly"); break;
        }

        final = calc(Number(opr1), Number(opr2), ops)
        ops=opr2="";
        opr1=final;
        op.innerText = final;
        ops=undefined;
    }
    else{
        alert("Please enter properly");
    }
})

function calc(opr1, opr2, ops){
    return ops(opr1, opr2);
}

function add(opr1, opr2){
    return opr1+opr2;
}

function sub(opr1, opr2){
    return opr1-opr2;
}

function mul(opr1, opr2){
    return opr1*opr2;
}

function div(opr1, opr2){
    return opr1/opr2;
}

let clear = document.getElementById("c");

clear.addEventListener('click', ()=>{
    opr1=opr2=ops=undefined;
    op.innerText="";
})

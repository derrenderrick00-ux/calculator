function $(x){
    return document.getElementById(x);
}

const clear= $("clear"); 
const del= $("del"); 
let result= $("result");  
const equal= $("equal");
const devider = $("devider");
const multiplier= $("multiplier");
const nine= $("nine");
const eight = $("eight");
const seven= $("seven");
const six= $("six");
const five= $("five");
const four= $("four");
const three= $("three");
const two= $("two");
const one= $("one");
const zero= $("zero");
const decimalPoint= $("decimal-point");
const minus= $("minus"); 
const plus= $("plus");

function appendValue(x){
    return result.value +=x; //result.textcontent can't be used because it is an input field
    //console.log(result.value) >>this one is for debugging 
};

devider.addEventListener('click', ()=>{
    appendValue("/");
});

multiplier.addEventListener('click', ()=>{
    appendValue("*");
});

minus.addEventListener('click', ()=>{
    appendValue("-");
});

plus.addEventListener('click', ()=>{
    appendValue("+");
});

decimalPoint.addEventListener('click', ()=>{
    appendValue(".");
});

zero.addEventListener('click', ()=>{
    appendValue("0");
});

one.addEventListener('click', ()=>{
    appendValue("1");
});

two.addEventListener('click', ()=>{
    appendValue("2");
});

three.addEventListener('click', ()=>{
    appendValue("3");
});

four.addEventListener('click', ()=>{
    appendValue("4");
});

five.addEventListener('click', ()=>{
    appendValue("5");
});

six.addEventListener('click', ()=>{
    appendValue("6");
});

seven.addEventListener('click', ()=>{
    appendValue("7");
});

eight.addEventListener('click', ()=>{
    appendValue("8");
});

nine.addEventListener('click', ()=>{
    appendValue("9");
});

equal.addEventListener('click', ()=>{
    calculate();
});

clear.addEventListener('click', ()=>{
    clearDisplay();
});

function calculate(){
    try{
        const soln= eval(result.value);
        result.value= soln;
    }
    catch(err){
        result.value="Invalid Syntax";
    }
    

}

function clearDisplay(){
    result.value="";
}

del.addEventListener('click', ()=>{
    result.value= result.value.slice(0, -1);
});

document.addEventListener('keydown', (event)=>{
    const key= event.key;
    switch(key){
        case "0":
            appendValue("0");
            break;
        case "1":
            appendValue("1");
            break;
        case "2":
            appendValue("2");
            break;
        case "3":
            appendValue("3");
            break;
        case "4":
            appendValue("4");
            break;
        case "5":
            appendValue("5");
            break;
        case "6":
            appendValue("6");
            break;
        case "7":
            appendValue("7");
            break;
        case "8":
            appendValue("8");
            break;
        case "9":
            appendValue("9");
            break;
        case "+":
            appendValue("+");
            break;
        case "-":
            appendValue("-");
            break;
        case "*":
            appendValue("*");
            break;
        case "/":
            appendValue("/");
            break;
        case ".":
            appendValue(".");
            break;
        case "Enter":
            calculate();
            break;
        case "Escape":
            clearDisplay();
            break;
        case "Backspace":
            result.value= result.value.slice(0, -1);
    }
});


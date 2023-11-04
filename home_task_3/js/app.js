function printName(){
    let name = document.getElementById("name").value;
    if(name == ""){
        alert("Добрый день незнаккомец! Прошу вас повторить так как вы забыли ввести имя в поле.");
    }else{
        alert(`Добрый день ${name}! Желаю приятного дня!`);
        document.getElementById("name").value = "";
    }
}

let firstNumber;
let secondNumber
let button;
let operator

function inputOnClick(num){
    let field = document.getElementById("calc_field").value;
    button = document.getElementById(num).innerHTML;
    if( field == "+" || field == "-" || field == "*" || field == "/"){
        document.getElementById("calc_field").value = " ";
    }
    document.getElementById("calc_field").value = document.getElementById("calc_field").value + button;
}

function inputOperator(ids){
    firstNumber = document.getElementById("calc_field").value;
    document.getElementById("calc_field").value = document.getElementById(ids).innerHTML;
    operator = document.getElementById(ids).innerHTML;
    //button = "";
}

function clearField(){
    document.getElementById("calc_field").value = "";
}

function equal(){
    secondNumber = document.getElementById("calc_field").value;
    console.log(operator)
    let result = calc(parseInt(firstNumber), parseInt(secondNumber), operator)
    document.getElementById("calc_field").value =  result;
}

function calc(a, b, action){
    if (action == "+"){return a + b;}
    else if(action == "-"){return a - b;}
    else if (action == "*"){return a * b;}
    else if(action == "/"){
        if(b == 0){
            alert("Делить на ноль нельзя");
            return "";}
        return a / b;
    }
}
let name_chat
function chat(){
    name_chat = document.getElementById("name_chat").value;
    if(name_chat == ""){
        alert("Добрый день незнаккомец! Прошу вас повторить так как вы забыли ввести имя в поле.");
    }else{
        document.getElementById("chat").style.visibility = "visible"
        document.getElementById("top").innerText = `Ваше имя в чате ${name_chat}`
        document.getElementById("init_name").style.visibility = "hidden"
        document.getElementById("name_chat").style.visibility = "hidden"
        //document.getElementById("chat").innerText = `Привет ${name_chat}`
    }
}
function chatSend(){
    let p = document.createElement("p");
    p.style.margin = "0"
    p.innerText = name_chat +  ": " + document.getElementById("chat_input").value
    m_ch = document.getElementById("main_chat").appendChild(p)
    document.getElementById("chat_input").value = ""
    
}
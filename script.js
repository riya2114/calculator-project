let calculator=document.getElementById("calculator");
let button=document.getElementById("button");
button.addEventListener("click",(event)=>{
    let target=event.target;
    if(target.innerHTML==="AC"){
        calculator.value="";
    }
    else if(target.innerHTML==="c"){
        let clear=calculator.value.substring(0,calculator.value.length-1);
        calculator.value=clear;
    }
    else if(target.innerHTML==="%"){
        calculator.value+=target.innerHTML
    }
    else if(target.classList.contains("int")){
        calculator.value+=target.innerHTML;
    }
    else if(target.classList.contains("point")){
        calculator.value+=target.innerHTML;
    }
    else if(target.classList.contains("arithmetic")){
        let operator=calculator.value[calculator.value.length-1];
        if(["+","-","*","/"].includes(operator)){
            calculator.value=calculator.value.slice(0,-1)+target.innerHTML;
        }
        else{
            calculator.value+=target.innerHTML;
        }
    }
    else if(target.innerHTML==="="){
      if(calculator.value.length!==0){
        try{
            calculator.value=eval(calculator.value);
        }
        catch(error){
            calculator.value="syntax error";
        }
      }
      else{
        calculator.value="";
      }
    }
})
button.addEventListener("keypress",(event)=>{
    let target=event.key;
    let numbers=[".","00","0","1","2","3","4","5","6","7","8","9"];
    let operator=["+","-","*","/","%"];
    if (target==="AC"){
        calculator.value="";
    }
    else if(target==="c"){
        let clear=calculator.value.substring(0,calculator.value.length-1);
        calculator.value=clear;
    }
    else if(numbers.includes(target)){
        calculator.value+=target;
    }
    else if(operator.includes(target)){
        let arithmetic=calculator.value[calculator.value.length-1];
        if (operator.includes(arithmetic)){
            calculator.value=calculator.value.slice(0,-1)+target;
        }
        else{
            calculator.value+=target;
        }
    }
    else if(target==="="){
        if(calculator.value.length!==0){
            try{
                calculator.value=eval(calculator.value);
            }
            catch(error){
                calculator.value="error";
            }
        }
        else{
            calculator.value="";
        }
    }
    else{
        alert("wrong key press");
    }
});
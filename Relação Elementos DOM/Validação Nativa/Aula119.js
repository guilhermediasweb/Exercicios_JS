const f_nome=document.querySelector('#f_nome');
const f_nota=document.querySelector('#f_nota');
const f_msg=document.querySelector('#f_msg');

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    //Forma 1
    //let validar=f_nota.validity;
    //if(validar.valueMissing){
    //    f_nota.setCustomValidity("Campo obrigatório");
    //}else if(validar.rangeOverflow){
    //    f_nota.setCustomValidity("Nota muito alta");
    //}else if(validar.rangeUnderflow){
    //    f_nota.setCustomValidity("Nota muito baixa");
    //}

    ///Forma 2

    let msg=null;
    if(f_nota.validity.valueMissing){
        msg=("Campo obrigatório");
    }else if(f_nota.validity.rangeOverflow){
        msg=("Nota muito alta");
    }else if(f_nota.validity.rangeUnderflow){
        msg=("Nota muito baixa");
    }
    //f_nota.reportValidity()
    f_msg.innerHTML=msg
    evt.preventDefault()//não executa o submit do form
})


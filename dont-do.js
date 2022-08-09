/*     
    <div class="item">

        <input type="text" readonly value=${currentItem.text}>

        <div class="actions">
            <button onClick="editarItem(this)" id="edit_button" class="button">EDITAR</button>
            <button onClick="apagarItem(this)" id="delete_button"> APAGAR </button>
        </div>
    </div>


*/

//**********************************************************************


const FORM = document.getElementById("myForm");
const BUTTON = document.getElementById("create_button");
const INPUT = document.getElementById("input_field");
const ITEM_LIST = document.getElementById("items");
const EDIT_BUTTON = document.getElementById("edit_button");






 //Agora precisamos impedir que ao enviar o formulario, a pagina seja recarregada:

FORM.addEventListener("submit", (e) => {
     e.preventDefault();
     console.log("Default Prevenido");
     inputValidation();
     
     

})

/*----------------------------------------------------------*/
/* Criação das funções*/
/*----------------------------------------------------------*/

let currentItem = {};

let apagarItem = (i) => {
    i.parentElement.parentElement.remove();

}

let criarItem = () => {
   currentItem.text=INPUT.value;
    ITEM_LIST.innerHTML += `
    <div class="item">

        <input type="text" readonly value="${currentItem.text}">

        <div class="actions">
            <button onClick="editarItem(this)" id="edit_button" class="button">EDITAR</button>
            <button onClick="apagarItem(this)" id="delete_button"> APAGAR </button>
        </div>
    </div>
    `;
    INPUT.value="";

}


let salvarItem =(i) => {
    let cont = i.parentElement.previousElementSibling;

    i.innerHTML="EDITAR";
    i.setAttribute("onClick","editarItem(this)");

    cont.setAttribute("value",cont.value);
    cont.setAttribute("readonly","");

}    


let editarItem = (i) => {
        
    let cont = i.parentElement.previousElementSibling;
    cont.setAttribute("value", cont.value);
    cont.removeAttribute("readonly");
    cont.focus();

    i.innerHTML="SALVAR";
    i.setAttribute("onClick","salvarItem(this)");
    
    
    
}


let inputValidation = () =>{
    if (INPUT.value===""){
        alert("Todo mundo erra, esse campo não pode estar vazio!");
    } else {
        console.log("tudo ok");
        criarItem();
    }
}

/*----------------------------------------------------------*/
/* Distribuição das funções*/
/*----------------------------------------------------------*/





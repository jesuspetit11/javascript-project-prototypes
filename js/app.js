//Constructores

//Usaremos 2 objetos en general
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI() {
    
}

//Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 23;

        const selectYear = document.querySelector("#year");
        
        for (let index = max; index >= min; index--) {
            let option = document.createElement("option");
            option.value = index;
            option.textContent = index;
            selectYear.appendChild(option);
            
        }
}

//Instanciamos UI
const ui = new UI();


document.addEventListener("DOMContentLoaded", ()=>{
    ui.llenarOpciones(); //Llena el select con los años
});

eventListeners();
function eventListeners() {
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) { //Como es un submit tomamos el evento
    e.preventDefault();
    //Leer la marca seleccionada
    const marca = document.querySelector("#marca").value;
    //Leer la el año seleccionado
    const year = document.querySelector("#year").value;
    //Leer el tipo de covertura seleccionado
    const tipo = document.querySelector("input[name = tipo]:checked").value;
    console.log(tipo);
    console.log("Cotizando");

    if(marca === "" || year === "" || tipo === ""){
        console.log("No pasó la validación");
    } else {
        console.log("Si pasó la validación");
    }
}
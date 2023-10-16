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
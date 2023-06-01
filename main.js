
let estanteria = []

let tituloInput = document.getElementById("tituloInput")
let tituloOutput = document.getElementById("tituloOutput")
let autorInput = document.getElementById("autorInput")
let autorOutput = document.getElementById("autorOutput")
let precioInput = document.getElementById("precioInput")
let precioOutput = document.getElementById("precioOutput")
let anioInput = document.getElementById("anioInput")
let anioOutput = document.getElementById("anioOutput")

if(localStorage.getItem("estanteria")){
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
    console.log(estanteria)
}else{
    estanteria.push
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}
console.log(estanteria)


let guardarLibroBtn = document.getElementById("guardarLibroBtn")
guardarLibroBtn.addEventListener("click", guardarLibro)
    



/*                      ACA CAPTURAMOS LOS LIBROS QUE QUERES GUARDAR :P                     */ 

function guardarLibro(){
    let tituloValor = tituloInput.value;
    localStorage.setItem("tituloGuardado", tituloValor)
    tituloOutput.textContent = `Titulo ${tituloValor} guardado en el Local Storage`

    let autorValor = autorInput.value;
    localStorage.setItem("autorGuardado", autorValor)
    autorOutput.textContent = `Autor ${autorValor} guardado en el Local Storage`

    let precioValor = precioInput.value;
    localStorage.setItem("precioGuardado", precioValor)
    precioOutput.textContent = `Precio ${precioValor} guardado en el Local Storage`

    let anioValor = anioInput.value;
    localStorage.setItem("anioGuardado", anioValor)
    anioOutput.textContent = `Año ${anioValor} guardado en el Local Storage`

/*    let libroCreado = new Libros(estanteria.length+1,autorInput.value,tituloInput.value,anioInput.value,precioInput.value)
    console.log("libro creado")
    estanteria.push(libroCreado) */

    
}





/*                      ACA SELECCIONAMOS LOS LI :)                                 */


window.onload = function() {
var listItems = document.querySelectorAll("#myList li");

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function() {
        // Remover la clase "selected" de todos los elementos
        for (var j = 0; j < listItems.length; j++) {
            listItems[j].classList.remove("selected");
        }

        // Agregar la clase "selected" al elemento seleccionado
        this.classList.add("selected");

        // Ejecutar el evento deseado
        var selectedItem = this;
        setTimeout(function() {
        selectedItem.classList.remove("selected");
        }, 1000);
        // Puedes agregar tu propio código aquí para manejar el evento de selección
        console.log("Elemento seleccionado:", this.textContent);
    });
}
};


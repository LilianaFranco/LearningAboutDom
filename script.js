//capturar el botón para crearle un listener
const goDark = document.getElementById("boton-dark")
console.log(goDark);

//Escuchar el clic de un botón para que funcione el dark mode cuando el usuario desee.
goDark.addEventListener("click", function (){
        document.querySelector('body').classList.toggle("darkMode") 
})

//Obtener los post de felinos y crear arreglo para guardarlos
let posts = document.getElementsByClassName("item");
let felinos = []

//Agregar los datos del HTML en un array de felinos
for (let i = 0; i < posts.length; i++) {
        let imagenURL = posts[i].firstElementChild.getAttribute("src")
        let titulo = posts[i].querySelector("h2").innerText
        let parrafo = posts[i].querySelector("p").innerText
        felinos.push({imagenURL, titulo, parrafo})
}

//Borrar posts de la pantalla
console.log(felinos)
while (posts.length>0){
        posts[0].remove();
}

// Agregar los posts de nuevo al HTML usando una plantilla
for (let index = 0; index < felinos.length; index++) {
        const felino = felinos[index];
        createPost(felino.imagenURL, felino.titulo, felino.parrafo)
}

//Plantilla para crear posts de felinos
function createPost(imagen, titulo, parrafo){
        const postTemplate = `
                <div class="item">
                <img src="${imagen}">
                <h2>${titulo}</h2>
                <p>${parrafo}</p>
                </div>
        `;
        document.querySelector(".contenedor").innerHTML += postTemplate;
}


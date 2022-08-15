let seeDark = confirm("¿Deseas ver esta página en modo oscuro?")

if (seeDark) {
        document.querySelector('body').classList.add('darkMode')   
}

let posts = document.getElementsByClassName("item");
let savedPosts = posts;
console.log(posts)
console.log(posts[0])

// while (posts.length>0){
//         posts[0].remove();
// }

console.log(savedPosts)

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

console.log(savedPosts)


//prueba
let imagenURL = savedPosts[0].firstElementChild.getAttribute("src")
let titulo = savedPosts[0].querySelector("h2").innerText
let parrafo = savedPosts[0].querySelector("p").innerText
createPost(imagenURL, titulo, parrafo)

//Si uso este for se crea dinámicamente y se crea un loop infinito.

// for (let i = 0; i < savedPosts.length; i++) {
//         let imagenURL = savedPosts[i].firstElementChild.getAttribute("src")
//         let titulo = savedPosts[i].querySelector("h2").innerText
//         let parrafo = savedPosts[i].querySelector("p").innerText
//         createPost(imagenURL, titulo, parrafo)
// }

let seeDark = confirm("¿Deseas ver esta página en modo oscuro?")

if (seeDark) {
        document.querySelector('body').classList.add('darkMode')   
}

let posts = document.getElementsByClassName("item");
console.log(posts)
console.log(posts[0])

while (posts.length>0){
        posts[0].remove();
}

console.log(posts)

function createPost(imagen, titulo, parrafo){
        const postTemplate = `
                <div class="item">
                <img src="${imagen}">
                <h2>${titulo}</h2>
                <p>${parrafo}</p>
                </div>
        `;
        console.log(document.querySelector(".contenedor"))
        document.querySelector(".contenedor").innerHTML += postTemplate;
        console.log(document.querySelector(".contenedor"))
}

createPost("url", "Titulo", "Parrafo")






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


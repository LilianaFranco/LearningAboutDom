let seeDark = confirm("¿Deseas ver esta página en modo oscuro?")
if (seeDark) {

        let mode = document.querySelector('header a')
        console.log(mode)
        mode.innerText = 'Go light';

        let bodyDarkMode = document.querySelector('body');
        bodyDarkMode.classList.add('darkMode')

        let headerDarkMode = document.querySelector('header');
        headerDarkMode.classList.add('darkMode')

        let headerLinkDarkMode = document.querySelector('header a');
        headerLinkDarkMode.classList.add('darkMode')

        let itemDarkMode = document.getElementsByClassName('item');
        console.log(itemDarkMode)
        for (let index = 0; index < itemDarkMode.length; index++) {
                itemDarkMode[index].classList.add('darkMode')
        }

        let titleItemDarkMode = document.querySelectorAll('.item h2');
        console.log(titleItemDarkMode)
        for (let index = 0; index < titleItemDarkMode.length; index++) {
                titleItemDarkMode[index].classList.add('darkMode')
        }

        let paragraphItemDarkMode = document.querySelectorAll('.item p');
        console.log(paragraphItemDarkMode)
        for (let index = 0; index < paragraphItemDarkMode.length; index++) {
                paragraphItemDarkMode[index].classList.add('darkMode')
        }
}
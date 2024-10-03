const mainMenu = document.querySelector('.ul-navbar')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.borgir')

openMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)

function show() {
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0'
}

function close() {
    mainMenu.style.top = '-100%'
}
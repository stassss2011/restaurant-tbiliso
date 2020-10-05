const headerToggler = document.getElementById('navbar__toggler')
const togglerIcon = headerToggler.querySelector('.material-icons')
const navbarMenu = document.getElementById('navbar__menu')

const scrollbarWidth = window.innerWidth - document.body.clientWidth;

headerToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('open')
    if(navbarMenu.classList.contains('open')) {
        togglerIcon.innerHTML = 'close'
        document.body.style.position = 'fixed'
        document.body.style.paddingRight = scrollbarWidth + 'px'
    } else {
        togglerIcon.innerHTML = 'menu'
        document.body.style.position = 'unset'
        document.body.style.paddingRight = '0'
    }
})

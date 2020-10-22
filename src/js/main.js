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

if(window.innerWidth <= 992) {    
    const swiper = new Swiper('.hall__items', {
        slideClass: 'hall__item',
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination'
        }
    })

    const swiperEvents = new Swiper('.event__items', {
        slideClass: 'event__item',
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination'
        }
    })
}

const bookForm = document.getElementById('book-form') 
const delivForm = document.getElementById('delivery-form')

if (bookForm) {

    bookForm.onsubmit = e => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const phone = document.getElementById('phone').value
        const date = document.getElementById('date').value
        
        const data = {name, phone, date}

        console.log(data)
    }
}

if (delivForm) {
    delivForm.onsubmit = e => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const phone = document.getElementById('phone').value
        const date = document.getElementById('date').value
        const address = document.getElementById('address').value

        const data = {name, phone, date, address}

        console.log(data)

    }
}

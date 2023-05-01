let navbar = document.querySelector('nav');
const cabecalho = document.querySelector('navbar')
const menuLinks =  document.querySelectorAll('body a[href^="#"]')
const toggleBtn = document.querySelector('.menu-responsivo')
const toggleIcon = document.querySelector('.menu-responsivo i')
const dropDownMenu = document.querySelector('.menu-dropdown')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks =document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".menu-mobile",
    ".navbar-lista-responsiva",
    ".navbar-lista li",
);

mobileNavBar.init();

document.addEventListener('scroll', () => {
    if(window.top.scrollY > 19) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
        navbar.style.transition = '.4s ease';
    }
})

function getDistanceFromTheTop(elemento) {
    const id = elemento.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(getDistanceFromTheTop) {
    window.scroll({
        top: getDistanceFromTheTop,
        behavior: "smooth",
    })
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    nativeScroll(distanceFromTheTop)
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});
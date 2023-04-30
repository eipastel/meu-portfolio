let navbar = document.querySelector('nav');
const cabecalho = document.querySelector('navbar')
const menuLinks =  document.querySelectorAll('body a[href^="#"]')

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
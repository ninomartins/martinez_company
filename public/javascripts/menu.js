const menuX = document.querySelector('.menu-cel')
const links = document.querySelector('.link-cel')
console.log(menuX)
const nemuCelularX = (ele) => {
menuX.classList.toggle('active')
links.classList.toggle('active')
}
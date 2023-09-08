const input = document.querySelector('input')
const icon = document.querySelector('.search-icon')
const div = document.querySelector('header div')

icon.addEventListener('click', searchToggle)

function searchToggle(){
    div.classList.add('search-expand')
    icon.style.display = 'none'
    input.classList.toggle('search-on')
}
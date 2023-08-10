// seleção de tags no html e conversão para variavéis JS

const btnMobile = document.querySelector('.btn-mobile')
const div = document.querySelector('#link-container')
const links = document.querySelectorAll('#link-container a')

// adicionando um evento ao click do botão parar mostrar a div oculta

btnMobile.addEventListener('click', function(){
    div.classList.toggle('ativo')
})

links.forEach(link =>{
    link.addEventListener('click', scrollToSection)
})

function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
const links = document.querySelectorAll('#link-container a')

links.forEach(link =>{
  link.addEventListener('click', scrollToSection)
})

mobile()
scrollAnimation()

// Funções -----------------------------------------------/

function mobile(){
  // seleção de tags no html e conversão para variavéis JS

  const btnMobile = document.querySelector('.btn-mobile')
  const div = document.querySelector('#link-container')
  
  // adicionando um evento ao click do botão parar mostrar a div oculta
  
  btnMobile.addEventListener('click', function(){
      div.classList.toggle('ativo')
      btnMobile.classList.toggle('animar')
  })
}

function scrollToSection(event){
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href)
  
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function scrollAnimation(){
  const elements = document.querySelectorAll('section, .project-card, .info-card, main')
  const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        entry.target.classList.add('show-section')
      }
    })
  })

  elements.forEach(element =>{
    myObserver.observe(element)
  })
}
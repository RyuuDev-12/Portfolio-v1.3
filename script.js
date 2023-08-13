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
  const sections = document.querySelectorAll('section, main')
  const metadeAltura = window.innerHeight * 0.8
  const cards = document.querySelectorAll('.project-card')
  sections[0].classList.add('show-section')
  sections[1].classList.add('show-section')
  cards[0].classList.add('show-section')

  window.addEventListener('scroll', function(){
    animation(sections)
    animation(cards)
  })

  function animation(elements){
    elements.forEach(item =>{
      
      if((item.getBoundingClientRect().top - metadeAltura) < 0){
        item.classList.add('show-section')
      }
    })
  }
}

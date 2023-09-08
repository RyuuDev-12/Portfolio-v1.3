const image = document.querySelector('.main-img')
const body = document.querySelector('body')

function interacaoImg(event){
    image.style.right = 'calc(5vw + ' + event.pageX + 'rem/400)'
    console.log(event.pageX)
}

body.addEventListener('mousemove', function(event){
    interacaoImg(event)
})
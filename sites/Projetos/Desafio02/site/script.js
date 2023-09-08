const h1 = document.querySelector('h1')

function digitacao(elemento){
    const letras = elemento.innerHTML.split('')
    elemento.innerHTML = "";
    letras.forEach((letra, index)=>{
        setTimeout(function(){
            elemento.innerHTML += letra
        }, 100 * index)
    
    })
}

digitacao(h1)
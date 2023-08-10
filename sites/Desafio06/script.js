const estrelas = document.querySelectorAll('.avaliar img')

function avaliacao(estrelas){
    var avaliou = false 
    // Adicionando para cada estrela três funções de interação quando o mouse entrar, sair e clicar.
    estrelas.forEach((estrela, id) =>{
        estrela.addEventListener('mouseover' ,function(){
           avaliarHover(id)
        })
        estrela.addEventListener('mouseout' ,function(){
            naoAvaliar(id)
        })
        estrela.addEventListener('click' ,function(){
            avaliar(id)
        })
    })
    // Uma função ao passar o mouse nas estrelas para alterar a imagem.
    function avaliarHover(id){
        estrelas.forEach((item, index) =>{
            if(index <= id && avaliou == false){
                item.setAttribute('src', 'image/estrela-marcada.svg')
            }
        })
    }
    // Função principal que vai salvar a avaliação visualmente depois que o mouse sair.
    function avaliar(id){
        estrelas.forEach((item, index) =>{
            if(index <= id){
                item.setAttribute('src', 'image/estrela-marcada.svg')
                avaliou = true
            }else{
                item.setAttribute('src', 'image/estrela-desmarcada.svg')
            }
        })
    }
    // Uma função reversa da 'avaliarHover'.
    function naoAvaliar(id){
        estrelas.forEach((item, index) =>{
            if(index <= id && avaliou == false){
                item.setAttribute('src', 'image/estrela-desmarcada.svg')
            }
        })
    }
}

avaliacao(estrelas) /* Função para avaliar em estrelas a série */
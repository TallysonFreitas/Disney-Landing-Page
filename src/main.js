document.addEventListener('DOMContentLoaded', function () {  
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-questions]')
    const hero = document.querySelector('.hero')
    const alturaHero = hero.clientHeight
    const header = document.getElementsByClassName('header')[0]
    

    window.addEventListener('scroll',function () {  
        const alturaAtual = window.scrollY

        if(alturaHero > alturaAtual && header.classList.contains('header--is-hidden') == false){
            header.classList.add('header--is-hidden')
        }else if(alturaHero < alturaAtual && header.classList.contains('header--is-hidden') == true){
            header.classList.remove('header--is-hidden')
        }
    })

    // accordion faq
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click',abrindoEFechando)
    }
    
    // selecionar botao
    for(let i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(botao) {  
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            hiddenTab()
            aba.classList.add('shows__list-active')
            hiddenButton()
            botao.target.classList.add('shows__tabs--button-active')
        })
    }
})

function hiddenButton(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i<buttons.length; i++){
        buttons[i].classList.remove('shows__tabs--button-active')
    }
}


function hiddenTab() {  
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list-active')
    }
}

function abrindoEFechando( elemento) {  
    const elementoPai = elemento.target.parentNode
    elementoPai.classList.toggle('faq__questions--item-is-open')
}
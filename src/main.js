document.addEventListener('DOMContentLoaded', function () {  
    const buttons = document.querySelectorAll('[data-tab-button]')
    
    
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
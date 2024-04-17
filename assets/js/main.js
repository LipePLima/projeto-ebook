const button    = document.querySelector('.nav__button'); // Seleciona o botão de navegação usando a classe CSS '.nav__button'.
const imgButton = document.querySelector('.button__img'); // Seleciona a imagem dentro do botão usando a classe CSS '.button__img'.
const divList   = document.querySelector('#div__list'); // Seleciona o contêiner da lista de navegação usando o ID 'div__list'.

// Define a função 'toggleMenu' que controla a exibição do menu.
function toggleMenu() { 
    toggleImage() // Chama a função 'toggleImage' para alternar a imagem do botão.

    divList.classList.toggle("div__list-opened") // Alterna a classe do 'divList' para mostrar ou esconder o menu.
}

// Define a função 'toggleImage' que controla a imagem do botão de menu.
function toggleImage() {
    if (imgButton.src.includes('assets/images/icon-menu.svg')) { // Verifica se a imagem atual é o ícone do menu.
        // Muda a imagem para o ícone de fechar e atualiza a classe CSS.
        imgButton.src = 'assets/images/icon-menu-close.svg';
        imgButton.classList = 'button__img-close'
    } else {
        // Caso contrário, muda a imagem para o ícone do menu e atualiza a classe CSS.
        imgButton.src = 'assets/images/icon-menu.svg';
        imgButton.classList = 'button__img';
    }
}

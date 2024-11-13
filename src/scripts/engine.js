const emojis = [
    '🎨',
    '🎨',
    '🎃',
    '🎃',
    '🎂',
    '🎂',
    '🧁',
    '🧁',
    '🫐',
    '🫐',
    '🪻',
    '🪻',
    '🐻‍❄️',
    '🐻‍❄️',
    '🚦',
    '🚦'
];
let openCards = [];
// para cada elemento ele vai colocar ou 2 ou -1, se for peso 2 vai pra frente quem tiver -1 vai pra tras
let shuffleEmojis = emojis.sort(() =>(Math.random() > 0.5 ? 2 : -1));

//aqui se cria as cartas 
for (let i =0; i <emojis.length; i++) {
    let box = document.createElement("div");
    box.className = 'item';
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);
}

//evento de clicar as cartas e verificar
function handleClick() {
    if (openCards.length < 2) {
        //o elemnto clicado ser adicionado na classe boxopen
        this.classList.add('boxOpen');
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500)
    }
}

// funçao que verifica os pares e a vitoria do jogo
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add('boxMatch');
    } else {
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
    }

    // reseta
    openCards = [];

    // verifica vitoria
    if (document.querySelectorAll('boxMatch').length == emojis.length) {
        alert('Você venceu!');
    }
}

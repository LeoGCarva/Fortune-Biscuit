const luckyBiscuit = document.querySelector('.main')
const brokenBiscuit = document.querySelector('.answer')
const answerText = document.querySelector('.answer p')
const refresBtn = document.querySelector('.refres-btn')

luckyBiscuit.addEventListener('click', openLuckyBiscuit)
refresBtn.addEventListener('click', openLuckyBiscuit)

function openLuckyBiscuit() {
    luckyBiscuit.classList.toggle('hide')
    brokenBiscuit.classList.toggle('hide')

    pickAnswer()
}

function pickAnswer() {
    const randomAnswer = Math.floor(Math.random() * 6)
    const answer = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
                    'No fim tudo dá certo, se não deu certo quer dizer que não é o fim',
                    'Criticas não me abalam, elogios não me iludem. Sou oque sou e não oque dizem, beijos Jessica.',
                    'Tudo na vida, menos afogamento, se resolve respirando.',
                    'Você pode perder 100%, mas pode ganhar infitos porceto',
                    'Você é uma cachorro. Vai tomando!']

    answerText.textContent = answer[randomAnswer]
}
'use strict'
let openFormNewCard = document.querySelector('.open-form-new-card')
let overlay = document.querySelector('.overlay')
let closeFormNewCard = document.querySelector('.close-form-new-card')
let question = document.getElementById('question')
let answer = document.getElementById('answer')
let addCardButton = document.querySelector('.add-card-btn')
let clearCards = document.querySelector('.clear-cards')
let currentCardDisplay = document.querySelector('.current-card-display')
let cardTotalDisplay = document.querySelector('.card-total-display')
// let arrowRight = document.querySelector('.arrow-right')
// let arrowLeft = document.querySelector('.arrow-left')
let questionDisplay = document.querySelector('.current-question')
let answerDisplay = document.querySelector('.current-answer')

let flip = document.querySelector('.flip')
let card = document.querySelector('.card')
flip.onclick = e => card.classList.toggle('rotate')

let cards = localStorage.getItem('cards') ?
    JSON.parse(localStorage.getItem('cards')) : []
let currentCard = 0
updateDisplay()
openFormNewCard.onclick = e => overlay.style.display = 'flex'
closeFormNewCard.onclick = e => overlay.style.display = 'none'
addCardButton.onclick = e => addCard(question, answer)
clearCards.onclick = e => {
    cards.splice(0, cards.length)
    localStorage.clear()
    updateDisplay()
}
document.querySelector('.arrows')
    .addEventListener('click', e => {
        if (e.target.classList.contains('arrow-left')) {
            +currentCardDisplay.innerText !== 1 && currentCard--;
            console.log(currentCard)
        } else if (e.target.classList.contains('arrow-right')) {
            +currentCardDisplay.innerText < cards.length && currentCard++;
            console.log(currentCard)
        }
        updateDisplay()
    })
function updateDisplay() {
    cardTotalDisplay.innerText = cards.length
    currentCardDisplay.innerText = currentCard + 1
    if (cards.length) {
        questionDisplay.innerText = cards[currentCard].question
        answerDisplay.innerText = cards[currentCard].answer
    } else {
        questionDisplay.innerText = answerDisplay.innerText = ''
    }
}



function addCard(question, answer) {
    cards.push({ 'question': question.value, 'answer': answer.value })
    question.value = answer.value = ''
    question.focus()
    localStorage.setItem('cards', JSON.stringify(cards))
    updateDisplay()
}
// console.log(cards)
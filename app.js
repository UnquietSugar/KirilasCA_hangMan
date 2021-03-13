let letter = document.getElementsByClassName('letter')
const hangMan = document.getElementsByClassName('hangMan')
const input = document.getElementById('input')
const lines = document.getElementById('lines')
const newGame = document.querySelector('.newGame')

let words = ['apple', 'bannanna']
let word = ''
let counter = 0
let usedLetters = ''
newGame.addEventListener('click', ng)
input.addEventListener('keypress', check)

ng()

function ng() {
    counter = 0
    usedLetters = ''
    word = words[Math.floor(Math.random() * words.length)]
    for (let i = 0; i < word.length; i++) {
        lines.innerHTML += `<div id="${i}" class="letter">${word[i]}</div>`
    }
    console.log(word)
}


function check(e) {
    if (e.key === 'Enter' && input.value !== '') {
        console.log('pressed')
        if(word.includes(input.value.toLowerCase())){
            for (let i = 0; i < letter.length; i++) {
                if (letter[i].innerText.toLowerCase()===input.value.toLowerCase()){
                    letter[i].style.color='black'
                }
            }
        } else {
            hangMan[counter].style.display = 'block'
            counter++
        }

    }
    cleanInput()
}


function cleanInput() {
    input.value = ''
}
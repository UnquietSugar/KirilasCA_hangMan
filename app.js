let letter = document.getElementsByClassName('letter')
const hangMan = document.getElementsByClassName('hangMan')
const input = document.getElementById('input')
const lines = document.getElementById('lines')
const modal = document.getElementById('modal')
let modalText = document.getElementById('modalText')
const newGame = document.querySelector('.newGame')

let words = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"]
let word = ''
let counter = 0
let winCount = 0
let usedLetters = ''

input.addEventListener('keypress', check)
newGame.addEventListener('click', ng)
modal.addEventListener('click', ng)

ng()

function ng() {
    input.value = ''
    modal.style.backgroundColor = ''
    modalText.style.backgroundColor = ''
    modal.style.display = 'none'
    counter = 0
    winCount = 0
    lines.innerHTML = ''
    usedLetters = ''
    for (let i = 0; i < hangMan.length; i++) {
        hangMan[i].style.display = 'none'
    }
    word = words[Math.floor(Math.random() * words.length)]
    for (let i = 0; i < word.length; i++) {
        lines.innerHTML += `<div class="letter">${word[i]}</div>`
    }
    console.log(word)
}

function check(e) {
    if (e.key === 'Enter' && input.value !== '') {
        if (word.includes(input.value.toLowerCase())) {
            for (let i = 0; i < letter.length; i++) {
                if (letter[i].innerText.toLowerCase() === input.value.toLowerCase()) {
                    letter[i].style.color = 'black'
                    if (usedLetters.includes(input.value)) {
                        input.value = ''
                        return console.log('Letter is already used')
                    }
                    winCount++
                    if (winCount === word.length) {
                        modal.style.display = 'flex'
                        modal.style.backgroundColor = 'rgba(0,100,0,0.4)'
                        modalText.style.backgroundColor = 'rgba(0,100,0,0.4)'
                        modalText.innerText = 'You Win! Play Again!'
                    }
                }
            }
        } else {
            hangMan[counter].style.display = 'block'
            if (counter < 6) {
                counter++
            } else {
                modal.style.display = 'flex'
                modal.style.backgroundColor = 'rgba(100,0,0,0.4)'
                modalText.style.backgroundColor = 'rgba(100,0,0,0.4)'
                modalText.innerText = 'Game Over! Try Again!'
            }
        }
        usedLetters += input.value
    }
    input.value = ''
}

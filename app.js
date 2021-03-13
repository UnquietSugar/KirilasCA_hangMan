let letter = document.getElementsByClassName('letter')
const hangMan = document.getElementsByClassName('hangMan')
const input = document.getElementById('input')
const lines = document.getElementById('lines')
const modal = document.getElementById('modal')
let modalText = document.getElementById('modalText')
const newGame = document.querySelector('.newGame')

let words = ['apple', 'pineapple', 'banana', 'kiwi', 'mango']
let word = ''
let counter = 0
let winCount=0
let usedLetters = ''

newGame.addEventListener('click', ng)
input.addEventListener('keypress', check)
modal.addEventListener('click',ng)

ng()

function ng() {
    modal.style.backgroundColor=''
    modalText.style.backgroundColor=''
    modal.style.display='none'
    counter = 0
    winCount=0
    lines.innerHTML=''
    usedLetters = ''
    for (let i = 0; i < hangMan.length; i++) {
        hangMan[i].style.display='none'
    }
    word = words[Math.floor(Math.random() * words.length)]
    for (let i = 0; i < word.length; i++) {
        lines.innerHTML += `<div class="letter">${word[i]}</div>`
    }
    console.log(word)
}

function check(e) {
    if (e.key === 'Enter' && input.value !== '') {
        if(word.includes(input.value.toLowerCase())){
            for (let i = 0; i < letter.length; i++) {
                if (letter[i].innerText.toLowerCase()===input.value.toLowerCase()){
                    letter[i].style.color='black'
                    winCount++
                    if (winCount===word.length){
                        modal.style.display='flex'
                        modal.style.backgroundColor='rgba(0,100,0,0.4)'
                        modalText.style.backgroundColor='rgba(0,100,0,0.4)'
                        modalText.innerText='You Win! Play Again!'
                    }
                }
            }
        } else {
            hangMan[counter].style.display = 'block'
            if (counter<6){
                counter++
            }else{
                modal.style.display='flex'
                modal.style.backgroundColor='rgba(100,0,0,0.4)'
                modalText.style.backgroundColor='rgba(100,0,0,0.4)'
                modalText.innerText='Game Over! Try Again!'
            }
        }
        console.log(winCount)
    }
    input.value = ''
}

let letter = document.getElementsByClassName('letter')
const hangMan = document.getElementsByClassName('hangMan')
const input = document.getElementById('input')
const lines = document.getElementById('lines')
const newGame = document.querySelector('.newGame')

let words =['car','shop','apple','house','horse','']
let guessedLetter=[]
let counter=0
newGame.addEventListener('click',ng)
input.addEventListener('keypress',check)





function ng(){
    letterArr=[]
    let word = words[Math.floor(Math.random()*words.length)]
    for (let i = 0; i < word.length; i++) {
        console.log(word)
        lines.innerHTML+=`<div class="letter">${word[i]}</div>`
        letterArr.push(word[i])
    }
}




function check(e){
    if (e.key === 'Enter'){
        for (let i = 0; i < letter.length; i++) {
            if (letter[i].toUpperCase() === input.value.toUpperCase()){
                guessedLetter.push(i)

            }
        }
    }

}


function cleanInput(){
    input.value=''
}
let letter = document.getElementsByClassName('letter')
const hangMan = document.getElementsByClassName('hangMan')
const input = document.getElementById('input')
const lines = document.getElementById('lines')
const newGame = document.querySelector('.newGame')

let words =['car','shop','apple','house','horse','']
let letterArr=[]
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
        let counter = Number(JSON.parse(localStorage.getItem('counter')))

        for (let i = 0; i < letterArr.length; i++) {
            if (letterArr[i].toUpperCase() === input.value.toUpperCase()){
                letter[i].style.color='black'
                letterArr.splice(i,1)
            }
        }
    }

}


function cleanInput(){
    input.value=''
}
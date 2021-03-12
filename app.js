let letter = document.getElementsByClassName('letter')
let hangMan = document.getElementsByClassName('hangMan')
let input = document.getElementById('input')



input.addEventListener('keypress',check)



function check(){
    let counter = 0


    for (let i = 0; i < letter.length; i++) {
        if (letter[i].innerText.toUpperCase() === input.value.toUpperCase()){
            letter[i].style.color='black'
        }
    }
    cleanInput()
}


function cleanInput(){
    input.value=''
}
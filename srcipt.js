let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let chooseBtn = document.querySelectorAll('.choose-btn')
let noBtn = document.querySelector('.no-btn')

for (i = 0; i < chooseBtn.length; i++) {
    chooseBtn[i].addEventListener('click', ()=> {
        backdrop.classList.remove('hidden')
        modal.classList.remove('hidden')
    })
}

noBtn.addEventListener('click', ()=> {
    backdrop.classList.add('hidden')
    modal.classList.add('hidden')
})
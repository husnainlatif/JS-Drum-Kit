function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(!audio) {
        return
    } else {
        audio.currentTime = 0
        audio.play()
    }

    key.classList.toggle('playing')
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') {
        return
    }
    this.classList.remove('playing')
}

const keymain = document.querySelectorAll('.key')
keymain.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)





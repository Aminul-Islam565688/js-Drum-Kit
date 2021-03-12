window.addEventListener('keydown', function(event){
    // console.log(event.keyCode);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    if(!audio) return; // stop the function all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing')
})

// Same thing is working in normal function but not working in arrow function

function removeTransition (event) {
    if(event.propertyName !== 'transform') return; // skip it if not transform
    this.classList.remove('playing')
}


// const removeTransition = (event) => {
//     if(event.propertyName !== 'transform') return; // skip it if not transform
//     this.classList.remove('playing')
// }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

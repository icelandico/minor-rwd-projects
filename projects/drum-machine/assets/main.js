
function removeTransition(e) {
    if (e.propertyName != 'transform') return;
        this.classList.remove("button-click");
}

function playIt(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("button-click");
    }

const keys = document.querySelectorAll(".button");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playIt);



const panels = documeny.querySelector('.panels');

function toggleOpen() {
  this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
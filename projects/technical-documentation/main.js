const button = document.querySelector('.menu')
const navigationList = document.querySelector('.nav-list')

button.addEventListener('click', showIt);

function showIt() {
  navigationList.classList.toggle('open')
}

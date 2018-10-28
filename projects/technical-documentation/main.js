const button = document.querySelector('.menu-button');
const navigationList = document.querySelector('.nav-list');

button.addEventListener('click', showIt);

function showIt() {
  navigationList.classList.toggle('open')
}

var resizeTimer;
window.onresize = () => {
  navigationList.classList.add('transition-off');
  
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => navigationList.classList.remove('transition-off'), 250);
};

const button = document.querySelector('.menu-button');
const navigationList = document.querySelector('.nav-list');
const anchorLinks = document.querySelectorAll('a[href^="#"]');

button.addEventListener('click', showIt);

anchorLinks.forEach(anchor => anchor.addEventListener('click', anchorScroll))

function showIt() {
  navigationList.classList.toggle('open')
}

function anchorScroll(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

  const checkIfDone = setInterval(function() {
      const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
          targetAnchor.tabIndex = "-1";
          window.history.pushState("", "", targetID);
          clearInterval(checkIfDone);
      }
  }, 100);
}

var resizeTimer;
window.onresize = () => {
  navigationList.classList.add('transition-off');
  
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => navigationList.classList.remove('transition-off'), 250);
};

const inputs = Array.from(document.querySelectorAll('input'));
const backgroundImg = document.querySelector('.background-image');

function handleChange() {
  backgroundImg.style.setProperty('--base', this.value);
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));
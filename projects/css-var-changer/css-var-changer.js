const inputs = Array.from(document.querySelectorAll('input'));
const backgroundImg = document.querySelector('.background-image');

function handleChange() {
  if (this.type === 'color') {
    backgroundImg.style.setProperty('--base', this.value);
  } else if (this.type === 'range') {
    backgroundImg.style.setProperty('--opacity', this.value / 100 )
  }
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));
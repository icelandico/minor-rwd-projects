const inputs = Array.from(document.querySelectorAll('input'));
const backgroundImg = document.querySelector('.background-image');

function handleChange() {
  if (this.type === 'color') {
    backgroundImg.style.setProperty('--base', this.value);
  } else if (this.id === 'opacity') {
    backgroundImg.style.setProperty('--opacity', this.value / 100 );
  } else if (this.id === 'spacing') {
    backgroundImg.style.setProperty('--spacing', this.value + 'px');
  } else if (this.id === 'blur') {
    backgroundImg.style.setProperty('--blur', this.value + 'px');
  }
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));
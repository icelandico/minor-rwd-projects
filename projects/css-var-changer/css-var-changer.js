const inputs = Array.from(document.querySelectorAll('input'));

function handleChange() {
  console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));
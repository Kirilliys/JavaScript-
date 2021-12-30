const btn = document.getElementById('btn')
const text = document.getElementById('text')
const square = document.getElementById('square')
const btnE = document.querySelector('#e_btn')

const range = document.querySelector('input[type=range]');
const span = document.getElementById('range-span')

const color = function(){
  console.log('Клик');
}

const textIn = function(event){
  console.log(event.target.value);
  square.style.backgroundColor = event.target.value
}

const band = function(event) {
  console.log(event.type);
  span.textContent = event.target.value
  range.style.width = span.value + '%'
  range.style.height = span.value + '%'
}



btnE.style.display = 'none'
//Обработчик события нажатия
btn.addEventListener('click', color)
//Обработчик изменения значения данного инпута
text.addEventListener('change', textIn)
//Обработчик события input
range.addEventListener('input',band)






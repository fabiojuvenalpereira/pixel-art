const color1 = document.querySelectorAll('.color')[0];
const color2 = document.querySelectorAll('.color')[1];
const color3 = document.querySelectorAll('.color')[2];
const color4 = document.querySelectorAll('.color')[3];
const color5 = document.querySelectorAll('.color')[4];
const color6 = document.querySelectorAll('.color')[5];
const color7 = document.querySelectorAll('.color')[6];

const pixelBoard = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const button = document.querySelector('#clear-board');
const tamBoardButton = document.querySelector('#generate-board');


// define um tamanho padrão para a tabela que é de 5x5
const nLines = 5;

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r},${g},${b})`;
  // console.log(rgb);
  return rgb;
  // console.log('red ' + r, 'green ' + g ,'blue ' + b);
}

const Bcolor1 = 'rgb(0,0,0)';
const Bcolor2 = generateRandomColor();
const Bcolor3 = generateRandomColor();
const Bcolor4 = generateRandomColor();
const Bcolor5 = generateRandomColor();
const Bcolor6 = generateRandomColor();
const Bcolor7 = 'rgb(255,255,255)';

function color() {
  const array = [Bcolor1, Bcolor2, Bcolor3, Bcolor4, Bcolor5, Bcolor6,Bcolor7];
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = array[index];
  }
}

// gera colunas
function columnGenerator(valor) {
  const inputSize = valor;
  const grid = document.querySelector('#pixel-board');
  for (let index = 0; index < inputSize; index += 1) {
    const doIt = document.createElement('div');
    doIt.className = 'pixel';
    grid.appendChild(doIt);
  }
  const br = document.createElement('br');
  grid.appendChild(br);
}

// gera linhas 
function lineGenerator(valor) {
  const inputSizeV = valor;
  for (let index2 = 0; index2 < inputSizeV; index2 += 1) {
    columnGenerator(valor);
  }
}

// filtra o input e trata os valores
function filterInput() {
  let getInput = document.querySelector('#board-size').value;
  if (getInput > 50) {
    getInput = 50;
  } else if (getInput <= 5 && getInput >= 1) {
    getInput = 5;
  } else if (getInput === '') {
    alert('Board inválido!');
  }
  return getInput;
}

// Apaga a board anterior e gera a nova
function adiciona() {
  const cleanScreen = pixelBoard;
  const getValue = filterInput();
  if (getValue >= nLines) {
    while (cleanScreen.firstChild) {
      cleanScreen.removeChild(cleanScreen.firstChild);
    }
    lineGenerator(getValue);
  }
}

function backgroundMusic (){
  const music = document.querySelector('audio');
  music.play();
}

window.onload = () => {
  backgroundMusic();
  lineGenerator(nLines);
  color();
};

function selecting(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  const added = event.target;
  added.classList.add('selected');
}

pixelBoard.addEventListener('click', (haveClick) => {
  if (haveClick.target.classList.contains('pixel')) {
    const selectColor = document.querySelector('.selected');
    const capture = window.getComputedStyle(selectColor, null).getPropertyValue('background-color');
    const useThis = haveClick;
    useThis.target.style.backgroundColor = capture;
  }
}, false);

function buttonClear() {
  const getAllPix = document.querySelectorAll('.pixel');
  for (let indexApaga = 0; indexApaga < getAllPix.length; indexApaga += 1) {
    getAllPix[indexApaga].style.backgroundColor = 'white';
  }
}

tamBoardButton.addEventListener('click', adiciona);
button.addEventListener('click', buttonClear);
color1.addEventListener('click', selecting);
color2.addEventListener('click', selecting);
color3.addEventListener('click', selecting);
color4.addEventListener('click', selecting);
color5.addEventListener('click', selecting);
color6.addEventListener('click', selecting);
color7.addEventListener('click', selecting);

// REFERÊNCIAS:
// Abaixo todas as referências necessárias para desenvolver o código...
// Para elaborar o (pixelBoard.addEventListener) , foi utilizado o seguinte artigo link: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
// A parte de seleção de cor(window.getComputedStyle), foi uma das dicas do ínicio do projeto, e que pode ser encontrada no seguinte link:https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

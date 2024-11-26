//salvo gli elementi necessari in delle variabili
const countDown = document.getElementById('countdown');
const countDownContainer = document.getElementById('random-n-container');
const writeContainer = document.getElementById('write-n-container');

//Sistema di countdown:
let seconds = 10;

countDown.innerHTML= seconds--;

const timer = setInterval(function(){
   countDown.innerHTML = seconds;
   if(seconds === 0){
      clearInterval(timer);
      countDownContainer.classList.add('d-none');
      writeContainer.classList.remove('d-none');
   }
   seconds--;
}, 1000);

//Generazione random dei 5 numeri:
// salvo i 5 elementi in cui inserirò i numeri casuali:
const liNum1 = document.getElementById('n1');
const liNum2 = document.getElementById('n2');
const liNum3 = document.getElementById('n3');
const liNum4 = document.getElementById('n4');
const liNum5 = document.getElementById('n5');

//sistema dei numeri random:
const min = 1;
const max = 50;
let randNum1 = Math.floor(Math.random() * (max - min + 1) + min);
let randNum2 = Math.floor(Math.random() * (max - min + 1) + min);
let randNum3 = Math.floor(Math.random() * (max - min + 1) + min);
let randNum4 = Math.floor(Math.random() * (max - min + 1) + min);
let randNum5 = Math.floor(Math.random() * (max - min + 1) + min);

//assegno i numeri random agli elementi in pagina:
liNum1.innerHTML = randNum1;
liNum2.innerHTML = randNum2;
liNum3.innerHTML = randNum3;
liNum4.innerHTML = randNum4;
liNum5.innerHTML = randNum5;

//salvo i numeri generati in un array
const arrayNumGenerati = [randNum1, randNum2, randNum3, randNum4, randNum5];
console.log(arrayNumGenerati)
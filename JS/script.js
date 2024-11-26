//salvo gli elementi necessari in delle variabili
const countDown = document.getElementById('countdown');
const countDownContainer = document.getElementById('random-n-container');
const writeContainer = document.getElementById('write-n-container');

//Sistema di countdown:
let seconds = 2;

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

//salvo i numeri generati in un array:
const arrayNumGenerati = [randNum1, randNum2, randNum3, randNum4, randNum5];


//gestione sistema di confronto dei numeri inseriti con quelli generati:
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
   event.preventDefault();
   const numeriInseriti = [
      parseInt(num1.value), 
      parseInt(num2.value), 
      parseInt(num3.value), 
      parseInt(num4.value), 
      parseInt(num5.value)
   ];

   function returnArray (array1, array2){
      return array1.filter(number => array2.includes(number));
   }

   //richiamo l'elemento in cui stamperò il risultato finale:
   const finalResult = document.getElementById('final-result');
   console.log(returnArray(arrayNumGenerati, numeriInseriti));
   finalResult.innerHTML = `Hai indovinato questi numeri: ${returnArray(arrayNumGenerati, numeriInseriti)}`;


   //reset valori inseriti:
   function reset(){
      num1.value = '';
      num2.value = '';
      num3.value = '';
      num4.value = '';
      num5.value = '';
   }
   //richiamo la funzione:
   reset();
});

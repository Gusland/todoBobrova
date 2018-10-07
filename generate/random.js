"use strict";

var withNumbers = true;

function generate (wordLength) {

  var vowels = ['e','y','u','i','o','a'];
  var consonants = ['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
  var count = 0;
  var letter = randomInteger(0,1); //0 - первая буква согласная, 1 - гласная, в дальнейшем используется для чередования
  var result = '';

  if (withNumbers) {wordLength = wordLength - 2}
  while (count < wordLength)
  {
    if (letter === 0){
      result = result + consonants[randomInteger(0,consonants.length - 1)];
      letter = 1;}
    else {
      result = result + vowels[randomInteger(0,vowels.length - 1)];
      letter = 0;
    }
    count++;
  }

  if (withNumbers){
    result += randomInteger(10, 99); 
  }

  document.getElementById("random").innerHTML = result;
}

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

  function generateWithNumbers(){
  withNumbers = !withNumbers;
  
}
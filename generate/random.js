function generate () {
  var vowels = ['e','y','u','i','o','a'];
  var consonants = ['q','w','r','t','p','s','d'];
  i = 0;
  length_word = 6;// длина пароля
  k = randomInteger(0,1);// первая буква
  result = '';
  while (i < length_word)
  {
    if (k === 0){
      result = result + consonants[randomInteger(0,consonants.length - 1)];
      k = 1;}
    else {
      result = result + vowels[randomInteger(0,vowels.length - 1)];
      k = 0;
    }
    i++;
  }
  document.getElementById('random').innerHTML = result;
}

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
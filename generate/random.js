function generate (length_word) {
  
  var vowels = ['e','y','u','i','o','a'];
  var consonants = ['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
  count = 0;
  first_letter = randomInteger(0,1);
  result = '';

  while (count < length_word)
  {
    if (first_letter === 0){
      result = result + consonants[randomInteger(0,consonants.length - 1)];
      first_letter = 1;}
    else {
      result = result + vowels[randomInteger(0,vowels.length - 1)];
      first_letter = 0;
    }
    count++;
  }

  document.getElementById('random').innerHTML = result;
}

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
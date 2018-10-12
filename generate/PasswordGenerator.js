(function(){
    "use strict";

    var withNumbers = true;

    function generatePassword (wordLength,numbersCount) {

        var vowels = ['e','y','u','i','o','a'];
        var consonants = ['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
        var count = 0;
        var letter = randomInteger(0,1); //0 - первая буква согласная, 1 - гласная, в дальнейшем используется для чередования
        var result = '';

        wordLength = validateLength(wordLength);
        numbersCount = validateNumbers(numbersCount,wordLength);
        

        while (count < wordLength-numbersCount)
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
          for (var i=0; i < numbersCount; i++){
             result += randomInteger(0, 9); 
          }
        }
        return result;
    }

    function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }

    function validateNumbers(nCount,wLength){
        if (nCount>0 && nCount<10 && nCount < wLength){ return nCount; }
        else {
          withNumbers = false;
          return 0;
        }
    }

    function validateLength(length){
        if ( length > 3 && length < 50){
          return length;
        }
        else return 6;
    }
    // commonjs
    if (typeof exports === 'object') {
        module.exports = generatePassword;
    }

    // AMD module
    else if (typeof define === 'function' && define.amd) {
        define(function() {
            return generatePassword;
        });
    }

    // Browser global
    else {
        window.generatePassword = generatePassword;
    }
})();

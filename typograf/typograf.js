"use strict";

function getTypografText(){
  var request = new XMLHttpRequest();
  var str = 'На лесопилку завезли 32 м3 леса, из которых 4м3 пустили под распил на 25мм доски, длинной по 6м.';
  var text = encodeURIComponent(str);

  var body = 'text=' + encodeURIComponent(str);

request.open("POST", 'http://www.typograf.ru/webservice/', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

request.onreadystatechange = function() {
  if (this.readyState != 4) {
    return;
  }
  return this.responseText
}

request.send(body);
}



function getTypografText(){
  var request = new XMLHttpRequest();
  var str = 'привет, мы работаем';
  var text = encodeURIComponent(str);
  request.open('GET', 'http://mdash.ru/api.v1.php?text', true);

  var data = JSON.parse(this.response);
  alert(data);

  request.send(null);

}



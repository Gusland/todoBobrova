function getTypografText(){
  var request = new XMLHttpRequest();
  var str = 'привет, мы работаем';
  var text = encodeURIComponent(str);
  request.open('GET', 'http://mdash.ru/api.v1.php?text', true);

  request.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
     alert(data);
    } else {
     alert('статус' + request.status);
    }
  }

request.send(null);

}



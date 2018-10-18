function getTypografText(){
  var request = new XMLHttpRequest();
  var text = 'привет, мы работаем';
  request.open('POST', '/api.v1.php HTTP/1.0', true);
  
  request.setRequestHeader("Content-type", "multipart/form-data");

request.onreadystatechange = function() {//Вызывает функцию при смене состояния.
    if(request.readyState == XMLHttpRequest.DONE && request.status == 200) {
        alert('done');
    }
    else {
      alert ('статус' + request.status);
    }
}
request.send();
}




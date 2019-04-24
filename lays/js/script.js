   var elements = document.getElementsByClassName('menu__icon');
  for (var i = 0; i < elements.length; i++) {
            elements[0].onclick = function() {
              // alert( 'Спасибо' );
              var elem = document.getElementsByClassName('aside');
              for (var i = 0; i < elem.length; i++) {
              elem[0].classList.toggle('menu_state_open');
            }
            }
  }

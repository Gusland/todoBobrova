  var elements = document.getElementsByClassName('menu__humburger');
  var elem = document.getElementsByClassName('navigation');
  var animElementLays = document.getElementsByClassName('lays-block__image-block');
  var animElementAbout = document.getElementsByClassName('about-block__image-block');

  window.addEventListener('load', anim);

  window.addEventListener('resize', nav);
  window.addEventListener('load', nav);
  
  window.addEventListener('resize', createProportionalBlock);
  window.addEventListener('load', createProportionalBlock);

  

  function anim() {
      if (window.innerWidth <= 680) {
          window.addEventListener('resize', desk);
          animElementLays[0].classList.remove('anim');
          animElementAbout[0].classList.remove('anim')
      }
      else {
          window.addEventListener('resize', mob);
      }
  }

  function mob() {
      if (window.innerWidth <= 680) {
          animElementLays[0].classList.toggle('anim');
          animElementAbout[0].classList.toggle('anim')
          window.removeEventListener('resize', mob);
          window.addEventListener('resize', desk);
      }
  }

  function desk() {
      if (window.innerWidth > 680) {
          animElementLays[0].classList.toggle('anim');
          animElementAbout[0].classList.toggle('anim')
          window.removeEventListener('resize', desk);
          window.addEventListener('resize', mob);
      }
  }

  function nav() {
      if (window.innerWidth <= 680) {
          (document.getElementsByClassName('menu__link'))[3].addEventListener('click', navigation);
          for (var i = 0; i < elem.length; i++) {
              elements[i].addEventListener('click', navigation);
          }
      }
  }

  function navigation() {         
      for (var i = 0; i < elem.length; i++) {
          elem[i].classList.toggle('menu_state_open');
      }

      var linkElement = document.getElementsByClassName('menu__link');
      for (var i = 0; i < linkElement.length; i++) {
          linkElement[i].classList.toggle('close-link');
          linkElement[i].classList.toggle('open-link');
      }
  }

function createProportionalBlock(){
    var head = document.getElementsByClassName("site-header");
    var headwidth = head[0].offsetWidth;
    
    if (window.innerWidth <= 680) {
        head[0].style.height = parseInt(1.73 *headwidth) + "px";
    }
    else {
        head[0].style.height = parseInt(0.464 *headwidth) + "px";
    }

    var element = document.getElementsByClassName("page-content-block");
    for (var i = 0; i < element.length; i++) {
        var elwidth = element[i].offsetWidth;
        if (window.innerWidth <= 680) {
            element[i].style.height = parseInt(2 *elwidth) + "px";
        }
        else {
            element[i].style.height = parseInt(0.51 *elwidth) + "px";
        }
        
    }

}
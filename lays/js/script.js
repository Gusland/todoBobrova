  var elements = document.getElementsByClassName('menu__mobile-menu');
  var elemNav = document.getElementsByClassName('navigation');
  var flag = false;
  var linkElement = document.getElementsByClassName('menu__link');

  window.addEventListener('resize', nav);
  window.addEventListener('load', nav);
  
  window.addEventListener('resize', createProportionalBlock);
  window.addEventListener('load', createProportionalBlock);

  window.addEventListener('scroll', scrollNav);

  function nav() {
      if (window.innerWidth <= 680) {
          (document.getElementsByClassName('menu__link'))[3].addEventListener('click', navigation);
          for (var i = 0; i < elements.length; i++) {
              elements[i].addEventListener('click', navigation);
          }
      }
      else {
        for (var i = 0; i < linkElement.length; i++) {
          linkElement[i].classList.remove("open-menu");
          linkElement[i].classList.remove("close-menu");
        }
      }
  }

function navigation() {         
      for (var i = 0; i < elemNav.length; i++) {
          elemNav[i].classList.toggle('menu_state_open');
      }
      flag = !flag;
      
      if (flag) {
        for (var j = 0; j < linkElement.length; j++) {
            linkElement[j].classList.add("open-menu");
            linkElement[j].classList.remove("close-menu");
        }
    }
    else {
        for (var j = 0; j < linkElement.length; j++) {
            linkElement[j].classList.add("close-menu");
            linkElement[j].classList.remove("open-menu");
        }
    }     
  }

function createProportionalBlock(){
    var head = document.getElementsByClassName("site-header");
    var gallery = document.getElementsByClassName("gallery-block");
    var headwidth = head[0].offsetWidth;
    
    if (window.innerWidth <= 680) {
        head[0].style.height = parseInt(1.73 *headwidth) + "px";
        head[0].classList.remove("site-header_animate");
        gallery[0].classList.remove("gallery-block_animate");
    }
    else {
        head[0].style.height = parseInt(0.464 *headwidth) + "px";
        for (var j = 0; j < linkElement.length; j++) {
            linkElement[j].classList.remove("close");
        }
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

var scrollBegin = 0;
var lastPositionTop = 0;

function scrollNav() {
  var positionTop = window.pageYOffset;
  if (positionTop > lastPositionTop) {
    if (positionTop > scrollBegin + 80) {
      elemNav[0].classList.add('nav-hidden');
      if (flag) navigation();
    }
  }
  else if (lastPositionTop > positionTop) {
    elemNav[0].classList.remove('nav-hidden');
    scrollBegin = window.pageYOffset;

  }
  lastPositionTop = positionTop;
}

document.addEventListener("DOMContentLoaded", scrollDesc, false);
window.addEventListener("scroll", scrollDesc, false);

function scrollDesc() {
  if (window.innerWidth > 680) {
    var el_desc = document.getElementsByClassName("description-block");
    var el_im = document.getElementsByClassName("image-block");
    for (var i = 0; i < el_desc.length; i++) {
        if (isVisible(el_desc[i])) {
            el_desc[i].classList.add("active");
            el_im[i].classList.add("active");
        }
    }
  }
}

// function isPartiallyVisible(el) {
//     var elementBoundary = el.getBoundingClientRect();

//     var top = elementBoundary.top;
//     var bottom = elementBoundary.bottom;
//     var height = elementBoundary.height;

//     return ((top + height >= 0) && (height + window.innerHeight >= bottom + 40));
// }

function isVisible(elem) {

      var coords = elem.getBoundingClientRect();

      var windowHeight = document.documentElement.clientHeight;

      // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
      var topVisible = coords.top > 0 && coords.top < windowHeight;
      var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

      return topVisible || bottomVisible;
    }
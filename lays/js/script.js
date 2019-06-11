  const elementsHumburger = document.getElementsByClassName('js-mobile-menu');
  const elemNav = document.getElementsByClassName('js-nav');
  let isMenuOpen = false;
  const linkElement = document.getElementsByClassName('js-menu-link');
  
  window.addEventListener('resize', createProportionalBlock);
  window.addEventListener('load', createProportionalBlock);

  window.addEventListener('scroll', scrollNav);

function navigation() {         
      for (let i = 0; i < elemNav.length; i++) {
          elemNav[i].classList.toggle('menu_state_open');
      }
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        for (let j = 0; j < linkElement.length; j++) {
            linkElement[j].classList.add("open-menu");
            linkElement[j].classList.remove("close-menu");
        }
    }
    else {
        for (let j = 0; j < linkElement.length; j++) {
            linkElement[j].classList.add("close-menu");
            linkElement[j].classList.remove("open-menu");
        }
    }     
  }

function createProportionalBlock(){
    const head = document.getElementsByClassName("js-header");
    const gallery = document.getElementsByClassName("js-gallery");
    let headwidth = head[0].offsetWidth;
    
    if (window.innerWidth <= 680) {
        head[0].style.height = parseInt(1.73 *headwidth) + "px";
        head[0].classList.remove("site-header_animate");
        gallery[0].classList.remove("gallery-block_animate");
        (document.getElementsByClassName('js-link-close'))[0].addEventListener('click', navigation);
        for (let i = 0; i < elementsHumburger.length; i++) {
            elementsHumburger[i].addEventListener('click', navigation);
        }
    }
    else {
        head[0].style.height = parseInt(0.464 *headwidth) + "px";
        for (let i = 0; i < linkElement.length; i++) {
            linkElement[i].classList.remove("open-menu");
            linkElement[i].classList.remove("close-menu");
        }
    }

    const element = document.getElementsByClassName("js-content-block");
    for (let i = 0; i < element.length; i++) {
        let elwidth = element[i].offsetWidth;
        if (window.innerWidth <= 680) {
            element[i].style.height = parseInt(2 *elwidth) + "px";
        }
        else {
            element[i].style.height = parseInt(0.51 *elwidth) + "px";
        }
    }
}

let scrollBegin = 0;
let lastPositionTop = 0;

function scrollNav() {
  let positionTop = window.pageYOffset;
  if (positionTop > lastPositionTop) {
    if (positionTop > scrollBegin + 80) {
      elemNav[0].classList.add('nav-hidden');
      if (isMenuOpen) navigation();
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
    const elementDesc = document.getElementsByClassName("js-description");
    const elementImage = document.getElementsByClassName("js-image");
    for (let i = 0; i < elementDesc.length; i++) {
        if (isVisible(elementDesc[i])) {
            elementDesc[i].classList.add("active");
            elementImage[i].classList.add("active");
        }
    }
  }
}

function isVisible(elem) {
      let coords = elem.getBoundingClientRect();

      let windowHeight = document.documentElement.clientHeight;
      let topVisible = coords.top > 0 && coords.top + 50 < windowHeight;
      let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

      return topVisible || bottomVisible;
    }
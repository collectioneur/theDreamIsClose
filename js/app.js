function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
      rect.left >=0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateScrollingElements() {
  visibleElements = document.querySelectorAll('.element-to-animate, .not-animated');
  // visibleElements = document.querySelectorAll('.not-animated');
  unvisibleElements = document.querySelectorAll('.animated');
  visibleElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.remove('element-to-animate');
      element.classList.remove('not-animated');
      element.classList.add('animated');
  }
});
  unvisibleElements.forEach((element) => {
    if (!isElementInViewport(element)) {
      element.classList.remove('animated');
      element.classList.add('element-to-animate');
    }
  });
}
document.addEventListener('DOMContentLoaded', animateScrollingElements);
window.addEventListener('scroll', animateScrollingElements);

function toggleFlexExpand() {
  var container = document.querySelectorAll('.hor-bar-elements');
  container.forEach((element) => {
    if(!element.classList.contains('hamburger-button')) {
      element.classList.toggle('expand');
    }
  })
}

function openLogin() {
  let container = document.querySelector('.wrapper');
  let register= document.querySelector('.register');
  let login = document.querySelector('.login');
  register.classList.add('expand');
  login.classList.remove('expand');
  container.classList.remove('expand');
}

function openRegister() {
  let container = document.querySelector('.wrapper');
  let register= document.querySelector('.register');
  let login = document.querySelector('.login');
  register.classList.remove('expand');
  login.classList.add('expand');
  container.classList.remove('expand');
}

function end() {
  let container = document.querySelector('.wrapper');
  container.classList.add('expand');
}

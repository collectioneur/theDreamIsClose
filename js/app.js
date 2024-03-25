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
  visibleElements = document.querySelectorAll('.element-to-animate');
  visibleElements = document.querySelectorAll('.not-animated');
  const unvisibleElements = document.querySelectorAll('.animated');
  visibleElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.remove('element-to-animate');
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

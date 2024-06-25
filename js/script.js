//drawer event
const drawer = document.querySelector('.drawer');

drawer.addEventListener('click',function () {
  if(drawer.classList.contains('is-active') == true){
    drawer.classList.remove('is-active')
  }else {
    drawer.classList.add('is-active')
  }
});

//------------------  vanilla javascript smoothScroll  ----------------------

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for(let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener('click',(e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#',''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.scrollY;
    const gap = 96;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}

//drawer change color event

const header = document.querySelector('#header');
const headerHeight = header.clientHeight;
window.addEventListener('scroll', function () {
  if (this.window.scrollY > 0) {
    header.style.backgroundColor = "rgba(255, 255, 255, .9)"
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 1)"
  }
});
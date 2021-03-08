console.log('Hello World!');

const burgerMenu =  document.querySelectorAll('.header__menu');

burgerMenu.forEach(btn => {
  btn.addEventListener('click', e => {
      btn.classList.toggle('active');
  });
});
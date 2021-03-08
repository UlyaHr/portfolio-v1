export function Header() {
  const navbar = document.querySelector('.header');
  const burgerMenu =  document.querySelectorAll('.header__menu');

  burgerMenu.forEach(btn => {
    btn.addEventListener('click', e => {
      btn.classList.toggle('active');
    });
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('header--scrolled', window.scrollY > 0) ;
  });
}

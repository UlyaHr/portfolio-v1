export function Header() {
  const navbar = document.querySelector('.header');
  const logo = document.querySelector('.header__logo')
  const burger =  document.querySelectorAll('.header__menu');
  const overlay = document.querySelector('.overlay');
  const menu = document.querySelector(".header__links");
  const menuLink = menu.childNodes;

  const burgerClick = () => {
    navbar.classList.toggle("menu-clicked");
      if (!overlay.classList.contains('fade-in')) {
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
        menu.classList.add('fade-in')
        menu.classList.remove('fade-out')
      } else {
        overlay.classList.add('fade-out')
        overlay.classList.remove('fade-in')
        menu.classList.add('fade-out')
        menu.classList.remove('fade-in')
      }
  }
  
  const menuClick = () => {
    if (navbar.classList.contains('menu-clicked')) {
      burger.forEach(btn => btn.classList.toggle('active'))
      burgerClick()
    }
  }

  function clickHandler(e) {
    e.preventDefault()
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
    menuClick()
  }
  
  menuLink.forEach(link => {
    link.addEventListener('click', clickHandler)
  })

  logo.addEventListener('click', clickHandler)

  

  burger.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      burgerClick();
    });
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('header--scrolled', window.scrollY > 0) ;
  });
}

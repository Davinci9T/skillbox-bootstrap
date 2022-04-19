document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#burger').classList.toggle('is-active');
  document.querySelector('#nav').classList.toggle('is-active');
  document.querySelector('body').classList.toggle('lock');
})

document.querySelector('main').addEventListener('click', function () {
  document.querySelector('#burger').classList.remove('is-active');
  document.querySelector('#nav').classList.remove('is-active');
  document.querySelector('body').classList.remove('lock');
})

const navLink = document.querySelectorAll('.header__nav-link')

function linkAction() {
  const navMenu = document.getElementById('nav')
  const bodyLock = document.getElementById('body')
  const btnBurger = document.getElementById('burger')

  navMenu.classList.remove('is-active'),
  btnBurger.classList.remove('is-active'),
  bodyLock.classList.remove('lock')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

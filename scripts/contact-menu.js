export function createListenerForOpenMenu() {
  const menu = document.querySelector('#container-call');
  const button = document.querySelector('#Contact-button');
  const openMenu = () => {
    menu.classList.add('contact-menu--open');
  };
  button.addEventListener('click', openMenu);
}

export function createListenerForCloseMenu() {
    const menu = document.querySelector('#container-call');
    const button = document.querySelector('#close-contact-menu');
    const main = document.querySelector('main');
    const closeMenu = () => {
        menu.classList.remove('contact-menu--open');
    };
    button.addEventListener('click', closeMenu);
    main.addEventListener('click', closeMenu);
}

// export * from './contact-menu.js';


function createListenersForButtons() {
    createListenerForOpenMenu();
    createListenerForCloseMenu();
    createListenersToOpenNumberLink();
}

function createListenerForOpenMenu() {
  const menu = document.querySelector('#container-call');
  const button = document.querySelector('#Contact-button');
  const openMenu = () => {
    menu.classList.add('contact-menu--open');
  };
  button.addEventListener('click', openMenu);
}

function createListenerForCloseMenu() {
    const menu = document.querySelector('#container-call');
    const button = document.querySelector('#close-contact-menu');
    const main = document.querySelector('main');
    const closeMenu = () => {
        menu.classList.remove('contact-menu--open');
    };
    button.addEventListener('click', closeMenu);
    main.addEventListener('click', closeMenu);
}


 //! Deprecated, will be imbedded in html
// function createListenersToOpenNumberLink() {
//     const number = document.querySelectorAll('.number');
//     console.log(number);
//     const viber = document.querySelectorAll('.viber');
//     const telegram = document.querySelectorAll('.telegram');
//     const openNumber = () => {
//         window.open(`tel:${phoneNumber}`);
//     };
//     const openViber = () => {
//         window.open(viberLink);
//     };
//     const openTelegram = () => {
//         window.open(telegramLink);
//     };
//     number.forEach(elem => { elem.addEventListener('click', openNumber)});
//     viber.forEach(elem => { elem.addEventListener('click', openViber)});
//     telegram.forEach(elem => { elem.addEventListener('click', openTelegram)});
// }
// const phoneNumber = "380951737461"
// const viberLink = `viber://chat?number=${phoneNumber}`;
// const telegramLink = `tg://resolve?domain=${phoneNumber}`;


export { createListenersForButtons };
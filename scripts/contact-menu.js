function createListenersForButtons() {
    createListenerForOpenMenu();
    createListenerForCloseMenu();
    //!createListenersToOpenNumberLink();
    coloringButtonIntoIconColorOnHover();
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

function coloringButtonIntoIconColorOnHover() {
    const buttons = document.querySelectorAll('.container-call-sample');

    const changeColor = (button) => {
        // console.log(document.querySelector(`#container-call .container-call-sample .${button.firstElementChild.firstElementChild.classList[1]}`).style.backgroundColor);
        const buttonIcon = button.firstElementChild.firstElementChild;
      const buttonColor = getComputedStyle(buttonIcon).getPropertyValue('background-color');
      console.log(buttonColor);
      


      const newColor = lightenColor(buttonColor, 75);
  button.style.backgroundColor = newColor;
  button.style.outlineColor = newColor;


function lightenColor(color, percent) {
  const rgb = color.replace(/\s/g, '').match(/^rgb\((\d+),(\d+),(\d+)\)$/); 
  const r = parseInt(rgb[1]);
  const g = parseInt(rgb[2]);
  const b = parseInt(rgb[3]);
  const newR = Math.floor(r + (255 - r) * (percent / 100));
  const newG = Math.floor(g + (255 - g) * (percent / 100));
  const newB = Math.floor(b + (255 - b) * (percent / 100));
  return `rgb(${newR}, ${newG}, ${newB})`;
}




    }
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {changeColor(button)});
        button.addEventListener('mouseout', () => {
          button.style.backgroundColor = 'var(--clear-bg-color)';
          button.style.outlineColor = 'var(--clear-bg-color)';});
    });

}

export { createListenersForButtons };

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


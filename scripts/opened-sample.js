function createListenersForButtons() {
    createListenerForOpenSamplePage();
    createListenerForCloseSamplePage();
}


function createListenerForOpenSamplePage() {
    const menu = document.querySelector('.opened-sample-container');
    const button = document.querySelectorAll('.container-desk-object');
    const openMenu = () => {
        menu.classList.add('opened-sample-container--active');
    };
    button.forEach((button) => {
        button.addEventListener('click', openMenu);
    });
    }

function createListenerForCloseSamplePage() {
    const menu = document.querySelector('.opened-sample-container');
    const button = document.querySelector('#close-opened-sample');
    const closeMenu = () => {
        menu.classList.remove('opened-sample-container--active');
    };
    button.addEventListener('click', closeMenu);
}

export { createListenersForButtons };
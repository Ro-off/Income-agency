function createListenersForButtons(){
  createListenerToOpenMapButton();
}

function createListenerToOpenMapButton(){
  const button = document.querySelector('#switch-to-map');
  button.removeEventListener('click', openAdwares);
  button.addEventListener('click', openMap)
}

function createListenerToOpenAdwaresButton(){
  const button = document.querySelector('#switch-to-map');
  button.removeEventListener('click', openMap);
  button.addEventListener('click', openAdwares)
}

function switchClassMember(cssClassName, members){
 const cssClasses = document.querySelectorAll('.' + cssClassName);
 cssClasses.forEach((cssClass) => {
 cssClass.classList.remove(cssClassName);
  });
  members.forEach((member) => {
 member.classList.add(cssClassName);
  });
}

function openMap(){
  const Adwares_list = document.querySelector("#left-main-screen");
  const open_adware = document.querySelector(".opened-sample-container");
  const mobile_layout = document.querySelector("#mobile-layout");
  const mapButton = document.querySelector("#switch-to-map");
  const mapButtonIcon = document.querySelector("#switch-to-map .fa-map");
  mapButton.style.transform = "translateX(calc(-100vw + 40px + 60px))";
  createListenerToOpenAdwaresButton();
  switchClassMember('hide-on-mobile', [Adwares_list, open_adware]);
  switchClassMember('map-switcher-hide', [mapButtonIcon]);
  mobile_layout.classList.add('main-active-map');
}


function openAdwares(){
  const map = document.querySelector("#right-main-screen");
  const mobile_layout = document.querySelector("#mobile-layout")
  const AdwaresButtonIcon = document.querySelector("#switch-to-map .fa-grip-lines");
  const mapButton = document.querySelector("#switch-to-map");
  mapButton.style.transform = "translateX(0)";
  createListenerToOpenMapButton();
  switchClassMember('hide-on-mobile', [map]);
  switchClassMember('map-switcher-hide', [AdwaresButtonIcon]);
  mobile_layout.classList.remove('main-active-map');
}

export {createListenersForButtons, openAdwares}

function createListenersForButtons(){
  createListenerToOpenMapButton();
  // createListenerToOpenAdwearsButton();
}

function createListenerToOpenMapButton(){
  const button = document.querySelector('#switch-to-map');
  button.removeEventListener('click', openAdweres);
  button.addEventListener('click', openMap)
}

function createListenerToOpenAdwearsButton(){
  const button = document.querySelector('#switch-to-map');
  button.removeEventListener('click', openMap);
  button.addEventListener('click', openAdweres)
}

function switchClassMember(cssClassName, members){
 const cssClasses = document.querySelectorAll('.' + cssClassName);
 console.log(cssClasses);
 cssClasses.forEach((cssClass) => {
 cssClass.classList.remove(cssClassName);
  });
  members.forEach((member) => {
 member.classList.add(cssClassName);
  });
}

function openMap(){
  console.log("dsdfsadfsadf");
  const adwears_list = document.querySelector("#left-main-screen");
  const open_adwere = document.querySelector(".opened-sample-container");
  const mobile_layout = document.querySelector("#mobile-layout");
  const mapButton = document.querySelector("#switch-to-map");
  const mapButtonIcon = document.querySelector("#switch-to-map .fa-map");
  mapButton.style.transform = "translateX(calc(-100vw + 40px + 60px))";
  createListenerToOpenAdwearsButton();
  switchClassMember('hide-on-mobile', [adwears_list, open_adwere]);
  switchClassMember('map-switcher-hide', [mapButtonIcon]);
  mobile_layout.classList.add('main-active-map');
}


function openAdweres(){
  const map = document.querySelector("#right-main-screen");
  const mobile_layout = document.querySelector("#mobile-layout")
  const AdwearsButtonIcon = document.querySelector("#switch-to-map .fa-grip-lines");
  const mapButton = document.querySelector("#switch-to-map");
  mapButton.style.transform = "translateX(0)";
  createListenerToOpenMapButton();
  switchClassMember('hide-on-mobile', [map]);
  switchClassMember('map-switcher-hide', [AdwearsButtonIcon]);
  mobile_layout.classList.remove('main-active-map');
}

export {createListenersForButtons, openAdweres}

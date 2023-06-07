// import { map } from './map.js';

import { getSingleAdware } from './getAdwares.js';
import * as map from './map.js';

function createListenersForButtons() {
    createListenerForCloseSamplePage();
    createListenersForNextBackButtons()
}

let imagesData = {};

function createListenerForCloseSamplePage() {
    const menu = document.querySelector('.opened-sample-container');
    const button = document.querySelector('#close-opened-sample');
    button.addEventListener('click', closeMenu);
}

function closeMenu(){
  const menu = document.querySelector('.opened-sample-container');
  const buttonOverlay = document.querySelector('.opened-sample-overlay');
  menu.classList.remove('opened-sample-container--active');
  buttonOverlay.classList.remove('opened-sample-container--active');
  map.restoreUserLastLocation();
}

function createListenersForNextBackButtons(){
  const nextButton = document.querySelector("#opened-sample-next");
  const backButton = document.querySelector("#opened-sample-back");

  nextButton.addEventListener('click', nextImage);
  backButton.addEventListener('click', backImage);
}

function nextImage(){
    if(imagesData.currentIndex < imagesData.data.length - 1){
      imagesData.currentIndex += 1;
      selectImage( imagesData.data[imagesData.currentIndex], imagesData.currentIndex);
    }
    else if(imagesData.currentIndex == imagesData.data.length - 1){
      imagesData.currentIndex = 0;
      selectImage( imagesData.data[imagesData.currentIndex], imagesData.currentIndex);
    }
};

function backImage(){
  if(imagesData.currentIndex > 0){
    imagesData.currentIndex -= 1;
    selectImage( imagesData.data[imagesData.currentIndex], imagesData.currentIndex);
  }
  else if(imagesData.currentIndex == 0){
    imagesData.currentIndex = imagesData.data.length - 1;
    selectImage( imagesData.data[imagesData.currentIndex], imagesData.currentIndex);
  }
}

async function makeSampleOpenedAndFillItWithData(id){
  const adware = await getSingleAdware(id);
  const opened_sample_container = document.querySelector('.opened-sample-container');
  const buttonOverlay = document.querySelector('.opened-sample-overlay');

  opened_sample_container.classList.add('opened-sample-container--active');
  buttonOverlay.classList.add('opened-sample-container--active');
  
  fillImageScroll(adware);
  document.querySelector('.opened-sample-price-full').innerHTML = adware.attributes.price;
  document.querySelector('.opened-sample-price-per-meter').innerHTML = adware.attributes.price / 40;
  document.querySelector('.opened-sample-address').innerHTML = adware.attributes.street_address;
  document.querySelector('.opened-sample-details-table').innerHTML =`
  <p>${adware.attributes.rooms} кімнати</p>
  <p>${adware.attributes.flour} поверх</p>
  <p>${adware.attributes.total_area} / ${adware.attributes.living_area}</p>
  <p>${adware.attributes.heating_type} опалення</p>
  <p>${adware.attributes.building_technology_type} будинок</p>
  <p>${adware.attributes.type_of_finish_apartment}</p>
  `;
  document.querySelector('.opened-sample-description p').innerHTML = adware.attributes.about;
}



function fillImageScroll(adware) {
  const images = adware.attributes?.photos;
  imagesData = images;
  imagesData.currentIndex = 0;
  const mainImg = document.querySelector('#opened-sample-main-img');
  const imgsPreview = document.querySelector('#opened-sample-preview-imgs');
  if (images?.data && Array.isArray(images.data)) {
    imgsPreview.innerHTML = '';
    images.data.forEach((img, index) => {
      const imgUrl = img?.attributes?.formats["small"]?.url;
      if (imgUrl) { // check if imgUrl exists before creating the imgContainer
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('opened-sample-preview-img-container');
        imgContainer.innerHTML = `<img src="${imgUrl}" alt="interiorPhoto">`;
        imgContainer.addEventListener('click', () => {
          selectImage( img, index);
        });
        imgsPreview.appendChild(imgContainer);
      }
    });
    selectImage( images.data[0], 0);
  }
}


function selectImage( img, index) {
  const imgsPreview = document.querySelector('#opened-sample-preview-imgs');
  const imgsPreviewWidth = imgsPreview.offsetWidth;
  const imgWidth = imgsPreview.children[index].children[0].offsetWidth;
  const imgContainer = imgsPreview.children[index];
  const imgContainerGap = Number(window.getComputedStyle(imgsPreview).getPropertyValue('gap').split('px')[0]);
  console.log(imgWidth + imgContainerGap);
  const mainImg = document.querySelector('#opened-sample-main-img');
  addHighlightingToCurrentPreviewImg(imgContainer);
  const largeImgUrl = img?.attributes?.formats["large"]?.url;
  const mediumImgUrl = img?.attributes?.formats["medium"]?.url;
  const smallImgUrl = img?.attributes?.formats["small"]?.url;
  if (largeImgUrl || mediumImgUrl || smallImgUrl) imagesData.currentIndex = index;
  if (largeImgUrl) { // check if largeImgUrl exists before setting the mainImg src
    mainImg.src = largeImgUrl;
  } else if (mediumImgUrl) {
    mainImg.src = mediumImgUrl;
    console.warn('Large image not found, medium image used instead');
  } else if (smallImgUrl) {
    mainImg.src = smallImgUrl;
    console.warn('Large and medium images not found, small image used instead');
  }
  imgsPreview.scrollLeft = index * (imgWidth + imgContainerGap) - (imgsPreviewWidth - imgWidth) / 2;
}

function addHighlightingToCurrentPreviewImg(elem) {
  const oldElem = document.querySelector('.opened-sample-preview-img-container-is-active');
  if (oldElem) {
    oldElem.classList.remove('opened-sample-preview-img-container-is-active');
  }
  elem.classList.add('opened-sample-preview-img-container-is-active');
}


export { createListenersForButtons, makeSampleOpenedAndFillItWithData };

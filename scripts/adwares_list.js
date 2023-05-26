import { makeSampleOpenedAndFillItWithData } from "./opened-sample.js";
import { geocode, createMarker, map } from "./map.js";


function addAdwareToPage(Adware){
  const adwaresList = document.querySelector('#left-main-screen-container');
        const AdwareElement = document.createElement('div');
        AdwareElement.classList.add('container-desk-object');
        AdwareElement.innerHTML =
        `<div class="container-desk-object-img">
        <img src="${Adware.attributes.photos.data[0].attributes.formats["medium"].url}" alt="interiorPhoto">
    </div>
    <div class="container-desk-object-description">
        <div class="container-desk-object-description-1-1"><p>${Adware.attributes.rooms} кімнати</p></div>
        <div class="container-desk-object-description-1-2"><p>${Adware.attributes.flour} поверх</p></div>
        <div class="container-desk-object-description-2-1"><p>${Adware.attributes.total_area} / ${Adware.attributes.living_area}</p></div>
        <div class="container-desk-object-description-2-2"><p>${Adware.attributes.type_of_finish_apartment}</p></div>
    </div>
    <div class="container-desk-object-address">
        <p>${Adware.attributes.street_address}</p>
    </div>
    <div class="container-desk-object-price">
        <p>${Adware.attributes.price}$</p>
    </div>`;
    AdwareElement.addEventListener('click', () => makeSampleOpenedAndFillItWithData(Adware));
    adwaresList.appendChild(AdwareElement);
}




export {addAdwareToPage}




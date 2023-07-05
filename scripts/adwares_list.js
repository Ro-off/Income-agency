    import { makeSampleOpenedAndFillItWithData } from "./opened-sample.js";
    import { geocode, createMarker, map } from "./map.js";
    import * as getAdwares from "./getAdwares.js";


    function addAdwareToPage(Adware){
    const adwaresList = document.querySelector('#left-main-screen-container');
            const AdwareElement = document.createElement('div');
            AdwareElement.classList.add('container-desk-object');

            let imgSrc;
            const mediumImgUrl = Adware?.attributes?.photos?.data[0]?.attributes?.formats?.["medium"]?.url;
            const smallImgUrl = Adware?.attributes?.photos?.data[0]?.attributes?.formats?.["small"]?.url;
             
            if (mediumImgUrl) {
                imgSrc = mediumImgUrl;
            } else if (smallImgUrl) {
                imgSrc = smallImgUrl;
              console.warn('Medium image not found, small image used instead');
            }

            AdwareElement.innerHTML =
            `<div class="container-desk-object-img">
            <img src="${imgSrc}" alt="interiorPhoto">
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
        AdwareElement.addEventListener('click', () => makeSampleOpenedAndFillItWithData(Adware.id));
        adwaresList.appendChild(AdwareElement);
    }
    createListenerWhenUserReachScrollBottom();

    function createListenerWhenUserReachScrollBottom() {
            console.log('createListenerWhenUserReachScrollBottom');
            const offset = 0;

            let adwares_list_container = document.querySelector('#left-main-screen-container');
            adwares_list_container.addEventListener('scroll', () => {
                    if (adwares_list_container.scrollTop >= adwares_list_container.scrollHeight - adwares_list_container.clientHeight - offset) {
                    console.log('scrollTop: ', adwares_list_container.scrollTop);
                    console.log('scrollHeight - clientHeight: ', adwares_list_container.scrollHeight - adwares_list_container.clientHeight);
                    console.log('scrollHeight: ', adwares_list_container.scrollHeight);
                    console.log('clientHeight: ', adwares_list_container.clientHeight);
                    console.log('offset: ', offset);
                    console.log('   ');
                    getAdwares.addContentOnPage();
                }
            });
        }
    



    export {addAdwareToPage}




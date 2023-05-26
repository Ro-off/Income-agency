import * as  adwares_list from "./adwares_list.js";
import * as map from "./map.js";

let server = "testddns34.asuscomm.com";
let port = "1337";
//http://192.168.50.177:1337/api/adverts
let url = "http://" + server + ":" + port + "/api/adverts";
let adwares = await getAllAdwares();


async function addContentOnPage() {
   adwares = await getAllAdwares();
  for (const adware of adwares) {
    console.log(adware);
    adwares_list.adwareToPage(adware);
    const geocodeResult = await map.geocode({address: adware.attributes.street_address + "Суми, Сумська область, Україна"});
    map.createMarker(geocodeResult, map.map, adware);
  }
};



function getAllAdwares() {
    return fetch(url + "?populate=*")
        .then(response => response.json())
        .then(data => {
            return data.data;
        })
        .catch(err => {
            throw err;
        });
}

function getSingleAdware(id){
    return fetch(url + `/${id}` + "?populate=*")
        .then(response => response.json())
        .then(data => {
            return data.data;
        })
        .catch(err => {
            throw err;
        });
}


export { getAllAdwares, getSingleAdware, adwares, addContentOnPage};

import * as  adwares_list from "./adwares_list.js";
import * as map from "./map.js";

let server = "testddns34.asuscomm.com";
let port = "1337";
let collection = "adverts";
//http://192.168.50.177:1337/api/adverts
let adwaresUrl = "http://" + server + ":" + port + "/api/" + collection;
let graphqlUrl = "http://" + server + ":" + port + "/graphql";
let currentCard = 0;
let cardLimit = 10;


//timer for testing
// setInterval(async function () {
//     console.log("timer");
//     console.log("currentCard: " + currentCard);
//     console.log("cardLimit: " + cardLimit);
//     await addContentOnPage();
//     currentCard += cardLimit;
// }, 5000);




async function addContentOnPage() {
let adwares = await getLimitedAdwares(cardLimit, currentCard);
  for (const adware of adwares) {
    adwares_list.addAdwareToPage(adware);
    // const geocodeResult = await map.geocode({address: adware.attributes.street_address + "Суми, Сумська область, Україна"});
    // map.createMarker(geocodeResult, map.map, adware);
  }
};

async function addMarkersOnMap(){
    const markersData = await getAllMarkersData();
    for (const markerData of markersData) {
        const geocodeResult = await map.geocode({address: markerData.attributes.street_address + "Суми, Сумська область, Україна"});
        map.createMarker(geocodeResult, map.map, markerData);
    }
}

async function getAllMarkersData(){
    try {
        const response = await fetch(graphqlUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({    
                query: `query{
                    adverts{
                        data{
                            id
                            attributes{
                                street_address
                                price
                            }
                        }
                    }
                }`,
            }),
        });
        // const data = await response.json();
        // return data.data;
        return response.json().then(response => { return response.data.adverts.data; })
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getLimitedAdwares(){
    console.log("getLimitedAdwares");
    console.log("limit: " + cardLimit);
    console.log("start: " + currentCard);
    try {
        const response = await fetch(graphqlUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                variables: {
                    limit: cardLimit,
                    start: currentCard,
                },
               
                query: `query($limit: Int, $start: Int){
                            adverts(pagination:{start:$start, limit:$limit}){
                                data{
                                    id
                                    attributes{
                                        price
                                        street_address
                                        rooms
                                        total_area
                                        living_area
                                        flour
                                        type_of_finish_apartment
                                        photos{
                                            data{
                                                attributes{
                                                    formats
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }`,
            }),
        });
        currentCard += cardLimit;
        return response.json().then(response => { return response.data.adverts.data; })
    } catch (error) {
        console.error('Error:', error);
    }
}




function getAllAdwares() {
    return fetch(adwaresUrl + "?populate=*")
        .then(response => response.json())
        .then(data => {
            return data.data;
        })
        .catch(err => {
            throw err;
        });
}

function getSingleAdware(id){
    return fetch(adwaresUrl + `/${id}` + "?populate=*")
        .then(response => response.json())
        .then(data => {
            return data.data;
        })
        .catch(err => {
            throw err;
        });
}


export { getAllAdwares, getSingleAdware, addContentOnPage,  addMarkersOnMap, getLimitedAdwares};

// import * as geocoder from "/geocoder.js";
import { makeSampleOpenedAndFillItWithData } from "./opened-sample.js";
import * as mapSwitcher from "./map-switcher.js";

let map;
let marker;
let geocoder;
let responseDiv;
let response;


let lastUserMapPosition = {
  coords: {lat: 50.9216, lng: 34.80029},
  zoom: 13,
  wasAlreadySet: false,
}

window.initMap = initMap;


// Initialize and add the map
async function initMap() {
  const cityCenter = { lat: 50.9216, lng: 34.80029 };
   map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    minZoom: 11,
    center: cityCenter,
    mapId: 'c6f1d630882416e3',
    disableDefaultUI: true,
    gestureHandling: "greedy",
  });
  geocoder = new google.maps.Geocoder();
}

function setUserLastLocation(){
  console.log(!lastUserMapPosition.wasAlreadySet);
    if(!lastUserMapPosition.wasAlreadySet){
      lastUserMapPosition.coords = map.getCenter();
      lastUserMapPosition.zoom = map.getZoom();
      lastUserMapPosition.wasAlreadySet = true;
    console.log(lastUserMapPosition);
    }
}

function restoreUserLastLocation(){
  console.log(lastUserMapPosition);
  if(lastUserMapPosition.wasAlreadySet){
    map.setCenter(lastUserMapPosition.coords);
    map.setZoom(lastUserMapPosition.zoom);
    lastUserMapPosition.wasAlreadySet = false;
  }
}

function setCenterAndZoom(position, zoom){
  console.log(position);
  console.log(zoom);
  map.setCenter(position);
  map.setZoom(zoom);
}

function createMarker (position, map, adwert){
  const priceTag = document.createElement("div");
  priceTag.className = "price-tag";
  priceTag.textContent = `${adwert.attributes.price}$`;

  const marker = new google.maps.marker.AdvancedMarkerView({
    position,
    map,
    content: priceTag,
  });
  marker.addEventListener("gmp-click", () => {
    makeSampleOpenedAndFillItWithData(adwert);
    setUserLastLocation();
    setCenterAndZoom(position, 15);
    mapSwitcher.openAdweres();
  });
  return marker;
}

function clear() {
  // marker.setMap(null);
}

async function geocode(request) {
  clear();
   return geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;
      console.log(results);
      // map.setCenter(results[0].geometry.location);
      // marker.setPosition(results[0].geometry.location);
      // marker.setMap(map);
      response = JSON.stringify(result, null, 2);
      const cityCenter = { lat: 50.9216, lng: 34.80029 };
      return { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
    })
    .catch((e) => {
      console.log("Geocode was not successful for the following reason: " + e);
    });
}




export {initMap, createMarker, geocode, map, setCenterAndZoom, setUserLastLocation, restoreUserLastLocation}

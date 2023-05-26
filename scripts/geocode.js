let map;
let marker;
// let geocoder;
let responseDiv;
let response;

function geocode(request) {
  const geocoder = new google.maps.Geocoder();
  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;

      // map.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
      response.innerText = JSON.stringify(result, null, 2);
      return results;
    })
    .catch((e) => {
      alert("Geocode was not successful for the following reason: " + e);
    });
}



export {geocode};

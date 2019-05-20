// GoogleMaps JavaScript API key
const apiKey = 'AIzaSyCFQE_PZPy8chV3JD_iuvZEJuXPo-dZqRg';

const importer = {
  url: (url) => {
    return new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.addEventListener('load', () => resolve(script), false);
      script.addEventListener('error', () => reject(script), false);
      document.body.appendChild(script);
    });
  },
  urls: (urls) => {
    return Promise.all(urls.map(importer.url));
  }
};

importer.url(`https://maps.googleapis.com/maps/api/js?key=${apiKey}`)
  .then(() => {
    console.log('hurray');
  });

const locateMe = () => {
  navigator.geolocation.getCurrentPosition(success, error, {maximumAge: 10, timeout: 10000, enableHighAccuracy: true});
}

function success(position) {
  const lng = position.coords.longitude,
        lat = position.coords.latitude,
        msg = `Longitude: ${lng}, Latitude: ${lat}`;

  console.log(msg);
  showOnMap(position);
}

function error(error) {
  let errorCase;
  alert("erro");
  switch(error.code) {
    case error.PERMISSION_DENIED:
      errorCase = "PERMISSION_DENIED";
      break;
    case error.POSITION_UNAVAILABLE:
      errorCase = "POSITION_UNAVAILABLE";
      break;
    case error.TIMEOUT:
      errorCase = "TIMEOUT";
      break;
    default:
      errorCase = "Unrecognized error";
      break;
  }
  alert(`Error code: ${error.code} \nCase: ${errorCase} \nMessage: ${error.message}`);
}

document.querySelector('button').addEventListener('click', () => {
  locateMe();
});


function showOnMap(position) {
  const pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  const mapContainer = document.getElementById('map');
  const map = new google.maps.Map(mapContainer, {
    zoom: 10,
    center: pos
  });
  const marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}

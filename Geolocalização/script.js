const display = document.querySelector('h2')

function success(pos) {
  display.innerHTML = `Latitude: ${pos.coords.latitude} <br> Longitude: ${pos.coords.longitude}`
}

navigator.geolocation.getCurrentPosition(success)

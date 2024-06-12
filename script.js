document.addEventListener('DOMContentLoaded', () => {
    function updateTimeAndDate() {
        const now = new Date();
        const time = now.toLocaleTimeString();
        const date = now.toLocaleDateString();

        document.getElementById('time').textContent = time;
        document.getElementById('date').textContent = date;
    }

    function updateLocation(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        document.getElementById('latitude').textContent = `Latitud: ${latitude}`;
        document.getElementById('longitude').textContent = `Longitud: ${longitude}`;
    }

    function showError(error) {
        document.getElementById('latitude').textContent = 'No es pot obtenir la localització';
        document.getElementById('longitude').textContent = `Error: ${error.message}`;
    }

    updateTimeAndDate();
    setInterval(updateTimeAndDate, 1000);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateLocation, showError);
    } else {
        document.getElementById('latitude').textContent = 'Geolocalització no suportada';
        document.getElementById('longitude').textContent = '';
    }
});

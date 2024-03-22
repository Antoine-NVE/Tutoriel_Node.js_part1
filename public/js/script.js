// Fichier JS pour le front-end

const myForm = document.querySelector('.myForm');
const myLocation = document.querySelector('.myLocation');
const weatherData = document.getElementById('weatherData');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/weather?location=${myLocation.value}`)
        .then((response) => response.json())
        .then((response) => {
            const { location, country, date, hour, temperature } = response;
            weatherData.innerHTML = `Le nom de la ville est ${location}. Elle est située en ${country}. Nous sommes le ${date} et il est ${hour}. La température est de ${temperature}° C.`;
        });
});

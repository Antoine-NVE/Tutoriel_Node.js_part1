// fetch(`https://www.prevision-meteo.ch/services/json/${city}`)
//     .then((response) => response.json())
//     .then((response) => {
//         const { city_info, current_condition, fcst_day_0 } = response;
//         console.log(city_info.country);
//     });

async function fetchWeather(city) {
    try {
        response = await fetch(
            `https://www.prevision-meteo.ch/services/json/${city}`
        );
        response = await response.json();
        const { city_info, current_condition } = response;

        console.log(`
            Le nom de la ville est ${city_info.name}.
            Le pays est ${city_info.country}.
            Il fait ${current_condition.tmp}° C.
            Le temps est ${current_condition.condition}.
        `); // prettier-ignore
    } catch (error) {
        console.log('Erreur lors de la récupération des données.', error);
    }
}
fetchWeather('Paris');
fetchWeather('Limoges');

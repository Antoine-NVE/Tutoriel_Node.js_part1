const weather = (location, callback) => {
    fetch(`https://www.prevision-meteo.ch/services/json/${location}`)
        .then((response) => response.json())
        .then((response) => {
            if (response.errors) {
                const { errors } = response;
                callback(
                    `Impossible de renvoyer vos informations. Error ${errors[0].code} : ${errors[0].text}.`,
                    undefined
                );
            } else {
                const { city_info, current_condition } = response;
                callback(
                    undefined,
                    `Le nom de la ville est ${city_info.name}. Elle est située en ${city_info.country}. Nous sommes le ${current_condition.date} et il est ${current_condition.hour}. La température est de ${current_condition.tmp}° C. `
                );
            }
        });
};

module.exports = { weather };

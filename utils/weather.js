const weather = (location, callback) => {
    fetch(`https://www.prevision-meteo.ch/services/json/${location}`)
        .then((response) => response.json())
        .then((response) => {
            if (response.errors) {
                const { errors } = response;
                callback(
                    {
                        code: errors[0].code,
                        text: errors[0].text,
                        description: errors[0].description,
                    },
                    undefined
                );
            } else {
                const { city_info, current_condition } = response;
                callback(undefined, {
                    location: city_info.name,
                    country: city_info.country,
                    date: current_condition.date,
                    hour: current_condition.hour,
                    temperature: current_condition.tmp,
                });
            }
        });
};

module.exports = { weather };

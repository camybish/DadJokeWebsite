function fetchNewJoke() {
    let jokeContainer = document.querySelector("#joke-container")

    fetch("https://icanhazdadjoke.com/slack")
        .then(response => {
            response.json()
        .then(json => {
            jokeContainer.innerHTML = json.attachments[0].text
            return json
        });
    });

}

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/US',
  headers: {
    'X-RapidAPI-Key': '5d54d09c63mshb4dec9a56599083p142452jsn38433355d4e1',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

async function geoDB () {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}


'use strict';
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
   </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};
const whereAmI = function (lat, lng) {

    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {
            console.log(response);
            if (!response.ok)
                throw new Error(`Your search more than 3 time using this api error ${response.status}`)
            return response.json()
        }
        )
        .then(data => {
            console.log(data);
            const country = data.country;
            console.log(`I am in ${data.city}, ${data.country}`);
            return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        })
        .then(response => {
            if (!response.ok)
                throw new Error(`Country not found ${response.status}`)
            return response.json()
        })
        .then(data => {
            renderCountry(data[0])
        })
        .catch(err => {
            console.log(`Something went wrong because ${err.message}`);
        })

}

// whereAmI(52.508, 13.381)
whereAmI(19.037, 72.873)
// whereAmI(-33.933, 18.474)
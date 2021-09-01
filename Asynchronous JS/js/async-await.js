'use strict';
const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};
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
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};
//Consuming promises with async/await
//await just consuming promise like then
//create async function -this function keep running in background while performing the code inside it, then when the function is done it automatically return a promise
const whereAmI = async function () {
    //inside async we can have one or more await statment
    //await just wait for the promise response and we can store it in a variable
    try {
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;
        const countrycoord = await fetch(
            `https://geocode.xyz/${lat},${lng}?geoit=json`
        );
        if (!countrycoord.ok) throw new Error('Sorry Country Not Found');
        const countrydata = await countrycoord.json();
        const country = countrydata.country;

        const mycountryFind = await fetch(
            `https://restcountries.eu/rest/v2/name/${country}`
        );
        if (!mycountryFind.ok) throw new Error('Sorry Country Not Found');

        const mycountryData = await mycountryFind.json();

        renderCountry(mycountryData[0]);
    } catch (err) {
        renderError(`Somethingwent wrong ${err.message}`);
    }
};
whereAmI();
console.log('FIrst');

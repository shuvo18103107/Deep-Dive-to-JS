'use strict';

//create a new promise just like fetch function
/*
const lotterytPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      //when a promise is fullfilled we call resolve function
      resolve('You Win💰');
    } else {
      reject(new Error('You loose'));
    }
  }, 2000);
});
//getch e amra api jmn call dei promise  object e same vabe resolve or reject call kori r response ta then diye pore catch kori error hole catch e jai
lotterytPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
//Promisyfying settimeout
const wait = function (seconds) {
  //some async behaviour in this function
  return new Promise(function (resolve) {
    //no need of reject cg setttimeout will not occur any error
    setTimeout(resolve, seconds * 1000);
  });
};
//we not set any resolve value //real world coding format
wait(2)
  .then(() => {
    console.log('I wait for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I wait for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I wait for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I wait for 4 seconds');
    return wait(1);
  });

//we can return a fullfilled or rejected promise immediately by calling resolve or reject on promise constructor

Promise.resolve('Welcome to the deep dive of js ').then((res) =>
  console.log(res)
);
Promise.reject(new Error('something went wrong')).catch((err) =>
  console.error(err)
);


*/

//promisifying the geolo9cation API

const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');

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

console.log('getting position ...');

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(new Error('location denied by user'))

        // )
        //we can do this in more simple way
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

getPosition()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

const whereAmI = function () {
    getPosition().then(res => {
        console.log(res.coords);
        const { latitude: lat, longitude: lng } = res.coords;
        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    })


        .then((response) => {
            console.log(response);
            if (!response.ok)
                throw new Error(
                    `Your search more than 3 time using this api error ${response.status}`
                );
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const country = data.country;
            console.log(`I am in ${data.city}, ${data.country}`);
            return fetch(`https://restcountries.eu/rest/v2/name/${country}`);
        })
        .then((response) => {
            if (!response.ok) throw new Error(`Country not found ${response.status}`);
            return response.json();
        })
        .then((data) => {
            renderCountry(data[0]);
        })
        .catch((err) => {
            console.log(`Something went wrong because ${err.message}`);
        });
};

btn.addEventListener('click', whereAmI);
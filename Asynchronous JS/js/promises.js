'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//promises and the fetch API also modern way of ajax call
//promise is  like a container for async deilvered value or it is a container for  future value
//by using promise we do not need any eventhandler call back function to recieve the outcome of a request

// const request = fetch('https://restcountries.eu/rest/v2/name/bangladesh')
// console.log(request);
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
    // countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};
// const getcountryData = function (country) {
//     //fetch api return a promise if the promise is setteled i mean success then we call then call back method
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (response) {

//         console.log(response);
//         //to read the body/data  from the response we need to call json method
//         return response.json() //it will also give a new promise so we have to handel it by calling another then
//         //basically here we return a promise like when fetch return a promise
//     }).then(function (data) {

//         const [dataObject] = data;
//         console.log(dataObject);
//         renderCountry(dataObject)

//     });
// };
//modified the promise
//note : without return prmosise we cannot call then, inside a then if we want to call another then method we have to return promise

// const getcountryData = function (country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(response => {
//             //custom error handling
//             if (!response.ok) //response.ok = false
//             {
//                 //throw reject the promise immediately and go to catch method to print the custom error message

//                 throw new Error(`Country Not Found ${response.status}`)
//             }
//             return response.json()
//         })
//         .then(data => {
//             // console.log(data);
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];
//             // console.log(neighbour);
//             if (!neighbour) return;
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             // this call back function returns a error object so we can print only message from this err object not whole object
//             console.error(`${err}🚨🚨🚨`);
//             renderError(`something went wrong🚨 ${err.message}, Try again!`)
//         })
//         .finally(() => {
//             //loading spiiner in web a great use case of finally
//             //no matter the promise is fullfilled or rejected finally always trigger
//             countriesContainer.style.opacity = 1;

//         })

// };
const getJson = function (url, errorMsg = 'Something Went Wrong') {
    return fetch(url).then((response) => {
        //custom error handling
        if (!response.ok) {
            //response.ok = false
            //throw reject the promise immediately and go to catch method to print the custom error message

            throw new Error(`${errorMsg} ${response.status}`);
        }
        return response.json();
    });
};

const getcountryData = function (country) {
    getJson(
        `https://restcountries.eu/rest/v2/name/${country} `,
        'country not found'
    )
        .then((data) => {
            // console.log(data);
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            // console.log(neighbour);
            //in case if the country has no neigbour then throw a new error that will trigger the catch function
            if (!neighbour) throw new Error('No neigbour found!'); //ekhane ja set korbo ta catch e giye catch er error object er message property set korbe
            return getJson(
                `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
                'country not found'
            );
        })

        .then((data) => renderCountry(data, 'neighbour'))
        .catch((err) => {
            // this call back function returns a error object so we can print only message from this err object not whole object
            console.error(`${err}🚨🚨🚨`);
            renderError(`something went wrong🚨 ${err.message}, Try again!`);
        })
        .finally(() => {
            //loading spiiner in web a great use case of finally
            //no matter the promise is fullfilled or rejected finally always trigger
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', function () {
    getcountryData('Australia');
});

//whenerver we create error in our app we create new Error constructror function and pass the message that will automatically trigger the catch method and store this message in his error object message property
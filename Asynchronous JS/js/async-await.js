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
        return `I am in ${countrydata.city},${countrydata.country}  `; //return something from async function return a promise
    } catch (err) {
        renderError(`Somethingwent wrong ${err.message}`);

        //returning promise error
        throw err;
    }
};
// whereAmI().then(res => console.log(res)).catch(err => console.error(err.message))
// console.log('FIrst').finally(() => console.log('I am happy man always work in all situation'))
//convert returning promise to async await way

//await cannot work without async so we can use ife
//ife -immediately invoked function expression
(async function () {
    try {
        const returnVal = await whereAmI();
        console.log(returnVal);
    } catch (err) {
        //async theke kicu return korle r error asle ta fullfilled always call kore tai async function er catch e err through kore eikhane catch block e dorte hoi
        console.log(err.message);
    } finally {
        console.log('Come on dude i am always cool work in all time');
    }
})();

//Running promises in parrallel
//we want to get data about 3 countries and log the capital city of three country as an array
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
const get3countries = async function (c1, c2) {
    try {
        // const [countrydata1] = await getJson(
        //     `https://restcountries.eu/rest/v2/name/${c1}`
        // );
        // const [countrydata2] = await getJson(
        //     `https://restcountries.eu/rest/v2/name/${c2}`
        // );
        // const [countrydata3] = await getJson(
        //     `https://restcountries.eu/rest/v2/name/${c3}`
        // );
        //get all the response parallely here we get response one after another , we dont want that
        //we use promise.all function which takes all the promise in an array and call it at a same time
        const data = await Promise.all([
            getJson(`https://restcountries.eu/rest/v2/name/${c1}`),
            getJson(`https://restcountries.eu/rest/v2/name/${c2}`),
            getJson(`https://restcountries.eu/rest/v2/name/${c3}`),
        ]);
        // console.log([data1[0].capital, data2[0].capital, data3[0].capital]);
        console.log(data.map((country) => country[0].capital));
        //here the prb is if one promise is reject then others promise also rejected
        //when we have multiple async operation and operation don't depend on one another then use promise.all to run them parrallely
    } catch (err) {
        console.log(err.message);
    }
};

get3countries('Bangladesh', 'usa', 'japan');

console.log(`-----------other promise combinator------`);

(async function () {
    const res = await Promise.race([
        //now this 3 promise will rach together and the first reach winner return a fullfilled promise
        //if one promise is rejected then others will also rejected
        getJson(`https://restcountries.eu/rest/v2/name/italy`),
        getJson(`https://restcountries.eu/rest/v2/name/bangladesh`),
        getJson(`https://restcountries.eu/rest/v2/name/egypt`),
    ]);

    console.log(res[0]);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(() => {
            reject(new Error('request too long'));
        }, sec * 1000);
    });
};

Promise.race([
    getJson(`https://restcountries.eu/rest/v2/name/iran`),
    timeout(1),
    //this two will reach if the timeout function won then it will reject the fetch function also
])
    .then((res) => console.log(res[0]))
    .catch((err) => console.log(err.message));

//promise.allSettled- it return all the result of all promises no matter is fullfilled or rejected , similar like promise.all but diff is promise.all could not return if any promise is rejected

Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('error'),
    Promise.resolve('Success'),
])
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));

//promise.any -es2021 -this will return first fullfilled promised and here rejected promises are ignore
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('error'),
    Promise.resolve('another Success'),
])
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// First AJAX call - we can do the ajax call in multiple way
//old way  XMlHttprequest
const getCountryData = function (country) {



    const request = new XMLHttpRequest(); //return a object
    //request a API
    //we use Rest country API - Get information about countries via a RESTful API
    //open request
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
    //send request to the RestCountry API
    request.send()

    // console.log(request.responseText); //here it will not work we need eventlistner to call back the function when data get
    //we get the data in JSON format we have to convert it into js object

    //as soon as the data arrived this callback function will call as it fired  the load event
    request.addEventListener('load', function () {

        // console.log(this.responseText);
        //convert json data to js object
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `<article class="country">
 <img class="country__img" src="${data.flag}" />
 <div class="country__data">
   <h3 class="country__name">${data.name}</h3>
   <h4 class="country__region">${data.region}</h4>
   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
   <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
   <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
 </div>
</article>`;
        countriesContainer.insertAdjacentHTML('beforeend', html)
        countriesContainer.style.opacity = 1;

    })

}

getCountryData('bangladesh')
getCountryData('usa')
getCountryData('china')
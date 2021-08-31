'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// *First AJAX call - we can do the ajax call in multiple way

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
//old way  XMlHttprequest
const getCountryAndNeigbourData = function (country) {
  //Ajax call country 1
  const request = new XMLHttpRequest(); //return a object
  //request a API
  //we use Rest country API - Get information about countries via a RESTful API
  //open request
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  //send request to the RestCountry API
  request.send();

  // console.log(request.responseText); //here it will not work we need eventlistner to call back the function when data get
  //we get the data in JSON format we have to convert it into js object

  //as soon as the data arrived this callback function will call as it fired  the load event
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    //convert json data to js object
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //render country 1
    renderCountry(data);
    //get neigbour country (2)

    const [neigbours] = data.borders;
    if (!neigbours) return;
    //2nd ajax call

    const request2 = new XMLHttpRequest();
    ///search by code like ESP
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neigbours}`); //here we search by country code which return exactly the data, here data is not in array

    request2.send();
    request2.addEventListener('load', function () {
      const data = JSON.parse(this.responseText);

      console.log(data); //neighbour country object
      renderCountry(data, 'neighbour')
    })

  });


};

getCountryAndNeigbourData('Brazil');
// getCountryData('usa')
// getCountryData('china')

//in previous we create a function and call it multiple time but here each function has a ajax call parallely , we cannot control so now we use callback to control which one call first or later
//*callback hell

//when 2nd ajax call is dependent on first ajax call and we go through a nested ajax call

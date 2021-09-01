'use strict';
//create a new promise just like fetch function
const lotterytPromise = new Promise(function (resolve, reject) {
    console.log('Lottery draw is happening');
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            //when a promise is fullfilled we call resolve function
            resolve('You Win💰')
        }
        else {
            reject(new Error('You loose'))
        }
    }, 2000);

})
//getch e amra api jmn call dei promise  object e same vabe resolve or reject call kori r response ta then diye pore catch kori error hole catch e jai
lotterytPromise.then(res => console.log(res)).catch(err => console.error(err))
//Promisyfying settimeout
const wait = function (seconds) {
    //some async behaviour in this function
    return new Promise(function (resolve) {
        //no need of reject cg setttimeout will not occur any error
        setTimeout(resolve, seconds * 1000);

    })


}
//we not set any resolve value //real world coding format
wait(2).then(() => {
    console.log('I wait for 1 seconds')
    return wait(1)
}
).then(() => {
    console.log('I wait for 2 seconds')
    return wait(1)
})
    .then(() => {
        console.log('I wait for 3 seconds')
        return wait(1)
    })
    .then(() => {
        console.log('I wait for 4 seconds')
        return wait(1)
    })

//we can return a fullfilled or rejected promise immediately by calling resolve or reject on promise constructor

Promise.resolve('Welcome to the deep dive of js ').then(res => console.log(res))
Promise.reject(new Error('something went wrong')).catch(err => console.error(err))
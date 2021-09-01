'use strict';
const imageContainer = document.querySelector('.images');
const wait = function (seconds) {
    //some async behaviour in this function
    return new Promise(function (resolve) {
        //no need of reject cg setttimeout will not occur any error
        setTimeout(resolve, seconds * 1000);
    });
};
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function () {
            imageContainer.append(img); //like beforeend
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image Not Found'));
        });
    });
};
let currentImage;
createImage('./img/img-1.jpg')
    .then((img) => {
        console.log('Image 1 Loaded');
        currentImage = img;
        return wait(2);
    })
    .then(() => {
        currentImage.style.display = 'none';
        return createImage('./img/img-2.jpg');
    })
    .then((img2) => {
        console.log('Image 2 Loaded');
        currentImage = img2;
        return wait(2);
    })
    .then(() => {
        currentImage.style.display = 'none';
        return createImage('./img/img-3.jpg');
    })
    .then((img3) => {
        currentImage = img3;
        console.log('image 3 loaded');
        return wait(2);
    })
    .then(() => {
        currentImage.style.display = 'none';
    })

    .catch((err) => console.error(err.message));

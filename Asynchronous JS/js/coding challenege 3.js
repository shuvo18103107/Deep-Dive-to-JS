'use strict';
const imageContainer = document.querySelector('.images');
let currentImage;
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

const loadNPause = async function () {
    try {
        const image = await createImage('./img/img-1.jpg');
        currentImage = image;
        await wait(2);
        currentImage.style.display = 'none';
        const image2 = await createImage('./img/img-2.jpg');
        currentImage = image2;
        await wait(2);
    } catch (err) {
        console.log(err.message);
    }
};

// loadNPause();

const loadALl = async function (imgArr) {
    try {
        const imgs = imgArr.map(async (img) => {
            //here async function return something so when we consume it we get promises
            return await createImage(img);
        });
        console.log(imgs); //array of promises

        const imgEl = await Promise.all(imgs); //imgs already an array
        console.log(imgEl);
        imgEl.forEach((img) => {
            img.classList.add('parallel');
        });
    } catch (err) {
        console.log(err.message);
    }
};

loadALl(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);



// array of temperature for one day
// calculate the temperature amplitude for one day , sometimes there might be a sensor error
const temperature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [4, -2, -8, -4, 9, 13, 1, 14, 17, 6, 3, 'error'];
const temperature = temperature1.concat(temperature2);
console.log(temperature);

// const sensor = temperature.indexOf('error')
// console.log(sensor);
let newtemp = [...temperature]
console.log(newtemp.splice(4, 1));
let maxvalue = 0;
let minvalue = 0;

const findTemp = function (temp) {
    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] != 'number') continue;
        if (temp[i] > maxvalue) {
            // debugger;
            maxvalue = temp[i];
        }
        if (temp[i] < minvalue) {
            minvalue = temp[i];
        }

    }
    console.log(maxvalue, minvalue);
    const TempAmp = maxvalue - minvalue;
    return TempAmp;
}





console.log(findTemp(temperature));

// coding challeng 

const data1 = [17, 21, 23, -5, 6, -12, -9];
const data2 = [12, 5, -5, 0, 4];




const data = data1.concat(data2);
console.log(data);

const printForecast = function (tempValue) {
    for (let i = 0; i < tempValue.length; i++) {
        console.log(`${tempValue[i]}°C in ${i + 1} days`);
    }
}

printForecast(data);

const sli = [17, 21, 23, -5, 6, -12, -9, 5, 3, 6, 9, 8, -1, 2, 5, 6]
const slistore = sli.slice(2, 5); // (kotha theke suru , koi num porjonto katbo seta length theke 1 , 2 kore agaite hobe)
console.log(slistore);
const splisStore = sli.splice(2, 3);//(start index, koita nibo just num)
console.log(splisStore);
const splplusSlice = slistore.concat(splisStore)
console.log(splplusSlice);

// console.log(temperature.slice(1, 2));


// console.log(temperature.slice(sensor, 0));
// temperature.splice(4, 1);
// console.log(temperature);





// console.log(Math.max.apply(null, temperature));
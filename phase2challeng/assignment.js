
//coding challenge 1

const calcAverage = (data1, data2, data3) => (data1 + data2 + data3) / 3;

let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolhins, avgKoalas);


// expression function 
const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        return console.log(`Dolphin win(${avgDolhins} vs. ${avgKoalas})`);

    }
    else if (avgKoalas >= 2 * avgDolhins) {
        return console.log(`Koals win(${avgKoalas}vs. ${avgDolhins})`);

    }
    else {
        return console.log(`No team wins!`);
    }
}
checkWinner(avgDolhins, avgKoalas);
checkWinner(576, 111);
// test data 2
avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolhins, avgKoalas);
checkWinner(avgDolhins, avgKoalas);

'use strict'
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

console.log(gameEvents);
//1. map iteration and spread operator and using set in an array
const event = [... new Set(gameEvents.values())];
console.log(event);

//2 delete any data from map
gameEvents.delete(64);
console.log(gameEvents);

//3.

const times = [...gameEvents.keys()].pop()

console.log(`An event happened, on 
average, every ${times / gameEvents.size} minutes`);



//4.

for (const [key, value] of gameEvents)

    (key <= 45 && key <= 90) ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);



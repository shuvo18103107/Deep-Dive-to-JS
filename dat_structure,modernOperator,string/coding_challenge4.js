'use strict'
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'))

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let textAreaVal = document.querySelector('textarea').value;
    const row = textAreaVal.split('\n')
    for (const [key, camelCase] of row.entries()) {
        const [firstLet, lastLet] = camelCase.trim().split('_');
        const lastCase = lastLet[0].toUpperCase() + lastLet.slice(1)
        const output = (firstLet + lastCase);
        console.log(`${output.padEnd(20)}${'✅'.repeat(key + 1)}`);
    }
    document.querySelector('textarea').value = ' ';
    // console.log(a, b);
})

const { readFileSync, writeFileSync } = require('fs');

const { name, age, legal } = JSON.parse(readFileSync('data.json', 'utf-8'));

// console.log(name);
// console.log(age);
// console.log(legal);

// const myData = {
//     name: 'Justine',
//     age: 27,
//     legal: true,
// };

// const objectToJson = JSON.stringify(myData);

// console.log(objectToJson);

// writeFileSync('myData.json', objectToJson);

const myData = JSON.parse(readFileSync('myData.json', 'utf-8'));
myData.name = 'Pierre';
const objectToJson = JSON.stringify(myData);
writeFileSync('myData.json', objectToJson);

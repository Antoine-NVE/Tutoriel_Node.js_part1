const fs = require('fs');

// readFileSync -> lire le contenu d'un fichier
// writeFileSync -> écrire un fichier avec un contenu

fs.writeFileSync('test.txt', 'Mon deuxième fichier !');
console.log('Le fichier test.txt a été créé !');

const fileContent = fs.readFileSync('test.txt', 'utf-8');
console.log(fileContent);

const fs = require('fs');

// const contents = fs.readFileSync('a.txt', 'utf-8');
const contents = fs.readFile('a.txt', 'utf-8', function(err, contents){
    console.log(contents);
});

console.log(contents);
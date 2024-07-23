const fs = require('fs');

const read = fs.readFile('greet.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

const write = fs.writeFile('greet.txt', 'Hello World!', (err) => {
    if(err) {
        console.log('Error', err);
    }
    else {
        console.log('File overwritten successfully!');
    }
});

// const remove = fs.unlink('greet.txt', (err) => {
//     if(err) {
//         console.log('Error', err);
//     }
//     else {
//         console.log('Unlinked successfully');
//     }
// });


module.exports = {read, write};
// first part 

// const student = require('./student');







// second part : will return empty java object

// const student = require('./student');
// console.log(student);








// third part : can't access variable of imported file.
// ReferenceError: friends is not defined 

// const student = require('./student');
// console.log(friends);

// fourth part : for overcoming the third part problem we need to manually export
// the data or properties of the file like friends (var)

// single thing & multiple things

// const student = require('./student');
// console.log(student);

// or 

// console.log(student.ages, student.friends);

// fifth part 

// const { friends, ages } =  require('./student');
// console.log(friends, ages);



// some built in modules in node 

// os : operating system

const os = require('os');

console.log(os.platform(), os.homedir());


// fs : FileSystem




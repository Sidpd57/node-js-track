// console.log(global);


setTimeout(() => {
    console.log('hello world after 4 second');
    clearInterval(int);
}, 4000);

const int = setInterval(() => {
    console.log('in the interval')
}, 1000);

// console.log(__dirname);
// console.log(__filename);
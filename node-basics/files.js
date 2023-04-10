const fs = require('fs');

// reading files: asynchoronous code: needs some time to do and also it does't stop code from carrying down the execution

// fs.readFile('../docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('sample of asynchronous function in javascript'); //this will be done first because upper code is asy.. 


//writing files 
// if there is no file which such name new file will be created

// fs.writeFile('./docs/blog2.txt', 'hello everyone!', ()=>{
//     console.log('file was written');
// });

// make directiories 

// if(!fs.existsSync('../assets')){
//     fs.mkdir('../assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// } else {
//     fs.rmdir('../assets',(err)=>{
//         console.log(err);
//     });
//     console.log('folder deleted');
// }


// delete file 

if (fs.existsSync('../docs/deleteme.txt')){
    fs.unlink('../docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}

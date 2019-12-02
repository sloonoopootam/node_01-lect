/* TODO:
** 1) Write a file for 10,000 strings
** 2) Read it bit by bit in the stream
** 3) Create a stream that will append the file
** 4) Transform streams, one  - to transform input strings into uppercase,
**      next one - to delete numbers,
**      next - to update the text, the first letter should be uppercase, other characters - into lowercase
** 5) Create a stream inside the second transform, in which you will record deleted numbers in a new file also
**      in the stream and additionally new data: the date of entry, name, surname and rank.
 */

// ( 01 )
// const fs = require('fs');
// const file = fs.createWriteStream('./almost-big.file');
//
// for (let i = 0; i <= 1e+4; i++) {
//     file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ' +
//         'exercitation ullamco anim id est laborum.\n');
// }
//
// file.end();
//
// ( 02 )
// const fs = require('fs');
// const server = require('http').createServer();
//
// server.on('request', (req, res) => {
//     const src = fs.createReadStream('./almost-big.file');
//     src.pipe(res);
// });
//
// server.listen(8000);
//
// ( 03 )
// const {Duplex} = require('stream');
// const fs = require('fs');
//
// const inoutStream = new Duplex({
//     write(chunk, encoding, callback) {
//         console.log(chunk.toString());
//         fs.appendFileSync('./almost-big.file', chunk.toString());
//         callback();
//     }
// });
//
// process.stdin.pipe(inoutStream);
//
// ( 04 )
// const {Transform} = require('stream');
// const fs = require('fs');
// const file1 = fs.createWriteStream('./main.file');
// const file2 = fs.createWriteStream('./minor.file');
//
// const upperCaseTr = new Transform({
//     transform(chunk, encoding, callback) {
//         this.push(chunk.toString().toUpperCase());
//         callback();
//     }
// });
//
// const numberFreeTr = new Transform({
//     transform(chunk, encoding, callback) {
//         this.push(chunk.toString().replace(/[0-9]/g, ''));
//         if (chunk.toString().replace(/[^0-9]/g, '').length > 0) {
//             file2.write(`${chunk.toString().replace(/[^0-9]/g, '')} : ${new Date}, ` +
//              `${this.firstname} ${this.lastname}, ${this.rank}`; // ( 05 )
//         }
//         callback();
//     }
// });
//
// process.stdin
//     .pipe(upperCaseTr)
//     .pipe(numberFreeTr)
//     .pipe(process.stdout);
//
// (04 - 3)
// const {Transform} = require('stream');
//
// const numberFirstUpTr = new Transform({
//     transform(chunk, encoding, callback) {
//         const str = chunk.toString().replace(/[0-9]/g, '');
//         this.push(str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());
//         callback();
//     }
// });
//
// process.stdin
//     .pipe(numberFirstUpTr)
//     .pipe(process.stdout);

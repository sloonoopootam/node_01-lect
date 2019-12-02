/* TODO:
** 1) Write a file for 10,000 strings
** 2) Read it bit by bit in the stream
** 3) Создать поток, который будет дописывать файл
** 4) Трансформ потока, один на апперкейз вводимых данных,
**      next one - to delete numbers,
**      next - to update the text, the first letter should be up case, other characters - lower case
** 5) Создайте поток внутри второго трансформа в котором вы будете записывать удаленные цифры
**      в отдельный файл также потоком и дополнительно новые данные, дату внесения, имя, фамилию и звание.
 */

// (01)
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
// (02)
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
// (03)
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
// (04 - 1)
// const {Transform} = require('stream');
//
// const upperCaseTr = new Transform({
//     transform(chunk, encoding, callback) {
//         this.push(chunk.toString().toUpperCase());
//         callback();
//     }
// });
//
// process.stdin
//     .pipe(upperCaseTr)
//     .pipe(process.stdout);
//
// (04 - 2)
// const {Transform} = require('stream');
//
// const numberFreeTr = new Transform({
//     transform(chunk, encoding, callback) {
//         this.push(chunk.toString().replace(/[0-9]/g, ''));
//         callback();
//     }
// });
//
// process.stdin
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

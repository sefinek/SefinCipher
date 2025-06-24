const SefinCipher = require('../index.js');

const originalText = 'AbCdEfGhIjKlMnOpQrStUvWxYz Hello World! AbCdEfGhIjKlMnOpQrStUvWxYz';
console.log(`originalText: ${originalText}\n`);

const encodedText = SefinCipher.sef3.encode(originalText);
console.log(`sef3.encode() ${encodedText}\n`);

const decodedText = SefinCipher.sef3.decode(encodedText);
console.log(`sef3.decode() ${decodedText}`);
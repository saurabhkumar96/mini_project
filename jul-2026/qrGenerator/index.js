const QRCode = require('qrcode');

QRCode.toFile('qrcode.png', 'https://google.com', (err) => {
    if (err) throw err;
    console.log('QR code saved!');
});
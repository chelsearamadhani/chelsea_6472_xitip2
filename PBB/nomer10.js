const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    const kalimatCharat = kalimat.charAt(kalimat.length -1)
    console.log(`karakter terakhirnya adalah : ${kalimatCharat}`);
    rl.close();
});


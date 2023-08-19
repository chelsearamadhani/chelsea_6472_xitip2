const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    // gunakan method touppercase untuk mengubah kalimat menjadi huruf besar 
    const kalimatUppercase = kalimat.toUpperCase();
    console.log(`Kalimat dalam huruf besar: ${kalimatUppercase}`);
    rl.close();
});
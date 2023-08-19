const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    // gunakan method trim untuk menghapus spasi di awal dan akhir kalimat
    const kalimatTrimmed = kalimat.trim();
    console.log(`Kalimat serelah di trim: ${kalimatTrimmed}`);
    rl.close();
});
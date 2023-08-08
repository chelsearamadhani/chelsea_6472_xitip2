const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Masukkan sebuah kalimat: ",(kalimat) => {
    rl.question("Masukkan indeks awal: ", (startIndex) => {
        rl.question("Masukkan indeks akhir: ", (endIndex) => {
            // konvevrsi nilai index ke tipe number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // gunakan method substring untuk mengambil substring dari startindex
            const substringResult = kalimat.substring(startIndex, endIndex);
            console.log(`Hasil substring dari indeks ${startIndex} hingga: ${substringResult}`);
            rl.close()
        });
    });
});
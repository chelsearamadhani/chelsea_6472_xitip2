const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Masukkan indeks awal: ", (startIndex) => {
    rl.question("Masukkan indeks awal: ", (endIndex) => {
        rl.question("Masukkan panjang substring:", (length) => {
            // konversi nilai indeks ke tipe number
            startIndex = Number(startIndex);
            length = Number(length);
            // gunakan method slice untuk mengambil substring dari startIndex hingga endIndex
            const sliceSubstring = startIndex.slice(startIndex, length);
            console.log(`Hasil slice dari indeks ${startIndex} dengan panjang ${length}: ${sliceSubstring}`);
            rl.close();
        });
    });
});
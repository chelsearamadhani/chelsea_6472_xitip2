const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Masukkan sebuah string: ", (inputString) => {
    // contoh property length
    console.log(`jumlah karakter: ${inputString.length}`);
    rl.close();
});
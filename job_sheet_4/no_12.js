const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Tuliskan nama anda: ", (kalimat1) => {
    console.log(`Welcome ${kalimat1}`);
    rl.close();
    });
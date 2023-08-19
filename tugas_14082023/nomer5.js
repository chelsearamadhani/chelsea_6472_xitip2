const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Nama depan: ", (kalimat1) => {
    rl.question("Nama Belakang: ", (kalimat2) => {
        console.log(`Nama depan: ${kalimat1} Nama belakang: ${kalimat2}`);
        rl.close();
    });
});
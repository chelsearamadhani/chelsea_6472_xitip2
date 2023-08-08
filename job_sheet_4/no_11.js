const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Warna favorite saya adalah: ", (kalimat1) => {
    console.log(`Warna favorite saya adalah ${kalimat1}`);
    rl.close();
    });

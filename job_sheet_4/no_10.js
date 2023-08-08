const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Makanan favorite saya adalah: ", (kalimat1) => {
    console.log(`Makanan favorite saya adalah ${kalimat1}`);
    rl.close();
    });

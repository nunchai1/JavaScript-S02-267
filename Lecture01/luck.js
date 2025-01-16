const { log } = require("console");

function yayOrNay() {
    return new Promise((resolve, rejects) => {
        const val = Math.round(Math.random() * 1);
        val ? resolve("Lucky!!") : rejects("nope 🥺");
    });
}

async function msg() {
    try {
        const msg = await yayOrNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}


msg(); // Nope 🥺
msg(); // Lucky!!
msg(); // Nope 🥺
msg(); // Nope 🥺
msg(); // Lucky!!
msg(); // Nope 🥺
msg(); // Nope 🥺
msg(); // Nope 🥺
msg(); // Nope 🥺
msg(); // Nope 🥺
msg(); // Nope 🥺
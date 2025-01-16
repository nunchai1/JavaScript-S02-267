function promiseTimeout(ms) {
    return new Promise((resolve, rejects) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log("Start!!");
    await promiseTimeout(2000);
    console.log("Stop!!");
}
run();
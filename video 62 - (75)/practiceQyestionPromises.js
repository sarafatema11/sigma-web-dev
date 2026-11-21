console.log("This is 6 Promises APIs");

// PROMISE 1
let prom1 = new Promise((resolve, reject) => {
    let a = 0.8;

    if (a < 0.5) {
        reject("Promise 1 Failed");
    } else {
        setTimeout(() => {
            console.log("Yes I am done 1");
            resolve("Harry 1");
        }, 3000);
    }
});

// PROMISE 2
let prom2 = new Promise((resolve, reject) => {
    let a = 0.8;

    if (a < 0.5) {
        reject("Promise 2 Failed");
    } else {
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("Harry 2");
        }, 1000);
    }
});

// PROMISE 3
let prom3 = new Promise((resolve, reject) => {
    let a = 0.8;

    if (a < 0.5) {
        reject("Promise 3 Failed");
    } else {
        setTimeout(() => {
            console.log("Yes I am done 3");
            resolve("Harry 3");
        }, 2000);
    }
});

// PROMISE 4
let prom4 = new Promise((resolve, reject) => {
    let a = 0.8;

    if (a < 0.5) {
        reject("Promise 4 Failed");
    } else {
        setTimeout(() => {
            console.log("Yes I am done 4");
            resolve("Harry 4");
        }, 4000);
    }
});

// PROMISE 5
let prom5 = new Promise((resolve, reject) => {
    let a = 0.8;

    if (a < 0.5) {
        reject("Promise 5 Failed");
    } else {
        setTimeout(() => {
            console.log("Yes I am done 5");
            resolve("Harry 5");
        }, 5000);
    }
});

// PROMISE 6
let prom6 = new Promise((resolve, reject) => {
    let a = 0.8;

    if (a < 0.5) {
        reject("Promise 6 Failed");
    } else {
        setTimeout(() => {
            console.log("Yes I am done 6");
            resolve("Harry 6");
        }, 6000);
    }
});


// 1. PROMISE.ALL()

Promise.all([prom1, prom2, prom3, prom4, prom5, prom6])
    .then((result) => {
        console.log("PROMISE ALL:", result);
    })
    .catch((err) => {
        console.log("PROMISE ALL ERROR:", err);
    });


// 2. PROMISE.ALLSETTLED()

Promise.allSettled([prom1, prom2, prom3, prom4, prom5, prom6])
    .then((result) => {
        console.log("PROMISE ALLSETTLED:", result);
    });


// 3. PROMISE.RACE()

Promise.race([prom1, prom2, prom3, prom4, prom5, prom6])
    .then((result) => {
        console.log("PROMISE RACE:", result);
    })
    .catch((err) => {
        console.log("PROMISE RACE ERROR:", err);
    });


// 4. PROMISE.ANY()

Promise.any([prom1, prom2, prom3, prom4, prom5, prom6])
    .then((result) => {
        console.log("PROMISE ANY:", result);
    })
    .catch((err) => {
        console.log("PROMISE ANY ERROR:", err);
    });


// 5. PROMISE.RESOLVE()

Promise.resolve("Hello Harry")
    .then((result) => {
        console.log("PROMISE RESOLVE:", result);
    });


// 6. PROMISE.REJECT()

Promise.reject("Something went wrong")
    .catch((err) => {
        console.log("PROMISE REJECT:", err);
    });
    
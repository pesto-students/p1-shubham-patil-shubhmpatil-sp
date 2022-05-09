function PromiseResolver() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

const generator = (function* () {
    // generate integer value 1 and 2
    for (let i = 1; i < 3; i++) {
        yield i;
    }
})();

async function async_call() {
    return [await PromiseResolver(), generator.next(), generator.next(), generator.next()]
}

async_call()
    .then((value) => {
        console.log("resolve :", value)
    })
    .catch((err) => {
        console.log("Error : ", err)
    })
    .finally(() => {
        console.log("finally")
    })


/*
Output :

resolve : [
'resolved',
{ value: 1, done: false },
{ value: 2, done: false },
{ value: undefined, done: true }
]
finally
*/
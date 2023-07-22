// ------------------------------------
// Async

console.log('-=-=-=-=-=-=-=-=Async=-=-=-=-=-=-=-=-')

// Asynchrony is implemented using Event loop

const timeout = setTimeout(() => {
    console.log('after 2 seconds')
}, 2000)
// Since it cleared before the first call, 
// it won't be called.
clearInterval(timeout)


// Promises

const delayOk = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, time)
    })
    return promise
}

const delayErr = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error in delay')
        }, time)
    })
    return promise
}

// chaining
delayOk(2500)
.then((data) => {
    console.log(`Promise return next data: ${data}`)
    return data.map((num) => (num + 1) ** 2)
})
.then((data) => {
    console.log(`Next iteration data: ${data}`)
})
.finally(() => console.log('Exactly displayed'))

delayErr(3000)
.then((data) => {
    console.log(`Promise return next data: ${data}`)
    return data.map((num) => (num + 1) ** 2)
})
.catch((err) => {
    // Error Handling
    console.log(err)
})


const getData = () => new Promise((resolve, reject) => resolve([1, 2, 3]))

// await working only in async functions
async function asyncExample() {
    try {
        await delayOk(1500)
        // await using with Promises
        const data = await getData()
        console.log(data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Exactly displayed')
    }
}

asyncExample()
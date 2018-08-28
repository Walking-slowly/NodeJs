// let sleep = (timeout, cb) => {
//     setTimeout(() => {
//        cb('ok') 
//     }, timeout);
// }

// sleep(3000, (r) => {
//     console.log(r)
// })

let sleep = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok') 
        }, timeout);
    })
}

// for(var i = 1; i <=3; i++){
//     console.log(`第${i}次`);
//     sleep(1000).then((r) => {
//         console.log(r);
//     })
// }

let start = async () => {
    for(var i = 1; i <= 3; i++){
        console.log(`第${i}次`);
        let r = await sleep(1000);
        console.log(r);
    }
}

start();

// sleep(3000).then((r) => {
//     console.log(r);
// })

// let start = async () => {
//     let r = await sleep(5000)
//     console.log(r);
// }

// start();
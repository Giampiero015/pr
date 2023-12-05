function callback_BasedFunction(arg1, arg2) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const result = arg1 + arg2;
            if (result % 2 !== 0) {
                resolve (result);
            } else {
                reject('Result is not odd!');
            }
        }, 1000);
    });
}
callback_BasedFunction(2,2).then((ok)=>{console.log(ok)})
                            .catch((err)=>{console.log(err)});
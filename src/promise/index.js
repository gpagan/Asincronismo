const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('Whooops');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const somethingWillHappen2 = () => {
        return new Promise((resolve, reject) => {
            if(true) {
                setTimeout(() => {
                    resolve('Hey! True');
                }, 3000);
            
            } else {
                const error = new Error('Whooops');
                reject(error);
            }
        });
    };


    somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    Promise.all([somethingWillHappen(), somethingWillHappen2()])
        .then(response => {
            console.log('Array of result', response);
        })
        .catch(err => {
            console.error(err);
        })
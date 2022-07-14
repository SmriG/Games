// Promise is a class which accepts a function which takes two arguments: resolve and reject.

let myPromise = new Promise(function(resolve, reject){
    const done = false;
    if(done){
        let what = "This promise is successful";
        resolve(what);
    }else{
        let why = "This promise is rejected";
        reject(why);
    }

});

myPromise.then(result=>console.log(result))
.catch(err=>console.log(err))

const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: 'rejected',
    PENDING: 'pending',
};

class MyPromise {
    #thenCbs = []; // There can be many .then method on a prmoise.
    #state;
    #value;
    constructor(cb){
        try {
            cs(this.#onSuccess, this.#onFail)
        } catch (error) {
            this.onFail(error)
        }
    }
    #onSuccess(value){ //resolve method
        this.#value = value;
        this.#state = STATE.FULFILLED;

    }
    #onFail(value){ //reject method

    }
    then(cb){
        this.#thenCbs.push(cb)
    }

}

export default MyPromise;

new Promise(cb)
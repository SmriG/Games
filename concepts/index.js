const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};

class MyPromise {
  #thenCbs = []; // There can be many .then method on a prmoise.
  #catchCbs = [];
  #state;
  #value;
  constructor(cb) {
    try {
      cs(this.#onSuccess, this.#onFail);
    } catch (error) {
      this.onFail(error);
    }
  }
  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCbs.forEach((callback) => {
        callback(this.#value);
      });
      this.#thenCbs = [];
    }
    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach((callback) => {
        callback(this.#value);
      });
      this.#catchCbs = [];
    }
  }
  #onSuccess(value) {
    //resolve method
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#runCallbacks();
  }
  #onFail(value) {
    //reject method
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.REJECTED;
    this.#runCallbacks();
  }
  then(thenCb, catchCb) { // then has to handle both the fulfilled and rejected state because on then we can pass two handlers.
    if (thenCb != null) this.#thenCbs.push(thenCb);
    if (catchCb != null) this.#catchCbs.push(catchCb);

    this.#runCallbacks();
  }
  catch(cb) {
    this.then(undefined, cb);
  }
  finally(cb) {}
}

export default MyPromise;

new Promise(cb);

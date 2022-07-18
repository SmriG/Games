const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};
// CHAINING
class MyPromise {
  #thenCbs = []; // There can be many .then method on a prmoise.
  #catchCbs = [];
  #state;
  #value;
  #onSuccessBind = this.#onSuccess.bind(this);
  #onFailBind = this.#onFail.bind(this);
  constructor(cb) {
    try {
      cb(this.#onSuccessBind, this.#onFailBind);
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
    if (value instanceof MyPromise) {
      value.then(this.#onSuccessBind, this.#onFailBind);
      return;
    }
    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#runCallbacks();
  }
  #onFail(value) {
    //reject method
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      this.#value = value;
      this.#state = STATE.REJECTED;
      this.#runCallbacks();
    });
  }
  then(thenCb, catchCb) {
    // then has to handle both the fulfilled and rejected state because on then we can pass two handlers.
    return new MyPromise((resolve, reject) => {
      this.#thenCbs.push((result) => {
        if (thenCb == null) {
          resolve(result);
          return;
        }
        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });
      this.#catchCbs.push((result) => {
        if (catchCb == null) {
          reject(result);
          return;
        }
        try {
          resolve(catchCb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#runCallbacks();
    });
  }
  catch(cb) {
    this.then(undefined, cb);
  }
  finally(cb) {}
}

export default MyPromise;

new Promise(cb);

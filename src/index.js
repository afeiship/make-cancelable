(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  // https://github.com/facebook/react/issues/5465
  // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html

  nx.makeCancelable = function (inPromise) {
    var hasCanceled_ = false;
    var wrappedPromise = new Promise((resolve, reject) => {
      inPromise.then((val) => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)));
      inPromise.catch((error) => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error)));
    });

    return {
      promise: wrappedPromise,
      cancel: function () {
        hasCanceled_ = true;
      }
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.makeCancelable;
  }
})();

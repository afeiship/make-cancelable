(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.makeCancelable should works.', function (done) {
      const somePromise = new Promise((r) => setTimeout(r, 1000));
      const cancelable = nx.makeCancelable(somePromise);

      let status = null;

      cancelable.promise
        .then(() => {
          status = 'resolved';
          console.log('resolved');
        })
        .catch(({ isCanceled, ...error }) => {
          status = 'canceled';
          console.log('isCanceled', isCanceled);
        })
        .finally(() => {
          expect(status).toBe('canceled');
          done();
        });

      // Cancel promise
      cancelable.cancel();

    });
  });
})();

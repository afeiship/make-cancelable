# next-make-cancelable
> Make promise cancelable for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-make-cancelable
```

## usage
```js
import '@jswork/next-make-cancelable';

const somePromise = new Promise(r => setTimeout(r, 1000));
const cancelable = nx.makeCancelable(somePromise);

cancelable
  .promise
  .then(() => console.log('resolved'))
  .catch(({isCanceled, ...error}) => console.log('isCanceled', isCanceled));

// Cancel promise
cancelable.cancel();
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-make-cancelable/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-make-cancelable
[version-url]: https://npmjs.org/package/@jswork/next-make-cancelable

[license-image]: https://img.shields.io/npm/l/@jswork/next-make-cancelable
[license-url]: https://github.com/afeiship/next-make-cancelable/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-make-cancelable
[size-url]: https://github.com/afeiship/next-make-cancelable/blob/master/dist/next-make-cancelable.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-make-cancelable
[download-url]: https://www.npmjs.com/package/@jswork/next-make-cancelable

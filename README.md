Init jQuery
===================

Init jQuery on any Window object (NodeJS, JSDOM)

----------

Installation
-------------

```bash
npm i --save init-jquery
```

Usage
-------------------

Create an array of integers:

```javascript
const fromTenToTwenty = createRange(10, 20);
// [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const minusPlusFifty = createRange(-50, 50);
// [-50, -49, ... , 49, 50]
```

Returns an array. Always. Never throws any errors. Browser compatible.

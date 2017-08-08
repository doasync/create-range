Create range
===================

Creates an array of integers from start up to end. Always returns an array. Never throws any errors.

----------

Installation
-------------

```bash
npm i --save create-range
```

Usage
-------------------

Create an array of integers:

```javascript
const fromTenToTwenty = createRange(10, 20);
// [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const minusPlusFifty = createRange(-50, 50);
// [-50, -49, ... , 49, 50]

const x = createRange(-Infinity, undefined);
// []
```

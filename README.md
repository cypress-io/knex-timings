# knex-timings

> Prints each Knex operation and its timings

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]

## Install

Requires [Node](https://nodejs.org/en/) version 6 or above.

```sh
npm install --save knex-timings
```

## Use

Imagine you get your [knex](https://knexjs.org/) instance somehow. Then pass it to `knex-timings` function if you want to see timings and calls.

```js
const knex = Knex(knexConfig)
if (DEBUG) {
  // you probably want to see timings only in some situations
  const knexTimings = require('knex-timings')
  knexTimings(knex)
}
```

Then your server will print something like this

```text
Example app listening at port 8641
  - (1ms)  { select `persons`.* from `persons` order by `firstName` asc } []
GET /persons 200 30.140 ms - 2
```

### Small print

Author: [Cypress.io](https://www.cypress.io) &copy; 2018

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/cypress-io/knex-timings/issues) on Github

## MIT License

Copyright (c) 2018 Cypress.io

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/knex-timings.svg?downloads=true
[npm-url]: https://npmjs.org/package/knex-timings
[ci-image]: https://circleci.com/gh/cypress-io/knex-timings.svg?style=svg
[ci-url]: https://circleci.com/gh/cypress-io/knex-timings
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

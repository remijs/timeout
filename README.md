# remi-timeout

Registration timeout hook for remi

[![Dependency Status](https://david-dm.org/remijs/remi-timeout/status.svg?style=flat)](https://david-dm.org/remijs/remi-timeout)
[![Build Status](https://travis-ci.org/remijs/remi-timeout.svg?branch=master)](https://travis-ci.org/remijs/remi-timeout)
[![npm version](https://badge.fury.io/js/remi-timeout.svg)](http://badge.fury.io/js/remi-timeout)
[![Coverage Status](https://coveralls.io/repos/remijs/remi-timeout/badge.svg?branch=master&service=github)](https://coveralls.io/github/remijs/remi-timeout?branch=master)


## Installation

``` sh
npm install remi-timeout
```


## Example Usage

``` js
const remi = require('remi')
const remiTimeout = require('remi-timeout')

let registrator = remi({})

registrator.hook(remiTimeout(1000))

// this will throw a timeout error because 'plugin' never finishes registration
registrator.register().catch(err => console.error(err))

function plugin(app, opts, next) {
  // next is never called
}

plugin.attributes = { name: 'plugin' }
```


## License

MIT © [Zoltan Kochan](https://github.com/zkochan)

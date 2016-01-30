# remi-timeout

Registration timeout hook for remi

[![Dependency Status](https://david-dm.org/remijs/timeout/status.svg?style=flat)](https://david-dm.org/remijs/timeout)
[![Build Status](https://travis-ci.org/remijs/timeout.svg?branch=master)](https://travis-ci.org/remijs/timeout)
[![npm version](https://badge.fury.io/js/remi-timeout.svg)](http://badge.fury.io/js/remi-timeout)
[![Coverage Status](https://coveralls.io/repos/remijs/timeout/badge.svg?branch=master&service=github)](https://coveralls.io/github/remijs/timeout?branch=master)


## Installation

This module is installed via npm:

``` bash
$ npm install remi-timeout
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

MIT

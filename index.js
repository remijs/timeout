'use strict'
const kamikaze = require('kamikaze')

module.exports = timeout =>
  (next, app, plugin, cb) => next(app, plugin, kamikaze(timeout, cb))

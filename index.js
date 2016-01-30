'use strict'
const kamikaze = require('kamikaze')

module.exports = function(timeout) {
  return (next, app, plugin, cb) => next(app, plugin, kamikaze(timeout, cb))
}

'use strict'
const expect = require('chai').expect
const remi = require('remi')
const remiTimeout = require('..')
const plugiator = require('plugiator')

describe('remi-timeout', function() {
  let registrator

  beforeEach(() => {
    registrator = remi({})
  })

  it('should throw error if one the plugins didn\'t finished registering in time', function(done) {
    registrator.hook(remiTimeout(10))

    registrator
      .register({
        register: plugiator.anonymous((server, opts, next) => undefined),
      })
      .catch(err => {
        expect(err).to.be.an.instanceof(Error)
        done()
      })
  })

  it('should not throw error if plugin finished registering in time', function() {
    registrator.hook(remiTimeout(100))

    return registrator.register({ register: plugiator.noop() })
  })
})

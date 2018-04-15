const assert = require('assert')
const fh     = require('../lib/fileHandler')

/**
 * 
 * File Handler TESTS
 * 
 */

 describe('File Handler', function() {

  describe('writeToDatafile', function() {
    it('Returns boolean', function() {
      assert(
        Boolean,
        typeof(fh.writeToDatafile())
      )
    })
  })

  describe('readDataFile', function() {
    it('Returns null', function() {
      assert.equal(fh.readDataFile(), null)
    })
  })

 })
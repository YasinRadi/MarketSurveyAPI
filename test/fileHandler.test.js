const assert = require('assert')
const fh     = require('../lib/fileHandler')
const testPath = "../db/testWriteFile.json"

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
        typeof(fh.writeToDatafile(null, testPath))
      )
    })

    it('Returns false', function() {
      assert.equal(fh.writeToDatafile(null, testPath), false)
    })
  })

  describe('readDataFile', function() {
    it('Returns object', function() {
      assert(
        Object,
        typeof(fh.readDataFile())
      )
    })
  })

 })
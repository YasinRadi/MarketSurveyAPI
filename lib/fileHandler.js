const msController = require('../controllers/marketSurveyController')
const SurveyContainer = require('../models/surveyContainer')
const fs = require('fs')
const DATA_FILE_PATH = './db/dataFile.json'
const ENCODING = 'utf-8'


class FileHandler {

  /**
   * Writes the object data in json format to a data file.
   * @param {String}          path 
   * @param {SurveyContainer} dataObject 
   */
  static writeToDatafile(dataObject) {
    const jsonData =  JSON.stringify(dataObject, null, 2)
    try {
      fs.writeFileSync(DATA_FILE_PATH, jsonData);
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  static readDataFile() {
    let data = null
    try {
      data = fs.readFileSync(DATA_FILE_PATH, ENCODING);
    } catch(err) {
      console.log(err)
    }

    return JSON.parse(data)
  }
}

module.exports = FileHandler
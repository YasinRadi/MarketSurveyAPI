const msController = require('../controllers/marketSurveyController')
const SurveyContainer = require('../models/surveyContainer')
const fs = require('fs')
const DATA_FILE_PATH = './db/dataFile.json'
const ENCODING = 'utf-8'


class FileHandler {

  /**
   * Writes the object data in json format to a data file.
   * @param {String}          filePath 
   * @param {SurveyContainer} dataObject 
   */
  static writeToDatafile(dataObject, filePath) {
    const path = filePath || DATA_FILE_PATH
    const jsonData =  JSON.stringify(dataObject, null, 2)
    try {
      fs.writeFileSync(path, jsonData);
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  /**
   * Reads data file and returns the data parsed as JSON object.
   * @return {Object}
   */
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
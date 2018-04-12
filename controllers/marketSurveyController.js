const SurveyModel = require('../models/marketSurvey.js')
const Model = new SurveyModel()

class MarketSurveyController {
  constructor() {
    this._data  = {}
    init()
  }

  /**
   * Public properties
   */
  get model() {
    return Model
  }

  get data() {
    return this._data
  }

  set data(data) {
    this._data = data
  }

  /**
   * Initialize the data structure using the survey model.
   */
  init() {
    this.data = Model
  }

  /**
   * Save the survey data into the surveys file.
   */
  saveData() {

  }
}

module.exports = MarketSurveyController
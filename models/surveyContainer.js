
class SurveyContainer {
  constructor() { 
    this._surveys = []
  }

  /**
   * Public properties.
   */
  get surveys() {
    return this._surveys
  }

  set surveys(surveys) {
    this._surveys = surveys
  }
}

module.exports = SurveyContainer
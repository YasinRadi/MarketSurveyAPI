
/**
 * Base model for Market Surveys content.
 */
class SurveyContentModel {
  constructor() {
    this._subject = []
    this._target  = {
      gender: [],
      age: [],
      income: {
        currency: [],
        value: []
      }
    }
    this._country = []
  }

  /**
   * Public properties.
   */
  get subject() {
    return this._subject
  }

  set subject(subject) {
    this._subject = subject
  }

  get target() {
    return this._target
  }

  set target(target) {
    this._target = target
  }

  get country() {
    return this._country
  }

  set country(country) {
    this._country = country
  }
}

module.exports = SurveyContentModel
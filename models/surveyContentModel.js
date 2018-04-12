
/**
 * Base model for Market Surveys content.
 */
class SurveyContentModel {
  constructor() {
    this.subject = []
    this.target  = {
      gender: [],
      age: [],
      income: {
        currency: [],
        value: []
      }
    }
    this.country = []
  }
}

module.exports = SurveyContentModel
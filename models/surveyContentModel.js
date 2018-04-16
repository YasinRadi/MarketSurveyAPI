
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

  /**
   * Converts raw data into SurveyContentModel Object.
   * @param   {*} data 
   * @return  {SurveyContentModel}
   */
  static construct(data) {
    const obj = new SurveyContentModel()
    obj.subject = data.subject
    obj.target.gender = data.target.gender
    obj.target.age = data.target.age
    obj.target.income.currency = data.target.income.currency
    obj.target.income.value = data.target.income.value
    obj.country = data.country

    return obj
  }
}

module.exports = SurveyContentModel
const SurveyContainer = require('../models/surveyContainer')
const LOADED_SURVEYS  = new SurveyContainer()


class MarketSurveyController {

  /**
   * Filters the available surveys to fit user's request.
   * @param   {MarketSurveyModel[]}  surveys 
   * @param   {MarketSurveyModel}    surveyRequest 
   * @returns {MarketSurveyModel[]}  filteredSurveys
   */
  static filterSurveys(surveys, surveyRequest) {
    const inner = MarketSurveyController
    return surveys
            .filter(s => inner.filterSurveyBySubject(s, surveyRequest))
            .filter(s => inner.filterSurveyByGender(s, surveyRequest))
            .filter(s => inner.filterSurveyByAge(s, surveyRequest))
            .filter(s => inner.filterSurveyByCurrency(s, surveyRequest))
            .filter(s => inner.filterSurveyByIncome(s, surveyRequest))
            .filter(s => inner.filterSurveyByCountry(s, surveyRequest))
            .filter(s => inner.filterSurveyByFrequency(s, surveyRequest))
            .filter(s => inner.filterSurveyByChannel(s, surveyRequest))
  }

  /**
   * Returns true if the survey checked belongs to one of the requested subjects.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurveyModel} survey 
   * @param   {MarketSurveyModel} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyBySubject(survey, surveyRequest) {
    if(!surveyRequest.getSubject()) return true
    survey.getSubject().some(
      s => surveyRequest.getSubject().includes(s)
    )
  }

  /**
   * Returns true if the survey checked belongs to one of the specified genders.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurveyModel} survey 
   * @param   {MarketSurveyModel} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByGender(survey, surveyRequest) {
    if(!surveyRequest.getGender()) return true
    survey.getGender().some(
      s => surveyRequest.getGender().includes(s)
    )
  }
  
  /**
   * Returns true if the survey checked belongs to the specified age range.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurveyModel} survey 
   * @param   {MarketSurveyModel} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByAge(survey, surveyRequest) {
    if(!surveyRequest.getAge()) return true
    if(surveyRequest.getAge().length < 2) {
      return survey.getAge()[0] == surveyRequest.getAge()[0]
    } else {
      return (
        survey.getAge()[0] >= surveyRequest.getAge()[0]
        && survey.getAge()[0] <= surveyRequest.getAge()[1]
      )
    }
  }

  /**
   * Returns true if the survey checked belongs to one of the specified currencies.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurveyModel} survey 
   * @param   {MarketSurveyModel} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByCurrency(survey, surveyRequest) {
    if(!surveyRequest.getCurrency()) return true
    survey.getCurrency().some(
      s => survey.getCurrency().includes(s)
    )
  }

  /**
   * Returns true if the survey checked belongs to the specified income range.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurveyModel} survey 
   * @param   {MarketSurveyModel} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByIncome(survey, surveyRequest) {
    if(!surveyRequest.getIncome()) return true
    if(surveyRequest.getIncome().length < 2) {
      return survey.getIncome()[0] == surveyRequest.getIncome()[0]
    } else {
      return (
        survey.getIncome()[0] >= surveyRequest.getIncome()[0]
        && survey.getIncome()[0] <= surveyRequest.getIncome()[1]
      )
    }
  }

  /**
   * Returns true if the survey checked belongs to one of the specified countries.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurveyModel} survey 
   * @param   {MarketSurveyModel} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByCountry(survey, surveyRequest) {
    if(!surveyRequest.getCountry()) return true
    survey.getCountry().some(
      s => survey.getCountry().includes(s)
    )
  }

  /**
   * Returns true if the survey checked belongs to one of the specified frequencies.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurveyModel} survey 
   * @param   {MarketSurveyModel} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByFrequency(survey, surveyRequest) {
    if(!surveyRequest.getFrequency()) return true
    survey.getFrequency().some(
      s => survey.getFrequency().includes(s)
    )
  }

  /**
   * Returns true if the survey checked belongs to one of the specified channels.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurveyModel} survey 
   * @param   {MarketSurveyModel} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByChannel(survey, surveyRequest) {
    if(!surveyRequest.getChannel()) return true
    survey.getChannel().some(
      s => survey.getChannel().includes(s)
    )
  }

  /**
   * 
   */
  static surveyList() {
    return LOADED_SURVEYS.surveys
  }

  /**
   * Save the survey data into the surveys file.
   */
  static saveData() {
    // TODO
  }

  /**
   * Load the available survey data from the surveys file.
   * @param {MarketSurveyModel[]} surveyList 
   */
  static loadData(surveyList) {
    // TODO

    return surveyList
  }
}

module.exports = MarketSurveyController
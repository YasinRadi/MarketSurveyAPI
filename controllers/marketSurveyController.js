const MarketSurveyModel = require('../models/marketSurveyModel')

class MarketSurveyController {

  /**
   * Filters the available surveys to fit user's request.
   * @param   {MarketSurvey[]}  surveys 
   * @param   {MarketSurvey}    surveyRequest 
   * @returns {MarketSurvey[]}  filteredSurveys
   */
  static filterSurveys(surveys, surveyRequest) {
    return surveys
            .filter(s => MarketSurveyController.filterSurveyBySubject(s, surveyRequest))
            .filter(s => MarketSurveyController.filterSurveyByGender(s, surveyRequest))
            .filter(s => MarketSurveyController.filterSurveyByAge(s, surveyRequest))
            .filter(s => MarketSurveyController.filterSurveyByCurrency(s, surveyRequest))
            .filter(s => MarketSurveyController.filterSurveyByIncome(s, surveyRequest))
            .filter(s => MarketSurveyController.filterSurveyByCountry(s, surveyRequest))
            .filter(s => MarketSurveyController.filterSurveyByFrequency(s, surveyRequest))
            .filter(s => MarketSurveyController.filterSurveyByChannel(s, surveyRequest))
  }

  /**
   * Returns true if the survey checked belongs to one of the requested subjects.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurvey} survey 
   * @param   {MarketSurvey} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyBySubject(survey, surveyRequest) {
    if(!surveyRequest.content.survey.subject) return true
    survey.content.survey.subject.some(
      s => surveyRequest.content.survey.subject.includes(s)
    )
  }

  /**
   * Returns true if the survey checked belongs to one of the specified genders.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurvey} survey 
   * @param   {MarketSurvey} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByGender(survey, surveyRequest) {
    if(!surveyRequest.content.survey.target.gender) return true
    survey.content.survey.target.gender.some(
      s => surveyRequest.content.survey.target.gender.includes(s)
    )
  }
  
  /**
   * Returns true if the survey checked belongs to the specified age range.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurvey} survey 
   * @param   {MarketSurvey} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByAge(survey, surveyRequest) {
    if(!surveyRequest.content.survey.target.age) return true
    if(surveyRequest.content.survey.target.age.length < 2) {
      return survey.content.survey.target.age[0] == surveyRequest.content.survey.target.age[0]
    } else {
      return (
        survey.content.survey.target.age[0] >= surveyRequest.content.survey.target.age[0]
        && survey.content.survey.target.age[0] <= surveyRequest.content.survey.target.age[1]
      )
    }
  }

  /**
   * Returns true if the survey checked belongs to one of the specified currencies.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurvey} survey 
   * @param   {MarketSurvey} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByCurrency(survey, surveyRequest) {
    if(!surveyRequest.content.survey.target.income.currency) return true
    survey.content.survey.target.income.currency.some(
      s => survey.content.survey.target.income.currency.includes(s)
    )
  }

  /**
   * Returns true if the survey checked belongs to the specified income range.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurvey} survey 
   * @param   {MarketSurvey} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByIncome(survey, surveyRequest) {
    if(!surveyRequest.content.survey.target.income.value) return true
    if(surveyRequest.content.survey.target.income.value.length < 2) {
      return survey.content.survey.target.income.value[0] == surveyRequest.content.survey.target.income.value[0]
    } else {
      return (
        survey.content.survey.target.income.value[0] >= surveyRequest.content.survey.target.income.value[0]
        && survey.content.survey.target.income.value[0] <= surveyRequest.content.survey.target.income.value[1]
      )
    }
  }

  /**
   * Returns true if the survey checked belongs to one of the specified countries.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurvey} survey 
   * @param   {MarketSurvey} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByCountry(survey, surveyRequest) {
    if(!surveyRequest.content.survey.country) return true
    survey.content.survey.country.some(
      s => survey.content.survey.country.includes(s)
    )
  }

  /**
   * Returns true if the survey checked belongs to one of the specified frequencies.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurvey} survey 
   * @param   {MarketSurvey} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByFrequency(survey, surveyRequest) {
    if(!surveyRequest.content.subscription.frequency) return true
    survey.content.subscription.frequency.some(
      s => survey.content.subscription.frequency.includes(s)
    )
  }

  /**
   * Returns true if the survey checked belongs to one of the specified channels.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurvey} survey 
   * @param   {MarketSurvey} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyByChannel(survey, surveyRequest) {
    if(!surveyRequest.content.subscription.channel) return true
    survey.content.subscription.channel.some(
      s => survey.content.subscription.channel.includes(s)
    )
  }

  /**
   * Save the survey data into the surveys file.
   */
  static saveData() {
    // TODO
  }
}

module.exports = MarketSurveyController
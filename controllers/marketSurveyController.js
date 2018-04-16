const SurveyContainer   = require('../models/surveyContainer')
const MarketSurveyModel = require('../models/marketSurveyModel')
const ProviderModel     = require('../models/providerModel')
const RequesterModel    = require('../models/requesterModel')
const SubscriptionModel = require('../models/subscriptionModel')
const SurveyContentModel = require('../models/surveyContentModel')
const fh = require('../lib/fileHandler')
let LOADED_SURVEYS  = new SurveyContainer()

class MarketSurveyController {

  
  /**
   * Filters the available surveys to fit user's request.
   * @param   {MarketSurveyModel[]}  surveys 
   * @param   {MarketSurveyModel}    surveyRequest 
   * @returns {MarketSurveyModel[]}  filteredSurveys
   */
  static filterSurveys(surveys, surveyRequest) {
    const i = MarketSurveyController,
    it = MarketSurveyModel
    return surveys
            .filter(s => i.filterSurveyBySubject(s, surveyRequest))
            .filter(s => i.filterSurveyByGender(s, surveyRequest))
            .filter(s => i.filterSurveyByAge(s, surveyRequest))
            .filter(s => i.filterSurveyByCurrency(s, surveyRequest))
            .filter(s => i.filterSurveyByIncome(s, surveyRequest))
            .filter(s => i.filterSurveyByCountry(s, surveyRequest))
            .filter(s => i.filterSurveyByFrequency(s, surveyRequest))
            .filter(s => i.filterSurveyByChannel(s, surveyRequest))
  }

  /**
   * Returns true if the survey checked belongs to one of the requested subjects.
   * Returns true if the requester doesn't need this filter.
   * @param   {MarketSurveyModel} survey 
   * @param   {MarketSurveyModel} surveyRequest 
   * @returns {Boolean}
   */
  static filterSurveyBySubject(survey, surveyRequest) {
    const i = MarketSurveyModel
    if(i.getSubject(surveyRequest).length <= 0) return true
    return i.getSubject(survey).some(
      s => i.getSubject(surveyRequest).includes(s)
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
    const i = MarketSurveyModel
    if(i.getGender(surveyRequest).length <= 0) return true
    return i.getGender(survey).some(
      s => i.getGender(surveyRequest).includes(s)
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
    const i = MarketSurveyModel
    if(i.getAge(surveyRequest).length <= 0) return true
    if(i.getAge(surveyRequest).length < 2) {
      return i.getAge(survey)[0] == i.getAge(surveyRequest)[0]
    } else {
      return (
        i.getAge(survey)[0] >= i.getAge(surveyRequest)[0]
        && i.getAge(survey)[0] <= i.getAge(surveyRequest)[1]
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
    const i = MarketSurveyModel
    if(i.getCurrency(surveyRequest).length <= 0) return true
    return i.getCurrency(survey).some(
      s => i.getCurrency(surveyRequest).includes(s)
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
    const i = MarketSurveyModel
    if(i.getIncome(surveyRequest).length <= 0) return true
    if(i.getIncome(surveyRequest).length < 2) {
      return i.getIncome(survey)[0] == i.getIncome(surveyRequest)[0]
    } else {
      return (
        i.getIncome(survey)[0] >= i.getIncome(surveyRequest)[0]
        && i.getIncome(survey)[0] <= i.getIncome(surveyRequest)[1]
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
    const i = MarketSurveyModel
    if(i.getCountry(surveyRequest).length <= 0) return true
    return i.getCountry(survey).some(
      s => i.getCountry(surveyRequest).includes(s)
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
    const i = MarketSurveyModel
    if(i.getFrequency(surveyRequest).length <= 0) return true
    return i.getFrequency(survey).some(
      s => i.getFrequency(surveyRequest).includes(s)
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
    const i = MarketSurveyModel
    if(i.getChannel(surveyRequest).length <= 0) return true
    return i.getChannel(survey).some(
      s => i.getChannel(surveyRequest).includes(s)
    )
  }

  /**
   * Returns the available survey list.
   * @return {MarketSurveyModel[]}
   */
  static surveyList() {
    return LOADED_SURVEYS.surveys
  }

  /**
   * Save the survey data into the surveys file.
   */
  static saveData(dataObject) {
    fh.writeToDatafile(dataObject)
  }

  /**
   * Load the available survey data from the surveys file.
   * @return {SurveyContainer}
   */
  static loadData() {
    const inner = MarketSurveyController
    LOADED_SURVEYS = inner.dataToObject(fh.readDataFile())
  }

  /**
   * Converts raw parsed data into a typed data objects.
   * @param   {Object} data 
   * @return  {SurveyContainer}
   */
  static dataToObject(data) {
    const container = new SurveyContainer()
    data.surveys.forEach(s => {
      const prv = ProviderModel.construct(s.provider)
      const rqt = RequesterModel.construct(s.requester)
      const cnt = SurveyContentModel.construct(s.survey)
      const scp = SubscriptionModel.construct(s.subscription)
      const mod = new MarketSurveyModel(rqt, prv, cnt, scp)
      container.surveys.push(mod)
    })
    return container
  }
}

module.exports = MarketSurveyController
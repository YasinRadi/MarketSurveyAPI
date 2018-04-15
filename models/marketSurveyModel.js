const RequesterModel     = require('./requesterModel')
const ProviderModel      = require('./providerModel')
const SurveyContentModel = require('./surveyContentModel')
const SubscriptionModel  = require('./subscriptionModel')

/**
 * Base model for Market Surveys
 */
class MarketSurveyModel {
  constructor(requester, provider, survey, subscription) { 
    this.requester    = requester    || new RequesterModel()
    this.provider     = provider     || new ProviderModel()
    this.survey       = survey       || new SurveyContentModel()
    this.subscription = subscription || new SubscriptionModel()
  }

  static getSubject(obj) {
    return obj.survey.subject
  }

  static getGender(obj) {
    return obj.survey.target.gender
  }

  static getAge(obj) {
    return obj.survey.target.age
  }

  static getCurrency(obj) {
    return obj.survey.target.income.currency
  }

  static getIncome(obj) {
    return obj.survey.target.income.value
  }

  static getCountry(obj) {
    return obj.survey.country
  }

  static getFrequency(obj) {
    return obj.subscription.frequency
  }

  static getChannel(obj) {
    return obj.subscription.channel
  }
}

module.exports = MarketSurveyModel
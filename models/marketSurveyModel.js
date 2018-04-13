const RequesterModel     = require('./requesterModel')
const ProviderModel      = require('./providerModel')
const SurveyContentModel = require('./surveyContentModel')
const SubscriptionModel  = require('./subscriptionModel')

/**
 * Base model for Market Surveys
 */
class MarketSurveyModel {
  constructor() { 
    this.content = {
      requester: new RequesterModel(),
      provider: new ProviderModel(),
      survey: new SurveyContentModel(),
      subscription: new SubscriptionModel()
    }
  }

  /**
   * Public accessors to ease the work
   */
  getSubject() {
    return this.content.survey.subject
  }

  getGender() {
    return this.content.survey.target.gender
  }

  getAge() {
    return this.content.survey.target.age
  }

  getCurrency() {
    return this.content.survey.target.income.currency
  }

  getIncome() {
    return this.content.survey.target.income.value
  }

  getCountry() {
    return this.content.survey.country
  }

  getFrequency() {
    return this.content.subscription.frequency
  }

  getChannel() {
    return this.content.subscription.channel
  }
}

module.exports = MarketSurveyModel
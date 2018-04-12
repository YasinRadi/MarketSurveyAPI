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
}

module.exports = MarketSurveyModel
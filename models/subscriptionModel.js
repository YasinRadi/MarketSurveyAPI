
class SubscriptionModel {
  constructor() {
    this.frequency = []
    this.channel   = []
  }

  /**
   * Converts raw data into SubscriptionModel Object.
   * @param   {*} data 
   * @return  {SubscriptionModel}
   */
  static construct(data) {
    const obj = new SubscriptionModel()
    obj.frequency = data.frequency
    obj.channel   = data.channel
    return obj
  }
}

module.exports = SubscriptionModel
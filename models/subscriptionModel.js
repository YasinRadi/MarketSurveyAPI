
class Subscription {
  constructor() {
    this._frequency = []
    this._channel   = []
  }

  /**
   * Public properties.
   */
  get frequency() {
    return this._frequency
  }

  set frequency(frequency) {
    this._frequency = frequency
  }

  get channel() {
    return this._channel
  }

  set channel(channel) {
    this._channel = channel
  }
}

module.exports = Subscription
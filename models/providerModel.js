
/**
 * Base model for Providers.
 */
class ProviderModel {
  constructor() {
    this._id   = ""
    this._name = ""
  }

  /**
   * Public properties.
   */
  get id(){
    return this._id 
  }

  set id(id) {
    this._id = id
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }
}

module.exports = ProviderModel
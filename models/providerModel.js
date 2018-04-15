
/**
 * Base model for Providers.
 */
class ProviderModel {
  constructor() {
    this.id   = ""
    this.name = ""
  }

  /**
   * Converts raw data into ProviderModel Object.
   * @param   {*} data 
   * @return  {ProviderModel}
   */
  static construct(data) {
    const obj = new ProviderModel()
    obj.id = data.id
    obj.name = data.name
    return obj
  }
}

module.exports = ProviderModel
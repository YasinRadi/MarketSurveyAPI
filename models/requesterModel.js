
/**
 * Base model for Requesters.
 */
class RequesterModel {
  constructor() {
    this.id   = ""
    this.name = ""
  }

  /**
   * Converts raw data into RequesterModel Object.
   * @param   {*} data 
   * @return  {RequesterModel}
   */
  static construct(data) {
    const obj = new RequesterModel()
    obj.id = data.id
    obj.name = data.name
    return obj
  }
}

module.exports = RequesterModel

/**
 * Base model for Requesters.
 */
class RequesterModel {
  constructor() {
    this.id = ""
    this.name = ""
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

module.exports = RequesterModel
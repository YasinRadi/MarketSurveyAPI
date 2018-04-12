'use strict'

class MarketSurveryModel {
  constructor() { 
    this.subject = ""
    this.target  = {
      gender: "",
      age: 0,
      income: {
        currency: "EUR",
        value: 0
      }
    }
    this.country = "ES"
  }
}
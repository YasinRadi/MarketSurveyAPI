const assert = require('assert')
const msController = require('../controllers/marketSurveyController')
const MarketSurveyModel  = require('../models/marketSurveyModel')

/**
 * 
 * surveyController TESTS
 * 
 */

 // 
 describe('surveysController', function() {

   describe('filterSurveys', function() {
    it('Returns array', function() {
      assert(
        Array, 
        typeof(msController.filterSurveys([], []))
      )
    })
   })

   /**
    * 
    * SURVEY CONTENT
    * 
    */

   describe('Survey Content', function() {
    describe('filterSurveyBySubject', function() {
      it('Returns boolean', function() {
        assert(
          Boolean, 
          typeof(msController.filterSurveyBySubject(new MarketSurveyModel, new MarketSurveyModel))
         )
      })
    })
 
    describe('filterSurveyByGender', function() {
      it('Returns boolean', function() {
        assert(
          Boolean,
          typeof(msController.filterSurveyByGender(new MarketSurveyModel, new MarketSurveyModel))
        )
      })
    })
 
    describe('filterSurveyByAge', function() {
      it('Returns boolean', function() {
        assert(
          Boolean,
          typeof(msController.filterSurveyByAge(new MarketSurveyModel, new MarketSurveyModel))
        )
      })
    })
 
    describe('filterSurveyByCurrency', function() {
     it('Returns boolean', function() {
       assert(
         Boolean,
         typeof(msController.filterSurveyByCurrency(new MarketSurveyModel, new MarketSurveyModel))
       )
     })
   })
 
    describe('filterSurveyByIncome', function() {
      it('Returns boolean', function() {
        assert(
          Boolean,
          typeof(msController.filterSurveyByIncome(new MarketSurveyModel, new MarketSurveyModel))
        )
      })
    })
 
    describe('filterSurveyByCountry', function() {
      it('Returns boolean', function() {
        assert(
          Boolean,
          typeof(msController.filterSurveyByCountry(new MarketSurveyModel, new MarketSurveyModel))
        )
      })
    })
   })

  /**
   * 
   * SUBSCRIPTION CONTENT
   * 
   */
   describe('Subscription content', function() {

    describe('filterSurveyByFrequency', function() {
      it('Returns boolean', function() {
        assert(
          Boolean,
          typeof(msController.filterSurveyByFrequency(new MarketSurveyModel, new MarketSurveyModel))
        )
      })
    })

    describe('filterSurveyByChannel', function() {
      it('Returns boolean', function() {
        assert(
          Boolean,
          typeof(msController.filterSurveyByChannel(new MarketSurveyModel, new MarketSurveyModel))
        )
      })
    })

   })

 })
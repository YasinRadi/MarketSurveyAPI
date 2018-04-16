const assert = require('assert')
const request = require('supertest')
const server  = request('http://localhost:3000')
const FileHandler = require('../lib/fileHandler')
const msController = require('../controllers/marketSurveyController')
const MarketSurveyModel = require('../models/marketSurveyModel')
const SurveyContainer   = require('../models/surveyContainer')


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

   /**
    * 
    * FILE HANDLING CONTENT
    * 
    */
   describe('File data handling', function() {

    describe('surveyList', function() {
      it('Returns array', function() {
        assert(
          Array,
          typeof(msController.surveyList())
        )
      })
    })

   })

   /**
    * 
    * 
    * REQUEST PROCESSING
    * 
    */
   describe('Request processing', function() {
    
    describe('processRequest', function() {
      it('Returns empty object', function() {
        assert({}, msController.processRequest(null))
      })

      it('Should return all surveys.', function(done) {
        const requestObject = new MarketSurveyModel()
    
        server
          .get('/surveys')
          .send(requestObject)
          .expect(200)
          .end(function(err, res) {
            //console.log(res.body) // UNCOMMENT TO SEE RESULT
            //console.log(res.body[0]) // UNCOMMENT TO SEE FIRST RESULT
            assert.equal('Array', res.body.constructor.name)
            done()
          })
      })

    })

    describe('dataToObject', function() {

      it('Returns object', function(){
        assert(
          'object',
          typeof(msController.dataToObject(new SurveyContainer()))
        )
      })

      it('Returns SurveyContainer object type', function() {
        assert(
          SurveyContainer.name,
          msController.dataToObject(new SurveyContainer()).constructor.name
        )
      })

    })

    /*describe('loadData', function() {

      // EXECUTE THIS TEST INDIVIDUALLY
      // Due to special behavior of Node's Module._load this will fail
      // if executed in the grouped testing using 'npm test'
      it('Loads data correctly (if there\'s any).', function() {
        assert(msController.surveyList(), [])
        msController.loadData()
        assert(msController.surveyList().length > 0, true)
      })
    })*/
   })
 })
const MarketSurveyModel = require('../models/marketSurveyModel')
const request = require('supertest')
const assert = require('assert')
const server  = request('http://localhost:3000')

/**
 * 
 * /surveys TESTS
 * 
 */

// is 200 OK
describe('GET /surveys', function() {
  it('Should return 200 OK', function(done) {
    server
      .get('/surveys')
      .expect(200, done)
  })

  it('Should return gender: "M" surveys.', function(done) {
    const requestObject = new MarketSurveyModel()
    requestObject.survey.target.gender = ["M"]

    server
      .get('/surveys')
      .send(requestObject)
      .expect(200)
      .end(function(err, res) {
        //console.log(res.body) // UNCOMMENT TO SEE RESULT
        //console.log(res.body[0]) // UNCOMMENT TO SEE FIRST RESULT
        assert.equal(res.body[0].survey.target.gender.includes('M'), true)
        done()
      })
  })

  it('Should return subscription channel: "api" surveys.', function(done) {
    const requestObject = new MarketSurveyModel()
    requestObject.subscription.channel = ["api"]    

    server
      .get('/surveys')
      .send(requestObject)
      .expect(200)
      .end(function(err, res) {
        //console.log(res.body) // UNCOMMENT TO SEE RESULT
        //console.log(res.body[0]) // UNCOMMENT TO SEE FIRST RESULT
        assert.equal(res.body[0].subscription.channel.includes('api'), true)
        done()
      })
  })

  it('Should return income range 20-30k surveys.', function(done) {
    const requestObject = new MarketSurveyModel()
    requestObject.survey.target.income.value = ["20000", "30000"]

    server
      .get('/surveys')
      .send(requestObject)
      .expect(200)
      .end(function(err, res) {
        //console.log(res.body) // UNCOMMENT TO SEE RESULT
        //console.log(res.body[0]) // UNCOMMENT TO SEE FIRST RESULT
        assert.equal(res.body[0].survey.target.income.value[0] >= 20000, true)
        assert.equal(res.body[0].survey.target.income.value[0] <= 30000, true)
        done()
      })
  })

  it('Should return subject: Sone surveys.', function(done) {
    const requestObject = new MarketSurveyModel()
    requestObject.survey.subject = ["Sone"]

    server
      .get('/surveys')
      .send(requestObject)
      .expect(200)
      .end(function(err, res) {
        //console.log(res.body) // UNCOMMENT TO SEE RESULT
        //console.log(res.body[0]) // UNCOMMENT TO SEE FIRST RESULT
        assert.equal(res.body[0].survey.subject, 'Sone')
        done()
      })
  })

  it('Should return currency: "EUR" or "GBP" surveys.', function(done) {
    const requestObject = new MarketSurveyModel()
    requestObject.survey.target.income.currency = ["EUR", "GBP"]

    server
      .get('/surveys')
      .send(requestObject)
      .expect(200)
      .end(function(err, res) {
        //console.log(res.body) // UNCOMMENT TO SEE RESULT
        //console.log(res.body[0]) // UNCOMMENT TO SEE FIRST RESULT
        assert.equal(
          (res.body[0].survey.target.income.currency.includes('EUR') 
          || res.body[0].survey.target.income.currency.includes('GBP')), 
          true)
        done()
      })
  })

  it('Should return country: DE surveys.', function(done) {
    const requestObject = new MarketSurveyModel()
    requestObject.survey.country = ["DE"]
    
    server
      .get('/surveys')
      .send(requestObject)
      .expect(200)
      .end(function(err, res) {
        //console.log(res.body) // UNCOMMENT TO SEE RESULT
        //console.log(res.body[0]) // UNCOMMENT TO SEE FIRST RESULT
        assert.equal(res.body[0].survey.country, 'DE')
        done()
      })
  })

  it('Should return age range [18-29] y.o. surveys.', function(done) {
    const requestObject = new MarketSurveyModel()
    requestObject.survey.target.age = ["18", "29"]

    server
      .get('/surveys')
      .send(requestObject)
      .expect(200)
      .end(function(err, res) {
        //console.log(res.body) // UNCOMMENT TO SEE RESULT
        //console.log(res.body[0]) // UNCOMMENT TO SEE FIRST RESULT
        assert.equal(res.body[0].survey.target.age[0] >= 18, true)
        assert.equal(res.body[0].survey.target.age[0] <= 29, true)
        done()
      })
  })

  it('Should return frequency: "weekly" or "monthly" surveys.', function(done) {
    const requestObject = new MarketSurveyModel()
    requestObject.subscription.frequency = ["weekly", "monthly"]

    server
      .get('/surveys')
      .send(requestObject)
      .expect(200)
      .end(function(err, res) {
        //console.log(res.body) // UNCOMMENT TO SEE RESULT
        //console.log(res.body[0]) // UNCOMMENT TO SEE FIRST RESULT
        assert.equal(
          (res.body[0].subscription.frequency.includes('weekly') 
          || res.body[0].subscription.frequency.includes('monthly')), 
          true)
        done()
      })
  })

  it('Should return surveys matching: Subject: "Stwo", Gender: "M", Frequency: "weekly".', function(done) {
    const requestObject = new MarketSurveyModel()
    requestObject.survey.subject = ["Stwo"]
    requestObject.survey.target.gender = ["M"]
    requestObject.subscription.frequency = ["weekly"]

    server
      .get('/surveys')
      .send(requestObject)
      .expect(200)
      .end(function(err, res) {
        //console.log(res.body) // UNCOMMENT TO SEE RESULT
        //console.log(res.body[0]) // UNCOMMENT TO SEE FIRST RESULT
        assert.equal(res.body[0].survey.subject, 'Stwo')
        assert.equal(res.body[0].survey.target.gender.includes('M'), true)
        assert.equal(res.body[0].subscription.frequency.includes('weekly'), true)
        done()
      })
  })
})
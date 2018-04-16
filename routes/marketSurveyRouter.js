const surveys = require('express').Router()
const msController = require('../controllers/marketSurveyController')

/**
 * 
 * /surveys ROUTES
 * 
 */

surveys.get('/', (req, res, next) => {
  res.send(msController.processRequest(req.body))
})

module.exports = surveys
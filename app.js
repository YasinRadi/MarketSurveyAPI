const express = require('express')
const app  = express()
const path = require('path')
const helmet = require('helmet')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// Routes requiring
const surveys = require('./routes/marketSurveyRouter')



// Set the app to use helmet
app.use(helmet())

// Dev Logging
app.use(logger('dev'))

// Body Parser configuration
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Add router to middleware handling path
app.use('/surveys', surveys)

app.get('/', (req, res) => {
    res.send(`Information Market Surveys provider.`)
})

// APi health check
app.get('/health', (req, res) => {
    res.sendStatus(200)
})

// Catch 404 error and forward to handler
app.use((req, res, next) => {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Set error handler
app.use((err, req, res, next) => {
    // Set locals, only output err in dev
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.sendStatus(err.status || 500)
})

module.exports = app
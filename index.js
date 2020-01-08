const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express()

app.set('view engine', 'ejs')   //default: search .ejs in /views/...
app.use(express.static('public'))   //static files in /public/...
app.use(bodyParser.urlencoded({extended: true}))   //need for 'req.body' to read data


// When I reload page(request to root page), then 'get' request is begin:
app.get('/', (req, res) => {
    res.render('index', {weather: null, error: null})     // and file index.ejs will be render
})


app.post('/', async (req, res) => {  //res -- it is answear, req -- request
    
    const { city } = req.body
    const {weather, error} = await weatherRequest(city)

    res.render('index', {weather, error})
})


app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})
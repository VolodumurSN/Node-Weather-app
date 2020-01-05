const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')   //default: search .ejs in /views/...
app.use(express.static('public'))   //static files in /public/...
app.use(bodyParser.urlencoded({extended: true}))   //need for 'req.body' to read data


// When I reload page(request to root page), then 'get' request is begin:
app.get('/', (req, res) => {
    res.render('index')     // and file index.ejs will be render
})


app.post('/', (req, res) => {  //res -- it is answear, req -- request
    
    const { city } = req.body
    console.log(city)

    res.render('index')
})


app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})
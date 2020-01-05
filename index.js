const express = require('express')

const app = express()

app.set('view engine', 'ejs')   //default: search .ejs in /views/...
app.use(express.static('public'))   //static files in /public/...


// When I reload page(request to root page), then 'get' request is begin:
app.get('/', (req, res) => {
    res.render('index')     // and file index.ejs will be render
})


app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})
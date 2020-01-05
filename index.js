const express = require('express')

const app = express()

// When I reload page, 'get' request is begin:
app.get('/', (req, res) => {
    res.end('Hello from nodejs')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})
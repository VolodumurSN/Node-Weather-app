const rp = require('request-promise')

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Ім\'я міста некоректне')

        return
    }

    console.log('City:', city)
    
}
const rp = require('request-promise')

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Ім\'я міста некоректне')  
    }

    const KEY = 'ed4a95b0842138b217087a5ce74162ac'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'

    const options = {   //Configuration object
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true
    }

    try {
        const data = await rp(options)
        const celsius = (data.main.temp - 32) * 5/9
    
        return {
          weather: `${data.name}: ${celsius.toFixed(0)}`,
          error: null
        }
      } catch (error) {
        // console.log(error)
        return {
          weather: null,
          error: error.error.message
        }
      } 
}
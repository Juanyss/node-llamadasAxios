const axios = require('axios');

const getClima = async(lon, lat) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=4d51153cff12a2d3bf1e8b536fd8d777&units=metric`)

    return resp.data;
}

module.exports = {
    getClima
}
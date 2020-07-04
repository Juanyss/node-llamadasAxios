const axios = require('axios');

const getLugar = async(lugar) => {
    let resp = await axios.get(`http://api.positionstack.com/v1/forward?access_key=18bafd21b1694993e6d83e07f90ba5d2&query=${lugar}`)

    let first = resp.data['data'][0];


    return {
        latitude: first['latitude'],
        longitude: first['longitude']
    };

}

module.exports = {
    getLugar
}
const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');
const yargs = require('yargs');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para optener el clima',
        demand: true
    }
}).argv;

const getInfo = async(place) => {

    try {
        let lonAndLat = await lugar.getLugar(place);

        let temp = await clima.getClima(lonAndLat.latitude, lonAndLat.longitude)

        return `El clima de ${place} es de ${temp.main.temp} grados`;
    } catch (error) {
        return `No se pudo econtrar el clima de ${place}`;

    }

};


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
const axios = require('axios');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para optener el clima',
        demand: true
    }
}).argv;


const instance = axios.create({
    baseURL: `http://localhost:88/api/usuarios/${argv.direccion}`,
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6Ilt7XCJhdXRob3JpdHlcIjpcIlVTX0FETUlOSVNUUkFET1JcIn0se1wiYXV0aG9yaXR5XCI6XCJVU19ESVJFQ0NJT05cIn0se1wiYXV0aG9yaXR5XCI6XCJVU19QRVJTT05BTFwifV0iLCJzdWIiOiJkYXJpbyIsImlhdCI6MTU5MzcyNzA1MSwiZXhwIjoxNTkzNzQxNDUxfQ.1pRRUaDcxaqp4dBpm5B3d7FidZ6ijNVSAB9MCpxI1SPN9ly70wfodjGrUrrywd8wJ5PJDXUgVCWmYCFIvM26PQ' }
});

instance.get()
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.log("error: " + err);
    })


//console.log(argv.direccion);
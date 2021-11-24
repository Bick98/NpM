const axios = require('axios');
axios
    .get('https://www.youtube.com/')
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
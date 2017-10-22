const axios = require('axios');

axios.get('https://github.com/')
   .then(function (response) {
       console.log(response.data);
   });

axios.get('http://localhost:3000/posts')
  .then(function(response){
      console.log(response.data);
  });

axios.get('https://github.com/fhgsuerhis/')
  .catch(function (error) {
    console.log(error);
  });

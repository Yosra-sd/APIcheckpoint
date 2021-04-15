const { default: axios } = require("axios");


axios.get('https://jsonplaceholder.typicode.com/users')
.then( res => {
    console.log(res);
})
.catch (err => {
    console.log(err)
})
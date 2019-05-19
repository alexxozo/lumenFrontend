const axios = require('axios'),
controllers = {};

controllers.getAll = async (req, res) => {
    axios.get('http://localhost:8000/api/products/0/8')
        .then(function (response) {
            console.log(response.data);
            res.render('index', { products: response.data });
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = controllers;
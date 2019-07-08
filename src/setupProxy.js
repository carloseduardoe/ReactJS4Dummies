const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('https://pokeapi.co/v2/pokemon/', { target: 'https://pokeapi.co/v2/pokemon/' }));
};
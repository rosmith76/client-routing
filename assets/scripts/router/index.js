'use strict';

const Router5 = require('router5').default;
const loggerPlugin = require('router5').loggerPlugin();

const routes = [
    {name: 'index', path: '/'},
    {name: 'about', path: '/about'},
    {name: 'projects', path: '/projects'},
    {name: 'talks', path: '/talks'},
];

const options = {
    useHash: true,
    hashPrefix: '!',
    defaultRoute: '/'
};

const router = new Router5(routes, options)
.usePlugin(loggerPlugin);
});

module.exports = {
  router,
};

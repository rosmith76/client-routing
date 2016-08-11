'use strict';

const router = require('./router/index');

// useMiddleware should only ever be called once
// see: http://router5.github.io/docs/middleware.html
router.useMiddleware(require('./router/dom').transition);

const routerEvents = require('./router/events');

$(() => {
  router.start();

  routerEvents.addHandlers();
});

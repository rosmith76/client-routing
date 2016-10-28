'use strict';


const initializeRouter = () => {
  const appRouter = require('./router/index');

  appRouter.useMiddleware(require('./router/dom').transition);

  appRouter.start();
};


$(() => {
  initializeRouter();
  require('./events').registerPaths();
});

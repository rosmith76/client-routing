'use strict';

const hideAllContent = () => {
  require('./paths').forEach((path) => {
    $(`${path}`).addClass('hidden');
  });
};

const showContent = (path) => {
  $(`${path}`).removeClass('hidden');
};

module.exports = {
  showContent,
  hideAllContent,
};

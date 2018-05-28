'use strict';

module.exports = {
  create: data => ({ ...data, date: Date.now() }),
};

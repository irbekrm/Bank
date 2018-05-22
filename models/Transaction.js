'use strict';

exports.create = data => ({ ...data, date: Date.now() });

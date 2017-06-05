'use strict';

var mongoose = require('mongoose'),
Task = mongoose.model('Tasks');

exports.list_all_responses = function(req, res) {
  [].find({}, function(err, response) {
    if (err)
      res.send(err);
    res.json(response);
  });
};
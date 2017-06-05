'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
  url: {
    type: String,
    Required: 'Kindly enter the url'
  }
});

module.exports = mongoose.model('Urls', UrlSchema);
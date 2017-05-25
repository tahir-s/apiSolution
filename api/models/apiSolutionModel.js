'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Solution = new Schema({
    User_id : {type: String},
    LogTime : {type: String},
    feeds : [Schema.Types.Mixed]
}, {strict: false});

module.exports = mongoose.model('Solution', Solution);
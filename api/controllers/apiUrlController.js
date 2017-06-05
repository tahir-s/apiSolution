
var mongoose = require('mongoose'),
Urls = mongoose.model('Urls');

exports.list_all_urls = function(req, res) {
  Urls.find({}, function(err, url) {
    if (err)
      res.send(err);
    res.json(url);
  });
};

exports.create_a_url = function(req, res) {
  var new_url = new Urls(req.body);
  new_url.save(function(err, url) {
    if (err)
      res.send(err);
    res.json(url);
  });
};

exports.read_a_url = function(req, res) {
  Urls.findById(req.params.urlId, function(err, url) {
    if (err)
      res.send(err);
    res.json(url);
  });
};


exports.update_a_url = function(req, res) {
  Urls.findOneAndUpdate(req.params.urlId, req.body, {new: true}, function(err, url) {
    if (err)
      res.send(err);
    res.json(url);
  });
};


exports.delete_a_url = function(req, res) {


  Urls.remove({
    _id: req.params.urlId
  }, function(err, url) {
    if (err)
      res.send(err);
    res.json({ message: 'Url successfully deleted' });
  });
};

exports.read_by_url = function(req, res) {
  Urls.find( { url: req.url }, function(err, url) {
    if (err)
      res.send(err);
    res.json(url);
  });
};

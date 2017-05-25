
var mongoose = require('mongoose'),
Solution = mongoose.model('Solution');

exports.list_all_solutions = function(req, res) {
  Solution.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_solution = function(req, res) {
  var new_solution = new Solution(req.body);
  new_solution.save(function(err, solution) {
    if (err)
      res.send(err);
    res.json(solution);
  });
};

exports.read_a_solution = function(req, res) {
  Solution.findById(req.params.solutionId, function(err, solution) {
    if (err)
      res.send(err);
    res.json(solution);
  });
};


exports.update_a_solution = function(req, res) {
  Solution.findOneAndUpdate(req.params.solutionId, req.body, {new: true}, function(err, solution) {
    if (err)
      res.send(err);
    res.json(solution);
  });
};


exports.delete_a_solution = function(req, res) {

  Solution.remove({
    _id: req.params.solutionId
  }, function(err, solution) {
    if (err)
      res.send(err);
    res.json({ message: 'Solution successfully deleted' });
  });
};



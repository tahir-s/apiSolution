'use strict';
module.exports = function(app) {
  var apiSolution = require('../controllers/apiSolutionController');

  // apiSolution Routes
  app.route('/solutions')
    .get(apiSolution.list_all_solutions)
    .post(apiSolution.create_a_solution);


  app.route('/solutions/:solutionId')
    .get(apiSolution.read_a_solution)
    .put(apiSolution.update_a_solution)
    .delete(apiSolution.delete_a_solution);

  // app.use(function(req, res) {
  //   res.status(404).send({url: req.originalUrl + ' not found'})
  // });
};


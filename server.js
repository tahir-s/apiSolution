var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  Solution = require('./api/models/apiSolutionModel'),
  Url = require('./api/models/apiUrlModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ApiDoctordb'); 
// app.set('db', mongoose.connect('mongodb://localhost/ApiDoctordb'));  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var task = require('./api/routes/todoListRoutes');
var solution = require('./api/routes/apiSolutionRoutes');
var routes = require('./api/routes/apiResponseRoutes');
var urls = require('./api/routes/apiUrlRoutes');

routes(app);
task(app);
solution(app);
urls(app);

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);


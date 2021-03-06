// the app
var express = require('express');
var path = require('path');
var app = express();

var exphbs = require('express-handlebars'); 
app.engine('handlebars', exphbs({defaultLayout: 'main'})); 
app.set('view engine', 'handlebars');

app.use(express.static('public'));  // this allows us to get our screem image

var scores = [                        // an array of objects
   {name:"Alice", midterm: 98, final: 92},
   {name:"Bruce", midterm: 88, final: 82},
   {name:"Clara", midterm: 78, final: 72},
   {name:"David", midterm: 78, final: 77},
   {name:"Eldon", midterm: 82, final: 87}
];


app.get('/students', function(req, res) {
   res.render('students', {classData: scores});  
});

app.get('/', function(req, res) {
   res.render('hello', {name: "Joan"});
});


app.use(function (req, res) {
  res.status(404).send("Sorry, no such page!")
});

app.listen(3000,  function () {
   console.log('App started on http://localhost:3000,  press Ctrl-C to terminate.' );
});





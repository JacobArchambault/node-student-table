// the app
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));  // this allows us to get our scream image

app.get('/students', (_req, res) => res.render('students', {
   classData: [
      { name: "Alice", midterm: 98, final: 92 },
      { name: "Bruce", midterm: 88, final: 82 },
      { name: "Clara", midterm: 78, final: 72 },
      { name: "David", midterm: 78, final: 77 },
      { name: "Eldon", midterm: 82, final: 87 }
   ]
}));

app.get('/', (_req, res) => res.render('hello', { name: "Jacob" }));

app.use((_req, res) => res.status(404).send("Sorry, no such page!"));

app.listen(3000, console.log('App started on http://localhost:3000,  press Ctrl-C to terminate.'));





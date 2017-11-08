var express = require('express');
var dbhelper = require('dbhelper');
var data = require('data');

var data = require('newCustomer');

var app = express();

var port = process.env.PORT||5000;

app.use(express.static('public'));
// app.use(express.static('src/views'));
app.set('views','./src/views');

//var handlebars = require('express-handlebars')
//app.engine('.hbs', handlebars({extname:'.hbs'}));

//app.set('view engine', 'jade');
//app.set('view engine','.hbs');
app.set('view engine','ejs');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hello from RYTrender', nav: [{ 
        Link: '/Books', 
        Text: 'Books' 
    }, { 
        Link: '/Authors', 
        Text: 'Authors' 
    }] 
});
});

app.get('/books', function (req, res) {
    res.send('Hello Books!!!');
});
app.get('/authors', function(req,res){
    res.send('Hello Authors!');
});

dbhelper.createdb();
dbhelper.createNewCustomerCollection();
dbhelper.addNewCustomerRecords(data.newCustomer);
    

app.listen(port, function () {
    console.log('Running server on port ' + port);
});

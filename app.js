let express = require('express'); //connect module express
let app = express(); //create instance of express
let mysql = require('mysql'); //connect module mysql

app.use(express.static('public')); /* public - name folder with static */
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

/* set the template engine */
app.set('view engine', 'pug');

/* setting mysql module  */
let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'market'
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.render('main.pug');
});

app.get('/cat', function(req, res){
  let catId = req.query.id;

  let cat = new Promise(function(resolve, reject){
    con.query(
      'SELECT * FROM category WHERE id='+catId,
      function(error, result){
        if (error) reject(error);
        resolve(result);
      }
    );
  });
  let goods = new Promise(function(resolve, reject){
    con.query(
      'SELECT * FROM goods WHERE category='+catId,
      function(error, result){
        if (error) reject(error);
        resolve(result);
      }
    );
  });

  Promise.all([cat, goods]).then(function(value){
    res.render('cat', {
      cat: JSON.parse(JSON.stringify(value[0])),
      goods: JSON.parse(JSON.stringify(value[1]))
    })
  });
});

app.get('/goods', function(req, res){
  con.query('SELECT * FROM goods WHERE id='+req.query.id, function(error, result, fields){
    if (error) throw error;
    res.render('goods', {goods: JSON.parse(JSON.stringify(result))});
  });
});

app.post('/get-category-list', function(req, res){
  con.query('SELECT id, category FROM category', function(error, result, fields){
    if (error) throw error;
    res.json(result);
  });
});
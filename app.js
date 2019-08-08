let express = require('express'); //connect module express
let app = express(); //create instance of express
let mysql = require('mysql'); //connect module mysql

app.use(express.static('public')); /* public - name folder with static */
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.json());

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
  let cat = new Promise(function(resolve, reject){
    con.query(
      "SELECT id,name,cost,image,category FROM (SELECT id,name,cost,image,category, if(if(@curr_category != category, @curr_category := category, '') != '', @k := 0, @k := @k + 1) as ind  FROM goods, (SELECT @curr_category := '' ) v ) goods WHERE ind < 3",
      function(error, result, fields){
        if (error) reject(error);
         resolve(result);
      }
    );
  });
  let catDescription = new Promise(function(resolve, reject){
    con.query(
      "SELECT * FROM category",
      function(error, result, fields){
        if (error) reject(error);
         resolve(result);
      }
    );
  });
  Promise.all([cat, catDescription]).then(function (value){
    console.log(value[1]);
    res.render('index', {
      goods: JSON.parse(JSON.stringify(value[0])),
      cat: JSON.parse(JSON.stringify(value[1])),
    });
  });
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

app.get('/order', function(req, res){
  res.render('order');
});

app.post('/get-category-list', function(req, res){
  con.query('SELECT id, category FROM category', function(error, result, fields){
    if (error) throw error;
    res.json(result);
  });
});

app.post('/get-goods-info', function(req, res){
  if (req.body.key.length !=0){
    con.query('SELECT id, name, cost FROM goods WHERE id IN('+req.body.key.join(',')+')', function(error, result, fields){
      if (error) throw error;
      let goods = {};
      for (let i = 0; i < result.length; i++) {
        goods[result[i]['id']] = result[i];
      }
      res.json(goods);
    });
  } else {
    res.send('0');
  }
});

app.post('/finish-order', function(req, res){
  console.log(req.body);
  if(req.body.key.length != 0) {
    let key = Object.keys(req.body.key);
    con.query('SELECT id, name, cost FROM goods WHERE id IN('+key.join(',')+')', function(error, result, fields){
      if (error) throw error;
      console.log(result);
      // sendMail(req.body, result).catch(console.error);
      res.send('1');
    });
  } else {
    res.send('0')
  }
});

function sendMail(data, result){
}
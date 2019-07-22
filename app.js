let express = require('express'); //подключаем модуль express
let app = express(); //создаю экземпляр экспресса
let mysql = require('mysql'); //подключаем модуль mysql

app.use(express.static('public')); /* public - имя папки где храниться статика */

/* Задаём шаблонизатор */
app.set('view engine', 'pug');

/* Настраиваем mysql модуль  */
let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'market'
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get(`/test${'?'}`, function (req, res) {
  var url = req.url;
  console.log(req);
  if (url == '/test?id=2') {
    console.log("/test?id=2");
  } else if (url == '/test?id=1') {
    console.log('/test?id=1');
  } else if (url == '/test') {
    console.log('/test');
  }
  res.render('main.pug');
});


app.get('/', function (req, res) {
  res.render('main.pug');
});
app.get('/cat', function (req, res) {
  con.query(
    'SELECT * FROM goods',
    function(error, result){
      if (error) throw error;
      //console.log(result);
      let goods ={};
      for (let i=0; i<result.length; i++) {
        goods[result[i]['id']] = result[i];
      }
      //console.log(goods);
      console.log(JSON.parse(JSON.stringify(goods)));
      res.render('category.pug', {
        foo: 4,
        bar: 7,
        goods: JSON.parse(JSON.stringify(goods))
      });
    }
  );

});
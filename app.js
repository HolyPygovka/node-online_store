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

app.get(`/category`, function (req, res) {
  con.query(
    'SELECT * FROM goods',
    function(error, result){
      if (error) throw error;

      let goods ={};
      for (let i=0; i<result.length; i++) {
        goods[result[i]['id']] = result[i];
      }
      let url = req.url;
      if (url == '/category?id=2') {
        console.log(goods);
        res.render('category_phones.pug', {
          title: 'Телефоны',
          goods: JSON.parse(JSON.stringify(goods))
        });
      } else if (url == '/category?id=1') {
        console.log("/category?id=1");
        res.render('category_notebook.pug', {
          title: 'Ноутбуки',
          bar: 11,
          goods: JSON.parse(JSON.stringify(goods))
        });
      }
    }
  );
});
app.get('/', function (req, res) {
  res.render('main.pug');
});
/* app.get('/cat', function (req, res) {
  con.query(
    'SELECT * FROM goods',
    function(error, result){
      if (error) throw error;
      let goods ={};
      for (let i=0; i<result.length; i++) {
        goods[result[i]['id']] = result[i];
      }
      res.render('category.pug', {
        foo: 4,
        bar: 7,
        goods: JSON.parse(JSON.stringify(goods))
      });
    }
  );
}); */
let express = require('express');
let app = express(); //создаю экземпляр экспресса

app.use(express.static('public')); /* public - имя папки где храниться статика */

/* Задаём шаблонизатор */
app.set('view engine', 'pug');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
    console.log('load /')
    res.render('main.pug', {
        foo: 4,
        bar: 7
    });
});
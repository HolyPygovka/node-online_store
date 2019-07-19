let express = require('express');
let app = express();
/* publick - имя папки где храниться статика */
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res){
    console.log('load /')
    res.render('index.html');
});
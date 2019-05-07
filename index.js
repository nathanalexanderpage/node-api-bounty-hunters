let cors = require('cors');
let express = require('express');
let db = require('./models');

let app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended:false}));

app.use('/v1/bounties', require('./controllers/v1/bounties'));

app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(process.env.PORT || 3018, () => {
  console.log(`listening on ${process.env.PORT || 3018}`);
});

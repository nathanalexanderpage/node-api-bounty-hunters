let express = require('express');

let app = express();

app.use('/v1/bounties', require('./controllers/v1/bounties'));

app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen((process.env.PORT || 3018) => {
  console.log(`listening on ${process.env.PORT || 3018}`);
});

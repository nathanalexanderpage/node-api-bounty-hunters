let express = require('express');

// router instance
let router = express.Router();

// GET /bounties
router.get('/', (req, res) => {
  res.send('stub');
});

// POST /bounties
router.post('/', (req, res) => {
  res.send('stub')
})

// GET /bounties/:id
router.get('/', (req, res) => {
  res.send('stub')
})

// PUT /bounties/:id
router.put('/', (req, res) => {
  res.send('stub')
})

// DELETE /bounties/:id
router.delete('/', (req, res) => {
  res.send('stub')
})

module.exports = router;

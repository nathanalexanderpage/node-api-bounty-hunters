let express = require('express');
let db = require('../../models')

// router instance
let router = express.Router();

// GET /bounties
router.get('/', (req, res) => {
  db.Bounty.find()
  .then(foundBounties => {
    res.send(foundBounties)
  })
  .catch(err => {
    console.log('err: in GET /v1/bounties');
    console.log(err);
    res.status(500).send('Something went wrong. Please contact an administrator')
  })
});

// POST /bounties
router.post('/', (req, res) => {
  db.Bounty.create(req.body)
  .then(createdBounty => {
    res.send(createdBounty)
  })
  .catch(err => {
    console.log('err:');
    console.log(err);
    res.send('Something went wrong.')
  })
})

// GET /bounties/:id
router.get('/:id', (req, res) => {
  db.Bounty.findById(req.params.id)
  .then(foundBounty => {
    res.send(foundBounty)
  })
})

// PUT /bounties/:id
router.put('/:id', (req, res) => {
  db.Bounty.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    {new:true, useFindAndModify: false}
  )
  .then((editedBounty) => {
    res.send(editedBounty)
  })
  .catch(err => {
    console.log('error in PUT /v1/bounties');
  })
})

// DELETE /bounties/:id
router.delete('/:id', (req, res) => {
  db.Bounty.findOneAndDelete(
    {_id: req.params.id},
    {useFindAndModify: false}
  )
  .catch(err => {
    console.log('error in DELETE /v1/bounties/:id');
    console.log(err);
    res.status(500).send('something went wrong')
  })
  res.send('stub')
})

module.exports = router;

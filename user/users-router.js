const router = require('express').Router();

const Users = require('./users-model');
const requireAuth = require('../auth/requires-auth-middleware')

router.get('/users', requireAuth, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;

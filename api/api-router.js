const bcrypt = require('bcryptjs');
const router = require('express').Router();

const authRouter = require('../auth/auth-router');
const usersRouter = require('../user/users-router');

router.use('/', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  const password = req.body.password;
  const hash = bcrypt.hashSync(password, 8);
  res.status(200).json({ password, hash });
});

module.exports = router;
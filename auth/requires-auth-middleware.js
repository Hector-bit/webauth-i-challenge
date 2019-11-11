const bcrypt = require('bcryptjs'); // npm i bcryptjs

const Users = require('../user/users-model')

module.exports = (req, res, next) => {
    let { username, password } = req.headers;

    if (username && password){
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
}}
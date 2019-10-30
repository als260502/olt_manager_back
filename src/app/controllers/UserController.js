const { User } = require("../models");

module.exports = {
  async store(req, res) {
    console.log(req.body);
    const { name, email, password } = req.body;

    const us = User.create({
      name,
      email,
      password,
      status: 0
    });

    return res.json(us);
  }
};

const { User } = require("../models");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Usuario não encontrado!" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Password incorreto!" });
    }

    return res.json({
      user,
      token: user.generateToken()
    });
  }
};

/*
 * check if email already exists
 * password hash
 * email lowercase
 */

const User = require("../model/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alreadyExsist = await User.findOne({ where: { email } }).exec();
    if (alreadyExsist) {
      res.status(401).send("Email already exsist");
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({ email: email.toLowerCase(), password: hash });

    const saveUser = await newUser.save();

    res.status(201).send(saveUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("something went wrong");
  }
};

module.exports = register;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../models/auth");
const generateAccessToken = (id, email, ispremiumuser) => {
  return jwt.sign(
    { signupuserId: id, email: email, ispremiumuser },
    process.env.JWT_KEY
  );
};

const signUp = async (req, res) => {

  const { email, password } = req.body;

  try {
    const user = await Auth.findOne({ email });

    if (user) {
      res.status(401).json({ statusCode: 401, message: "User Already Exist" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        const user = new Auth({ email: email, password: hash });
        await user.save();

        res
          .status(200)
          .json({ statusCode: 200, message: "user created successfully" });
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const signin = async(req,res,next) => {
  const {email,password}=req.body


  try {
    const data = await Auth.findOne({
      email
    });

    if (data) {
      bcrypt.compare(password, data.password, (err, result) => {
        if (err) {
          throw new Error("something went wrong");
        }

        if (result === true) {
          res.status(200).json({
            success: true,
            statusCode:200,
            message: "sign in success",
            token: generateAccessToken(
              data._id,
              data.email,
              // data[0].ispremiumuser
            ),
          });
        } else {
          res
            .status(400)
            .json({ success: false, message: "password is invalid" });
        }
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }












};

module.exports = { signUp, signin };

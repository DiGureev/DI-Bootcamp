import { register , login} from "../modules/users.module.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const _login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const row = await login(email.toLowerCase());
  
      if (row.length === 0)
        return res.status(404).json({ msg: "email not found" });
  
      const match = bcrypt.compareSync(password + "", row[0].password);
      if (!match) return res.status(404).json({ msg: "wrong password" });
  
      const userid = row[0].id;
      const useremail = row[0].email;

      const secret = process.env.ACCESS_TOKEN_SECRET
      const refreshSecret = process.env.REFRESH_TOKEN_SECRET

        const accesstoken = jwt.sign({ userid, useremail }, secret, {
            expiresIn: "10s",
          });

        const refreshToken = jwt.sign({ userid, useremail }, refreshSecret, {
          expiresIn: "1d",
        });
      
        res.cookie("token", accesstoken, {
            httpOnly: true,
            maxAge: 60 * 1000,
        });

        // req.headers.auth = refreshToken;

        res.setHeader('auth', refreshToken)
        
        // req.headers.auth = refreshToken;

      //   res.cookie("refresh", refreshToken, {
      //     httpOnly: true,
      //     maxAge: 60 * 1000 *60,
      // });

        // res.header("x-access-token", refreshToken)
        // res.header("x-access-token", refreshToken)
      
      
        res.json({ accesstoken,refreshToken });
        } catch (e) {
          console.log(e);
          res.status(404).json({ msg: "something went wrong!!!" });
        }
      };

export const _register = async (req, res) => {
  const { email, password } = req.body;

  const loweremail = email.toLowerCase();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password + "", salt);

  try {
    const row = await register(loweremail, hash);
    res.json(row);
  } catch (e) {
    console.log("_register=>", e);
    res.status(404).json({ msg: "email allready exist" });
  }
};


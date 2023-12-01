import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const verifytoken = async (req,res, next) => {
    console.log(req.headers['auth'])
    let accesstoken = req.cookies.token;
    const refresh = req.headers.auth;
    let userid = ''
    let useremail = ''

    console.log('acc =>', accesstoken)
    console.log('ref => ', refresh)

    if (!accesstoken){
        accesstoken = genaccessrefresh(refresh)};

    jwt.verify(accesstoken, process.env.ACCESS_TOKEN_SECRET, (err,decoded) => {
      if (err) {
        accesstoken = genaccessrefresh(refresh)};;
      })
      next();
}   


const genaccessrefresh = (ref) => {
  if (ref === null) return res.sendStatus(401);

  jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET, (err,decoded) => {
    console.log('decoded',decoded)
    userid = decoded.userid
    useremail = decoded.useremail
    if (err) {
      return res.status(403).json({ msg:"Not verified from refresh"})
    } else {
      return jwt.sign({ userid, useremail }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10s",
    })
    }
  })

  
}
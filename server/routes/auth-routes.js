const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router(); 
const {postCookie, } = require('../controller/auth-controller')
const User = require('../model/User');
const jwt = require ('jsonwebtoken'); 

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      const token = jwt.sign({ id: user.id}, "secret")
      console.log(user);
      if (user) {
        const cmp = await bcrypt.compare(req.body.password, user.password);
        if (cmp) {
          //   ..... further code to maintain authentication like jwt or sessions
          res.status(200).cookie("token", token ).send("Auth Successful");
          console.log('>>>>>>>>>>', token)
        } else {
          res.send("Wrong username or password.");
        }
      } else {
        res.send("Wrong username or password.");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error Occured");
    }
  });

router.get('/login', (req, res) => {
    console.log('user has access');
})

router.post('/signup', async (req, res) => {
    console.log(req.body);

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const insertResult = await User.create({
          email: req.body.email,
          password: hashedPassword,
          balance: 0
        });
        console.log(hashedPassword)
        res.send(insertResult); 
    } catch (error) {
        console.log(error); 
        res.status(500).send("Internal Sever Error");
    }
})

const authenticationMiddleware = (req, res, next) => {
  if (!req.cookies.token) {
    res.send(403)
  } else {
    jwt.verify(req.cookies.token, "secret", (error, decoded) => {
      if (error){
        res.sendStatus(403)
      } else {
      console.log('decoded>>', decoded)
      req.userId = decoded.id;
      next();
      }
    })
  }
}

router.get('/secret', authenticationMiddleware, (req, res) => {
    console.log('req.userId', req.userId)
    res.send('welcome to the secret route')
});

module.exports = router; 
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ykola' });
});

router.get('/packSouscription', function(req, res, next) {
  res.render('packageForm', {title: 'ykola'})
});

/* post a contact */
router.post('/packSouscription', function(req, res, next) {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'ykola.rdc@gmail.com',
          pass: '1000a2000b3000c'
      }
  })

  const mailOptins = {
    from: req.body.email,
    to: 'ykola.rdc@gmail.com',
    subject: `Message from ${req.body.email}: ${req.body.subject} `,
    text: req.body.message,
}

    transporter.sendMail(mailOptins, (error, info)=>{
      if(error){
          console.log(error);
          res.send('error');
      }else{
          console.log('Email sent: '+ info.response);
          res.send('success');
      }
  })
});

router.get('/compte', function(req, res, next){
  res.render('packageForm', {title: 'ykola'})
})

module.exports = router;

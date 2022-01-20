const Mail = require('nodemailer/lib/mailer');
require('./db/conn');
const getinfo = require('./routers/getinfo');
const Alert = require('./model/alert');
const Person = require('./model/person');
const PORT = process.env.PORT || 3000;
const express = require('express');
const server = express();

server.use(getinfo);
server.use(express.json());
//email function start
function mail(aemail, apass, hemail, location, fname, lname) {
  try {
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: aemail,
        pass: apass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    var mailOptions = {
      from: aemail,
      to: hemail,
      subject: 'Sending Email using Node.js',
      text: `You friend ${fname} ${lname} needs urgent help at location : ${location}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return 'mail sent';
  } catch {
    return 'mail not sent';
  }
}
// email function end

// add user method
server.post('/adduser', async (req, res) => {
  try {
    const user = new Person(req.body);
    const createUser = await user.save();
    res.status(201).send(`User created : \n ${createUser} `);
    console.log('====================================');
    console.log('   Added the new Record    ');
    console.log('Check Below :');
    console.log(req.body);
    console.log('====================================');
  } catch (e) {
    res.status(400).send(e);
    console.log('====================================');
    console.log('Record Not Added.');
    console.log('====================================');
  }
});

// login method
server.post('/login', async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    const personData = await Person.find({ uemail: username }, 'upass');
    console.log(personData);
    let x = personData[0].upass;
    if (x == password) {
      res.send('yes');
    } else {
      res.send('no');
    }
  } catch (e) {
    res.send(e);
  }
});

// alert method
server.get('/alert/:uemail/:uloc', async (req, res) => {
  try {
    const email = req.params.uemail;
    const loc = req.params.uloc;
    const floc = `http://www.google.com/maps/place/${loc}`;
    const personData = await Person.find(
      { uemail: email },
      'hemail1 hemail2 hemail3 first_name last_name'
    );
    const x = personData[0].hemail1;
    const y = personData[0].hemail2;
    const z = personData[0].hemail3;
    const a = personData[0].first_name;
    const b = personData[0].last_name;

    mail('youemailaddress', 'password', x, floc, a, b);
    mail('youemailaddress', 'password', y, floc, a, b);
    mail('youemailaddress', 'password', z, floc, a, b);

    res.send(
      `Mail sent to ${x}, ${y}, ${z}. \n Message : \nYou friend ${a} ${b} needs urgent help at location : ${floc} `
    );
    console.log('====================================');
    console.log('   Helpers are    ');
    console.log('Check Below :');
    console.log(personData);
    console.log('====================================');
  } catch (e) {
    res.send(e);
  }
});

// staring the server
server.listen(PORT, () => {
  console.log(`Connection is live at PORT:${PORT}`);
});

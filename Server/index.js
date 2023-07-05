const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: req.body.subject,
        text: `From: ${req.body.name}\nEmail: ${req.body.email}\nPhone Number: ${req.body.phoneNumber}\n\n${req.body.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log(info.response);
            res.send('success');
        }
    })
    console.clear();
    console.log('Hello ' + req.body.name);
});


app.listen(PORT, () => {
    console.log(`Listening in Port: ${PORT}`);
});
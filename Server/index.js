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

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: capitalizeFirstLetter(req.body.subject),
        html: `
            <p>From: ${req.body.name}</p>
            <p>Email: ${req.body.email}</p>
            <p>Phone Number: ${req.body.phoneNumber}</p>
            <p>${req.body.message}</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log(info.response);
            res.send('success');
        }
    });

    console.clear();
    console.log('Hello ' + req.body.name);
});

app.listen(PORT, () => {
    console.log(`Listening in Port: ${PORT}`);
});

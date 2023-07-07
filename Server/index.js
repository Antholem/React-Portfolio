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
            <div style="border: 1px solid #ccc; padding: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
      <div>
        <p>From: ${req.body.name}<br>Email: ${req.body.email}<br>Contact: ${req.body.phoneNumber}</p>
        <p>${req.body.message}</p>
        <img src="logo.png" alt="Image" style="max-width: 100%; height: auto;">
      </div>
    </div>
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

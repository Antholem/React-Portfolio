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

    const currentYear = new Date().getFullYear(); // Get the current year

    const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: capitalizeFirstLetter(req.body.subject),
        html: `
        <div style="display: flex; justify-content: center;">
          <div style="padding: 15px; width: 100%;">
            <div style="border-bottom: 2px solid #f3f2f1; padding-bottom: 5px;">
              <img src="https://github.com/Antholem/React-Portfolio/blob/main/App/logo.png?raw=true" alt="Image" style="width: 50px; height: auto;" />
            </div>
            <div style="padding-top: 15px; padding-bottom: 15px;">
              <div style="padding-top: 5px; display: flex; align-items: center;">
                <img src="https://github.com/Antholem/React-Portfolio/blob/main/App/src/assets/images/email-icons/user.png?raw=true" alt="Phone Icon" style="width: 15px; height: auto; margin-right: 5px;" />
                <p style="margin: 0;">${req.body.name}</p>
              </div>
              <div style="padding-top: 5px; display: flex; align-items: center;">
                <img src="https://github.com/Antholem/React-Portfolio/blob/main/App/src/assets/images/email-icons/mail.png?raw=true" alt="Email Icon" style="width: 15px; margin-right: 5px;" />
                <p style="margin: 0;">${req.body.email}</p>
              </div>
              <div style="padding-top: 5px; display: flex; align-items: center;">
                <img src="https://github.com/Antholem/React-Portfolio/blob/main/App/src/assets/images/email-icons/number.png?raw=true" alt="Phone Icon" style="width: 15px; height: auto; margin-right: 5px;" />
                <p style="margin: 0;">${req.body.phoneNumber}</p>
              </div>
              <div style="padding-top: 20px;">
                <div>
                  <p>Dear Mr. Manalo,</p>
                </div>
                <div>
                  <p>${req.body.message}</p>
                </div>
                <div>
                  <p>Sincerely,<br>
                  ${req.body.name}</p>
                </div>
              </div>
            </div>
            <div style="border-top: 2px solid #f3f2f1;">
              <p style="color: #454545; font-size: 10px;">
                &copy; ${currentYear} Sam Manalo
              </p>
              <p style="color: #454545; font-size: 10px;">
                Mabalacat City, Pampanga, Philippines
              </p>
            </div>
          </div>
        </div>`,
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

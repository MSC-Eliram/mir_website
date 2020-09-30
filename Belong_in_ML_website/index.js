const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', () => {
    res.send('welcome to my forma');
})

app.post('/api/form', (req, res) => {

    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
        service:"hotmail",
        secureConnection: true,
        port: 587,
        auth: {
            user: 'info@mirlogic.com',
            pass: "howboutthemcowboys"
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    let mailOptions = {
        from: 'info@mirlogic.com',
        to: 'info@mirlogic.com',
        subject: `Message from ${data.firstName}`,
        html: `
            <h3>Contact Details</h3>
                <ul>
                    <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
                    <li><strong>Email:</strong> ${data.email}</li>
                </ul> 
            <h3>Message</h3> 
                <p>${data.message}</p>  
        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send('Success')
        }
        smtpTransport.close();
    })
})

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`);

})

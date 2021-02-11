const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

const user = "roneyword@hotmail.com";
const pass = "roney753951";
// const user = "roneyword@gmail.com";
// const pass = "roney753951";

app.get('/', (req, res) => res.send('oi mundo'));

app.get('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        // hotmail
        host: 'smtp.office365.com',
        port: '587',
        auth: {user, pass},

        // gmail
        // host: 'smtp.gmail.com',
        // port: '587',
        // auth: {user, pass},

        secure: false,
        tls: {
            rejectUnauthorized: false,
        }
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "roneyword@gmail.com",
        subject: "teste de envio de email com nodeJS numero 3",
        text: "estou enviado um email com nodeJS"
    }).then(info => {
        res.send(info);
    }).catch(error => {
        res.send(error)
    });
})

app.listen(port, () => console.log("running on port 3000"));
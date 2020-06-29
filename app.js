// - 용역의뢰 영문
// - 용역의뢰 send 눌렀을때 redirect 

const express = require('express')
const ejs = require('ejs')
const path = require('path')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

require('dotenv').config()

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/request', (req, res) => {
    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
        host: 'mail.gmens.co.kr',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMENS_EMAIL,
            pass: process.env.GMENS_PASSWORD
        }
    })

    var requestForm =
        "<p> 용역의뢰분야: " + req.body.field.trim() + "</p>" +
        "<p> 담당자 성명: " + req.body.nameOfRequester + "</p>" +
        "<p> 담당자 직책: " + req.body.positionOfRequester + "</p>" +
        "<p> 담당자 부서: " + req.body.departmentOfRequester + "</p>" +
        "<p> 담당자 이메일: " + req.body.emailOfRequester + "</p>" +
        "<p> 담당자 전화번호: " + req.body.phonenumberOfRequester + "</p>" +
        "<p> 건축물명: " + req.body.nameOfPlace + "</p>" +
        "<p> 소재지: " + req.body.addressOfPlace + "</p>" +
        "<p> 연면적: " + req.body.GFA + "</p>" +
        "<p> 규모: " + req.body.size + "</p>" +
        "<p> 건물용도: " + req.body.usage + "</p>" +
        "<p style='white-space: pre-wrap;'> 용역의뢰내용: <br>" + req.body.requestContent + "</p>";

    // Specify what the email will look like
    const mailOpts = {
        from: req.body.emailOfRequester,
        to: process.env.GMENS_EMAIL,
        subject: '[용역의뢰요청] by ' + req.body.nameOfRequester,
        html: requestForm
    }

    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log('success')
        }
    })
})


app.listen(process.env.PORT || 3001, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
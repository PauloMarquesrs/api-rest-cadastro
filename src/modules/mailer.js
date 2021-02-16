const nodemailer = require('nodemailer')

const { host, post, user, pass } = require('../config/mail.json')

const transport = nodemailer.createTransport({
    host,
    post,
    auth: { user, pass },
});

module.exports = transport
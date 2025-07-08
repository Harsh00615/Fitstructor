// const nodemailer = require('nodemailer');
import nodemailer from "nodemailer";

const transpoter = nodemailer.createTransport({
    service:'gmail',
    auth : {
        user:process.env.SENDER_EMAIL,
        pass:process.env.EMAIL_PASS
    }
});

export default transpoter;
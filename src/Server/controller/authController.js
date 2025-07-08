import bcrypt from "bcryptjs";
import userModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import transpoter from "../config/nodeMailer.js";
import { EMAIL_VERIFY_TEMPLATE , PASSWORD_RESET_TEMPLATE} from "../config/emailTemplate.js";

// CONTROLLER FOR REGISTER FUNCTION
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({ success: false, message: "Missing details" });
    }
    try {

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ name, email, password: hashPassword });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7 d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            samSite: process.env.NODE_ENV == "production" ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        const mailoptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome To FitStructor',
            text: `Welcome to FitStructor. your account has been successfully created using Email as : ${email}`
        };

        transpoter.sendMail(mailoptions, (err, data) => {
            if (err) {
                console.log("error occuered" + err);
            } else {
                console.log('info : ' + data.response);
            }
        })
        return res.json({ success: true , message : "login successfull"});



    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

// CONTROLLER FOR LOGIN FUNCTIONALITY
export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.json({ success: false, message: "email or password not provided" });
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "invalid email" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "incorrect password" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7 d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            samSite: process.env.NODE_ENV == "production" ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.json({ success: true , message : "login successfully"});
    } catch (error) {
        return res.json({ success: false, message : error.message });
    }
}

// CONTROLLER FOR LOGOUT FUNCTIONALITY
export const Logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            samSite: process.env.NODE_ENV == "production" ? 'none' : 'strict',
        })

        res.json({ success: true, message: "User Loged out" });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

// CONTROLLER FOR SENDING OUT THE OTP.
export const sendVerifyOtp = async (req, res) => {
    try {
        const { email, userID } = req.body;

        const user = await userModel.findById(userID);

        if (user.isAccountVerified) {
            return res.json({ success: true, message: "Account already Verified" });
        } else {
            const otp = String(Math.floor(100000 + Math.random() * 900000));
            user.verifyOtp = otp;
            user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;
            await user.save();

            const mailoptions = {
                from: process.env.SENDER_EMAIL,
                to: user.email,
                subject: 'VERIFY OTP',
                // text: `verify your Account using ${otp}. OTP is valid for 24 hours`,
                html: EMAIL_VERIFY_TEMPLATE.replace('{{otp}}',otp).replace('{{email}}',user.email)
            };

            transpoter.sendMail(mailoptions, (err, data) => {
                if (err) {
                    console.log("error occuered " + err);
                } else {
                    console.log('info : ' + data.response);
                }
            })
            return res.json({ success: true ,message : `OTP send successfully at your registered email`});
        }
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

// CONTROLLER FOR VERIFYING THE ACCOUNT USING THE OTP SEND.
export const verifyEmail = async (req, res) => {
    const { userID, otp } = req.body;

    if (!userID || !otp) {
        return res.json({ success: false, message: "Missing details" });
    }
    try {
        const user = await userModel.findById(userID);

        if (!user) {
            return res.json({ success: false, message: "user not found. Register first" });
        }
        if (user.verifyOtp === "" || user.verifyOtp !== otp) {
            return res.json({ success: false, message: "invalid otp" });
        }
        if (user.verifyOtpExpireAt < Date.now()) {
            return res.json({ success: false, message: "Otp expired" })
        }

        user.isAccountVerified = true;
        user.verifyOtp = "";
        user.verifyOtpExpireAt = 0;

        await user.save();
        const mailoptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Account verification',
            text: `your account has been verified successfully. THANKYOU TEAM FITSTRUCTOR`
        };

        transpoter.sendMail(mailoptions, (err, data) => {
            if (err) {
                console.log("error occuered " + err);
            } else {
                console.log('info : ' + data.response);
            }
        })
        return res.json({ success: true, message: "email Verified" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

// CONTROLLER TO CHECK IF THE USER IS ALREADY VERIFIED OR NOT.
export const isAuthenticated = async (req, res) => {
    // const { email } = req.body;
    // try {
    //     if (!email) {
    //         return res.status(400).json({ success: false, message: "email is required" })
    //     }
    //     const user = await userModel.findOne({ email });
    //     if (!user) {
    //         return res.status(404).json({ success: false, message: "user is not registered. Pelease register yourself" });
    //     }
    //     if (!user.isAccountVerified) {
    //         return res.json({ success: false, mesage: "account is not verified" });
    //     }
    //     return res.json({ success: true, message: "account is verified" });
    // } catch (error) {
    //     return res.status(500).json({ succes: false, message: error.message })
    // }
    try {
        return res.json({success:true})
    } catch (error) {
        return res.json({success:false , message : error.message})
    }
}

// CONTROLLER FOR GENERATING PASSWORD RESET OTP 
export const sendResetOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.json({ success: false, message: "email required" });
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "user is not registered" });
        }
        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.resendOtp = otp;
        user.resentOtpExpiresAt = Date.now() + 15 * 60 * 1000;
        await user.save();

        const mailoptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Password Reset OTP',
            // text: `your OTP for resetting the password is ${otp}. OTP is valid for 15 MINS`
            html :PASSWORD_RESET_TEMPLATE.replace('{{otp}}',otp).replace('{{email}}',user.email)
        };

        transpoter.sendMail(mailoptions, (err, data) => {
            if (err) {
                console.log("error occuered " + err);
            } else {
                console.log('info : ' + data.response);
            }
        })

        return res.json({ success: true, message: "reset OTP send successfully" });
    } catch (error) {
        return res.json({ success: false, error: error.message });
    }
}

// CONTROLLER FOR VERIFYING THE RESET OTP
export const verifyResetOtp = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
        return res.json({ success: false, message: "enter complete details" });
    }
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "user is not registered" });
        }
        if (user.resendOtp === "" || user.resendOtp !== otp) {
            return res.json({ success: false, message: "Invalid OTP" });
        }
        if (user.resentOtpExpiresAt < Date.now()) {
            return res.json({ success: false, message: " OTP has been expired" });
        }

        const hashPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashPassword;
        user.resentOtpExpiresAt = 0;
        user.resendOtp = "";

        await user.save();

        return res.json({ success: true, message: "password updated successfully" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}
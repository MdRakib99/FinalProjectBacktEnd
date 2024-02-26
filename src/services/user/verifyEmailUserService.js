const otpModel = require("../../models/users/OTPModel");
const userModel = require("../../models/users/userModel");
const emailUtility = require("../../utility/emailUtility");

const verifyEmailService = async (req) => {
  try {
    let email = req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000);

    let matchStage = { $match: { email: email } };
    let countStage = { $count: "total" };
    let userCount = await userModel.aggregate([matchStage, countStage]);

    if (userCount.length > 0) {
      // OTP Insert
      await otpModel.create({ email: email, otp: OTPCode });

      let emailText = `Your PIN Code is = ${OTPCode} `;
      console.log(emailText);
      let emailSubject = `Inventory Management PIN Verificatoion`;
      let sendEmail = await emailUtility(email, emailText, emailSubject);

      return { status: "success", data: sendEmail };
    }
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = verifyEmailService;

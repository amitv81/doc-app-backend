// Import Twilio module

//######
//docappsms@429630
//recovery: RgpUREZrCvYU4Cew2su07tiCcFYILizenfbC-GAD
///#####
// Initialize Twilio client
const accountSid = "AC59b4c2edccafa7f67cb6a9b089078b06";
const authToken = "5ce0262a8e2bec40ce28f1b99845fdcb";
//const twilio = require("twilio");
const client = require("twilio")(accountSid, authToken);

// Define an array of recipient phone numbers
const recipients = ["whatsapp:+919039479917"];

// Send a WhatsApp message to multiple numbers
exports.sendMessage = async (req, res) => {
  try {
    // for (const recipient of recipients) {
    //   await client.messages.create({
    //     from: "whatsapp:+14155238886",
    //     to: recipient,
    //     body: "Hello from your application!",
    //   });
    //   console.log(`Message sent to ${recipient}`);
    // }
    client.messages
      .create({
        from: "whatsapp:+14155238886",
        to: "whatsapp:+919039479917",
        body: "Hello from your application!",
      })
      .then((message) => console.log("Message sent"));
    return res
      .status(200)
      .json({ success: true, msg: "Message sendsuccessfully" });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

// export default sendMessage;
// Call the function to send messages

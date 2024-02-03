const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const accountSid = 'AC08b811f6baec7f4d798138e533a3b318';
const authToken = 'f31a6790546713083d77461bd0852ea0';
const twilioPhoneNumber = '+19032060503'; // Replace with your Twilio phone number

const client = twilio(accountSid, authToken);

app.post('/send-sms', async (req, res) => {
  const { to, message } = req.body;

  try {
    const twilioResponse = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to,
    });

    res.status(200).json({ success: true, messageSid: twilioResponse.sid });
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const rescue = require('express-rescue');
const sendMessage = require('../models/sendMessage');
const messagesTemplates = require('../models/messagesTemplates');

const receiveMessage = rescue(async (req, res, _next) => {
  const { message: { from } } = req.body;
  console.log(req.body.message);
  const messageResponse = await sendMessage(from, messagesTemplates.welcome.message);
  console.log(messageResponse.status);
  res.status(messageResponse.status).end();
});

module.exports = { receiveMessage };

const rescue = require('express-rescue');
const sendMessage = require('../models/sendMessage');
const messagesTemplates = require('../models/messagesTemplates');
const axios = require('axios');
require('dotenv').config();


const receiveMessage = rescue(async (req, res, _next) => {
  const {
    message: { from },
  } = req.body;
  const messageResponse = await sendMessage(from, messagesTemplates.location.message);
  console.log("Zenvia status: ", messageResponse.status);

  // const testBack = await axios({
  //   method: 'post',
  //   url: `${process.env.CNZ_API_URL}/users`,
  //   data: {
  //     data: {
  //       title: 'phone',
  //       content: {
  //         phone: '92993038154',
  //         name: 'Lucas Nardoso',
  //       },
  //     },
  //   },
  // });
  // console.log("Back-end status: ", testBack.status);
  res.status(messageResponse.status).end();
});

module.exports = { receiveMessage };

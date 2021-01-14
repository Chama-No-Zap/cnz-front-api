const axios = require('axios');
require('dotenv').config();

module.exports = (to, text) => axios({
  method: 'post',
  url: 'https://api.zenvia.com/v2/channels/whatsapp/messages',
  headers: {
    'X-API-TOKEN': process.env.ZENVIA_API_TOKEN,
  },
  data: {
    from: 'quill-tracker',
    to,
    contents: [
      {
        type: 'text',
        text,
      },
    ],
  },
});
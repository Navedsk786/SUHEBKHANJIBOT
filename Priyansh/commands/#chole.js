const fs = require("fs");
module.exports.config = {
  name: "chole",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("chole") ||
     react.includes("Chole") || react.includes("bhatura") || react.includes("Bhatura") ||
react.includes("Chola") ||
react.includes("chola") ||     
react.includes("bhature")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐂𝐇𝐎𝐋𝐄 𝐁𝐇𝐀𝐓𝐔𝐑𝐄 𝐊𝐇𝐀𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Chole.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
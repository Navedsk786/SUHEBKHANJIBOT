const fs = require("fs");
module.exports.config = {
  name: "love",
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
  if(react.includes("piyar") ||
     react.includes("love you") || react.includes("ILU") || react.includes("143") ||
react.includes("i love you") ||
react.includes("love") ||     
react.includes("LOVE YOU")) {
    var msg = {
        body: `${name}😘 𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 😘✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Love.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

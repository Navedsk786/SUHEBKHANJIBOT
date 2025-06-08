const fs = require("fs");
module.exports.config = {
  name: "by",
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
  if(react.includes("BYE") ||
     react.includes("BY") || react.includes("bye") || react.includes("Bye") ||
react.includes("chalta hu") ||
react.includes("ja raha hu") ||     
react.includes("BYE")) {
    var msg = {
        body: `${name}  𝐁𝐘𝐄 𝐁𝐘𝐄 𝐉𝐀𝐀𝐍 𝐀𝐏ÑÀ 𝐊𝐇À𝐘𝐀𝐋 𝐑𝐊𝐇À𝐍𝐀💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Bye.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

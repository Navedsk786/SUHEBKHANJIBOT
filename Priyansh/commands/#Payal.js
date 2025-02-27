const fs = require("fs");
module.exports.config = {
  name: "payal",
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
  if(react.includes("payal") ||
     react.includes("PAYAL") || react.includes("@payal payal") || react.includes("PAYAL JI") ||
react.includes("Junaid ki jaan 😘😘") ||
react.includes("payal") ||     
react.includes("payal payal")) {
    var msg = {
        body: `${name} 𝐊𝐈𝐘𝐀 𝐊𝐀𝐀𝐌 𝐇𝐀𝐈 𝐀𝐏𝐊𝐎 𝐉𝐔𝐍𝐀𝐈𝐃 𝐊𝐈 𝐉𝐀𝐀𝐍 𝐒𝐄 💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/payal.png`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

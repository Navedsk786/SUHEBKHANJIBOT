const fs = require("fs");
module.exports.config = {
  name: "JUNAID",
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
  if(react.includes("JUNAID") ||
     react.includes("Payal ki Jaan😘😘") || react.includes("@Junaid Siddiqui Ok JH") || react.includes("JUNAID JI") ||
react.includes("payal ki jaan 😘😘") ||
react.includes("junaid") ||     
react.includes("junaid")) {
    var msg = {
        body: `${name} 𝐊𝐈𝐀 𝐊𝐀𝐌 𝐇𝐀𝐈 𝐖𝐎 𝐏𝐀𝐘𝐀𝐋 𝐊𝐄 𝐒𝐀𝐓𝐇 𝐁𝐔𝐒𝐘 𝐇𝐀𝐈😘💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/`/noprefix/`/noprefix/p.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

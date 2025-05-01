const fs = require("fs");
module.exports.config = {
  name: "GOOD NIGHT ",
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
  if(react.includes("night") ||
     react.includes("Night") || react.includes("gn") || react.includes("Gn") ||
react.includes("GN") ||
react.includes("gn") ||     
react.includes("GN")) {
    var msg = {
        body: `${name}  𝐆𝐎𝐎𝐃  𝐍𝐈𝐆𝐇𝐓  𝐌𝐘 𝐒𝐖𝐄𝐄𝐓 𝐇𝐄𝐀𝐑𝐓💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Nt.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

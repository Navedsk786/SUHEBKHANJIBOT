const fs = require("fs");
module.exports.config = {
  name: "Rose",
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
  if(react.includes("ROSE") ||
     react.includes("Rose") || react.includes("BURGER") || react.includes("burger") ||
react.includes("rose") ||
react.includes("Gulab") ||     
react.includes("🌹")) {
    var msg = {
        body: `${name}🌹𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐑𝐎𝐒𝐄 𝐋𝐎🌹✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Rose.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

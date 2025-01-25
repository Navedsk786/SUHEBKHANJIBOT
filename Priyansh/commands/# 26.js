const fs = require("fs");
module.exports.config = {
  name: "26",
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
  if(react.includes("26") ||
     react.includes("") || react.includes("") || react.includes("Happy Republic day") ||
react.includes("") ||
react.includes("") ||     
react.includes("")) {
    var msg = {
        body: `${name} 𝐇𝐀𝐏𝐏𝐘 𝐑𝐄𝐏𝐔𝐁𝐋𝐈𝐂 𝐃𝐀𝐘 💐 ཫ༄𒁍≛⃝𝐌𝐑.𝐒𝐔𝐇𝐄𝐁✿`,attachment: fs.createReadStream(__dirname + `/noprefix/26.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇮🇳", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

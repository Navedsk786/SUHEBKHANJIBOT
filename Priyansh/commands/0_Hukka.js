const fs = require("fs");
module.exports.config = {
  name: "hukka",
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
  if(react.includes("HUKKA") ||
     react.includes("𝐡𝐮𝐤𝐤𝐚") || react.includes("HUKKA") || react.includes("Bidi") ||
react.includes("Cigarette") ||
react.includes("Hukka") ||     
react.includes("huk")) {
    var msg = {
        body: `${name} 𝕐𝔼ℍ 𝕃𝕆 𝕄𝔼ℝ𝕀 𝕁𝔸𝔸𝔸  𝕃𝕆 ℙ𝕀𝕀 𝕃𝕆 ℍ𝕌𝕂𝕂𝔸😹✿`,attachment: fs.createReadStream(__dirname + `/noprefix/HUKKA.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🚬", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

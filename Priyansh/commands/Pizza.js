const fs = require("fs");
module.exports.config = {
  name: "pizza",
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
  if(react.includes("PIZZA") ||
     react.includes("pizza") || react.includes("tea") || react.includes("Tea") ||
react.includes("piza") ||
react.includes("Nasta") ||     
react.includes("kha lo")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁À𝐁𝐘 𝐊𝐇𝐀 𝐋𝐎 𝐏𝐈𝐙𝐙𝐀💐 ཫ༄𒁍≛⃝𝐌𝐑.𝐒𝐔𝐇𝐄𝐁✿`,attachment: fs.createReadStream(__dirname + `/noprefix/rkk.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍕", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

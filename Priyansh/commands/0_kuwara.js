const fs = require("fs");
module.exports.config = {
  name: "kuwara",
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
  if(react.includes("single ") ||
     react.includes("randwa") || react.includes("KUWARA") || react.includes("shadi") ||
react.includes("kuwara") ||
react.includes("Akela") ||     
react.includes("SINGLE")) {
    var msg = {
        body: `${name} 𝐀𝐁𝐇𝐈 𝐓𝐈𝐌𝐄 𝐇𝐀𝐈 𝐁𝐄𝐓𝐀 𝐒𝐎𝐂𝐇 𝐋𝐄  💐 ཫ༄𒁍≛⃝𝐌𝐑.𝐒𝐔𝐇𝐄𝐁✿`,attachment: fs.createReadStream(__dirname + `/noprefix/shadi.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧍‍♂️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

const axios = require("axios");
const moment = require("moment-timezone");

const shayariList = [
  "🌅 𝙏𝙚𝙧𝙞 𝙝𝙖𝙣𝙨𝙞 𝙨𝙚 𝙝𝙖𝙧 𝙨𝙪𝙗𝙝𝙖 𝙠𝙞 𝙨𝙝𝙪𝙧𝙪𝙖𝙩 𝙝𝙤, 𝙣𝙖𝙮𝙖 𝙙𝙞𝙣 𝙩𝙪𝙟𝙝𝙨𝙚 𝙠𝙝𝙖𝙨 𝙝𝙤 ☀️",
  "❤️ 𝙏𝙪𝙟𝙝𝙚 𝙨𝙤𝙘𝙝𝙠𝙖𝙧 𝙝𝙞 𝙝𝙖𝙧 𝙨𝙪𝙗𝙝𝙖 𝙝𝙪𝙖 𝙠𝙖𝙧𝙩𝙞 𝙝𝙖𝙞, 𝙩𝙪𝙟𝙝𝙚 𝙥𝙖𝙖 𝙡𝙪𝙣 𝙮𝙖𝙝𝙞 𝙘𝙝𝙖𝙝𝙩𝙞 𝙝𝙖𝙞 💖",
  "🌙 𝙍𝙖𝙖𝙩 𝙠𝙞 𝙩𝙖𝙧𝙖𝙝 𝙩𝙝𝙖𝙢𝙚 𝙧𝙖𝙝𝙣𝙖, 𝙨𝙪𝙗𝙝𝙖 𝙠𝙞 𝙩𝙖𝙧𝙖𝙝 𝙨𝙖𝙖𝙩𝙝 𝙟𝙖𝙜𝙣𝙖 😴✨",
  "🌼 𝙃𝙖𝙧 𝙙𝙞𝙣 𝙚𝙠 𝙣𝙖𝙮𝙞 𝙠𝙖𝙝𝙖𝙣𝙞 𝙝𝙖𝙞, 𝙩𝙚𝙧𝙚 𝙗𝙞𝙣𝙖 𝙖𝙙𝙝𝙪𝙧𝙞 𝙯𝙞𝙣𝙙𝙖𝙜𝙞 𝙠𝙖 𝙖𝙝𝙨𝙖𝙖𝙨 𝙝𝙖𝙞 🌸",
  "💘 𝙏𝙚𝙧𝙖 𝙨𝙖𝙖𝙩𝙝 𝙝𝙤 𝙩𝙤 𝙝𝙖𝙧 𝙧𝙖𝙖𝙝 𝙖𝙨𝙖𝙣 𝙝𝙖𝙞, 𝙩𝙚𝙧𝙖 𝙨𝙖𝙮𝙖 𝙝𝙤 𝙩𝙤 𝙟𝙖𝙝𝙖𝙣 𝙝𝙖𝙞 🥰",
  "💭 𝙏𝙚𝙧𝙚 𝙠𝙝𝙮𝙖𝙖𝙡 𝙤𝙣𝙝𝙞 𝙢𝙚𝙞𝙣 𝙝𝙖𝙧 𝙨𝙪𝙗𝙝𝙖 𝙙𝙞𝙡 𝙠𝙤 𝙖𝙧𝙖𝙖𝙢 𝙢𝙞𝙡𝙩𝙖 𝙝𝙖𝙞 💓",
  "🌻 𝙈𝙚𝙧𝙞 𝙨𝙪𝙗𝙝𝙖𝙚𝙣 𝙖𝙗 𝙩𝙚𝙧𝙚 𝙣𝙖𝙖𝙢 𝙨𝙚 𝙝𝙤𝙩𝙞 𝙝𝙖𝙞 🌞",
  "🎵 𝙏𝙚𝙧𝙞 𝙖𝙖𝙬𝙖𝙯 𝙝𝙖𝙧 𝙨𝙪𝙗𝙝𝙖 𝙚𝙠 𝙣𝙖𝙮𝙖 𝙧𝙖𝙜 𝙡𝙖𝙖𝙩𝙖 𝙝𝙖𝙞 🎶",
  "💌 𝙃𝙖𝙧 𝙨𝙪𝙗𝙝𝙖 𝙢𝙚𝙧𝙖 𝙥𝙮𝙖𝙧 𝙩𝙪𝙟𝙝𝙚 𝙚𝙠 𝙣𝙖𝙮𝙖 𝙥𝙖𝙜𝙝𝙖𝙖𝙢 𝙙𝙚𝙩𝙖 𝙝𝙖𝙞 💝",
  "🌺 𝙅𝙤 𝙗𝙖𝙖𝙩𝙚𝙞𝙣 𝙩𝙪𝙢𝙨𝙚 𝙣𝙖 𝙝𝙪𝙞𝙣, 𝙬𝙤 𝙨𝙝𝙖𝙮𝙖𝙧𝙞 𝙗𝙖𝙣 𝙜𝙖𝙮𝙞𝙣 🌹"
];

const imageLinks = [
  "https://i.imgur.com/jHGiMXB.jpeg",
  "https://i.imgur.com/SZuKQcV.jpeg",
  "https://i.imgur.com/YbDFR4M.jpeg",
  "https://i.imgur.com/xGlwWMl.jpeg",
  "https://i.imgur.com/ir50pxR.jpeg",
  "https://i.imgur.com/mqG4j4q.jpeg",
  "https://i.imgur.com/tbyDsQo.jpeg",
  "https://i.imgur.com/xciNKHb.jpeg",
  "https://i.imgur.com/thVLlu3.jpeg",
  "https://i.imgur.com/XyYETpZ.jpeg",
  "https://i.imgur.com/8ppbD5V.jpeg"
];

const hindiDays = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
const hindiMonths = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"];

module.exports.config = {
  name: "autotime",
  version: "1.0.4",
  hasPermission: 2,
  credits: "Raj",
  description: "Auto time + shayari in all groups",
  commandCategory: "⏰ Auto",
  usages: "Autopost every hour to all groups",
  cooldowns: 5
};

module.exports.onLoad = function ({ api }) {
  const interval = 60 * 60 * 1000; // 1 hour

  setInterval(async () => {
    const now = moment().tz("Asia/Kolkata");

    const hour = now.format("HH");
    const minute = now.format("mm");
    const time = `${hour}:${minute}`;
    const date = `${now.date()}/${hindiMonths[now.month()]}/${now.year()}`;
    const day = hindiDays[now.day()];
    const shayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const imageUrl = imageLinks[Math.floor(Math.random() * imageLinks.length)];

    const message = `❁━━━━━【 𝗧𝗜𝗠𝗘 】━━━━━❁

🕒 𝗧𝗜𝗠𝗘 ➪ ${time}
📅 𝗗𝗔𝗧𝗘 ➪ ${date}
📆 𝗗𝗔𝗬 ➪ ${day}

「📝 𝗦𝗛𝗔𝗬𝗔𝗥𝗜 」
${shayari}

❁━━━━【 𝐒𝐔𝐇𝐄𝐁 𝐊𝐇𝐀𝐍 】━━━━❁`;

    const allThreads = global.data.allThreadID || [];

    for (const threadID of allThreads) {
      try {
        const res = await axios.get(imageUrl, { responseType: "stream" });
        api.sendMessage({ body: message, attachment: res.data }, threadID);
      } catch (err) {
        api.sendMessage(message + "\n⚠️ (इमेज नहीं मिली)", threadID);
      }
    }
  }, interval);
};

module.exports.run = () => {}; // Made By Raj

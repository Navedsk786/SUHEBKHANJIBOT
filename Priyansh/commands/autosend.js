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
  "🌺 ⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐔𝐃𝐚𝐚𝐒 𝐇𝐮 𝐏𝐚𝐑 𝐓𝐮𝐉𝐡𝐒𝐞 𝐍𝐚𝐑𝐚𝐙 𝐍𝐚𝐇𝐢 𝐓𝐞𝐑𝐞 𝐏𝐚𝐒𝐬 𝐍𝐚𝐇𝐢 𝐉𝐡𝐨𝐨𝐓 𝐊𝐚𝐇𝐮 𝐓𝐨 𝐬𝐁 𝐊𝐮𝐜𝐇 𝐇 𝐌𝐞𝐑𝐞 𝐏𝐚𝐒𝐒 𝐎𝐫 𝐒𝐚𝐜𝐇 𝐊𝐚𝐇𝐚 𝐓𝐨 𝐓𝐞𝐑𝐞 𝐒𝐢𝐖𝐚 𝐊𝐮𝐂𝐡 𝐊𝐇𝐚𝐚𝐒 𝐍𝐚𝐇𝐢 ＿】 🌹",
 "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐖𝐨𝐇 𝐊𝐡𝐮𝐒𝐡 𝐇𝐀𝐢 𝐏𝐚𝐑 𝐒𝐡𝐚𝐘𝐚𝐝 𝐇𝐮𝐌 𝐒𝐞 𝐍𝐚𝐇𝐢 𝐖𝐨𝐇 𝐍𝐚𝐑𝐚𝐉 𝐇𝐚𝐢 𝐏𝐚𝐑 𝐒𝐡𝐚𝐘𝐚𝐝 𝐇𝐮𝐌 𝐒𝐞 𝐍𝐚𝐇𝐢 𝐊𝐨𝐍 𝐊𝐞𝐇𝐚𝐓𝐚 𝐇𝐚𝐢 𝐊𝐞 𝐔𝐧𝐊𝐞 𝐃𝐢𝐥𝐥 𝐌𝐞 𝐌𝐨𝐇𝐨𝐁𝐚𝐚𝐓 𝐍𝐚𝐇𝐢 𝐌𝐨𝐇𝐨𝐁𝐚𝐚𝐓 𝐇𝐚𝐢 𝐏𝐚𝐑 𝐒𝐡𝐚𝐘𝐚𝐝 𝐇𝐮𝐌 𝐒𝐞 𝐍𝐚𝐡𝐢  ＿】 " ,
"💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐊𝐢𝐓𝐍𝐚 𝐏𝐲𝐚𝐚𝐑𝐚 𝐇𝐚𝐢 𝐖𝐨 𝐒𝐡𝐀𝐪𝐒 𝐉𝐨 𝐌𝐞𝐑𝐢 𝐇𝐚𝐑 𝐙𝐮𝐁𝐚𝐚𝐍 𝐏𝐞 𝐒𝐡𝐚𝐌𝐢𝐋 𝐇𝐚𝐢 𝐘𝐞 𝐊𝐚𝐈𝐬𝐚 𝐈𝐬𝐇𝐪 𝐌𝐚𝐢 𝐌𝐞𝐑𝐚 𝐉𝐨 𝐀𝐝𝐇𝐮𝐑𝐚 𝐇𝐨𝐊𝐞 𝐁𝐡𝐢 𝐊𝐚𝐚𝐌𝐢𝐥 𝐇𝐚𝐢  ＿】 " ,
 "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐌𝐮𝐣𝐡𝐊𝐨 𝐀𝐢𝐒𝐚 𝐃𝐚𝐫𝐃 𝐌𝐢𝐋𝐚 𝐉𝐢𝐬𝐊𝐢 𝐃𝐚𝐖𝐀 𝐍𝐚𝐇𝐢 𝐏𝐚𝐢𝐑 𝐁𝐡𝐢 𝐊𝐡𝐮𝐒𝐡 𝐇𝐮𝐍 𝐌𝐮𝐣𝐇𝐞 𝐔𝐬 𝐒𝐞 𝐊𝐨𝐈 𝐆𝐢𝐥𝐀 𝐍𝐚𝐇𝐢 𝐀𝐮𝐑 𝐊𝐢𝐓𝐧𝐄 𝐀𝐚𝐧𝐒𝐮 𝐁𝐚𝐇𝐚𝐔𝐧 𝐀𝐛 𝐔𝐬 𝐊𝐞 𝐋𝐢𝐘𝐚 𝐉𝐢𝐬𝐊𝐨 𝐊𝐡𝐔𝐝𝐚 𝐍𝐞 𝐌𝐞𝐑𝐞 𝐍𝐚𝐬𝐄𝐄𝐛 𝐌𝐚𝐈𝐧 𝐋𝐢𝐤𝐇𝐚 𝐇𝐢𝐍𝐚𝐇𝐢 ＿】 " ,
 "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐓𝐞𝐑𝐢 𝐊𝐚𝐚𝐌𝐘𝐚𝐁𝐢 𝐏𝐚𝐑 𝐓𝐚𝐑𝐞𝐞𝐅 𝐓𝐞𝐑𝐢 𝐊𝐨𝐒𝐇𝐢𝐒𝐡 𝐏𝐫 𝐓𝐚𝐚𝐍𝐚 𝐇𝐨𝐠𝐚 𝐓𝐞𝐑𝐞 𝐃𝐮𝐤𝐇 𝐌𝐞 𝐊𝐮𝐂𝐡 𝐋𝐨𝐆 𝐓𝐞𝐑𝐞 𝐒𝐮𝐊𝐡 𝐌𝐞 𝐙𝐚𝐌𝐚𝐚𝐍𝐚 𝐇𝐨𝐆𝐚  ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭" ,
"＿ 𝐍𝐚𝐚 𝐑𝐚𝐬𝐓𝐨𝐍 𝐍𝐞 𝐒𝐚𝐚𝐓𝐡 𝐃𝐢𝐘𝐚 𝐍𝐚 𝐌𝐚𝐧𝐙𝐢𝐥 𝐍𝐞 𝐈𝐧𝐓𝐞𝐙𝐚𝐚𝐑 𝐊𝐢𝐘𝐚 𝐌𝐞𝐢𝐍 𝐊𝐲𝐀 𝐥𝐢𝐊𝐇𝐮 𝐀𝐩𝐍𝐢 𝐙𝐢𝐧𝐃𝐚𝐆𝐢 𝐏𝐚𝐑 𝐌𝐞𝐑𝐞 𝐒𝐚𝐚𝐓𝐡 𝐓𝐨 𝐔𝐦𝐞𝐞𝐃𝐨𝐧 𝐍𝐞 𝐁𝐡𝐈 𝐌𝐚𝐙𝐚𝐚𝐊 𝐊𝐢𝐘𝐚 ＿" ,
 "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐊𝐚𝐈𝐬𝐚 𝐃𝐢𝐤𝐇𝐓𝐚 𝐇𝐮 𝐊𝐚𝐈𝐒𝐚 𝐋𝐚𝐆𝐓𝐚 𝐇𝐮 𝐊𝐲𝐀 𝐅𝐚𝐑𝐪 𝐏𝐚𝐑𝐓𝐚 𝐇𝐚𝐈 𝐓𝐞𝐑𝐞 𝐁𝐚𝐃 𝐊𝐢𝐒𝐢 𝐊𝐨 𝐀𝐚𝐜𝐇𝐚 𝐋𝐚𝐠𝐍𝐚 𝐁𝐡𝐈 𝐌𝐮𝐣𝐇𝐞 𝐀𝐚𝐜𝐇𝐚 𝐍𝐚𝐇𝐢 𝐋𝐚𝐠𝐓𝐚 ＿】",
 "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐍𝐚 𝐉𝐚𝐚𝐍𝐞 𝐊𝐢𝐒 𝐓𝐚𝐑𝐚𝐇 𝐊𝐚 𝐈𝐬𝐇𝐪 𝐊𝐚𝐑 𝐑𝐞𝐇𝐞 𝐇𝐚𝐈𝐧 𝐇𝐮𝐌 𝐉𝐢𝐒𝐤𝐄 𝐇𝐨 𝐍𝐚𝐇𝐢 𝐒𝐚𝐊𝐭𝐄 𝐔𝐬 𝐇𝐢 𝐊𝐞 𝐇𝐢 𝐊𝐞 𝐇𝐨 𝐑𝐞𝐡𝐄 𝐇𝐚𝐈 𝐇𝐮𝐌 ＿】 ",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐓𝐞𝐑𝐢 𝐂𝐡𝐚𝐇𝐚𝐓 𝐌𝐞𝐢𝐍 𝐢𝐓𝐧𝐚 𝐂𝐡𝐚𝐇𝐧𝐄 𝐓𝐇𝐢 𝐊𝐢 𝐏𝐚𝐢𝐑 𝐊𝐢𝐒𝐢 𝐂𝐡𝐚𝐇𝐧𝐄 𝐊𝐢 𝐂𝐡𝐚𝐇𝐚𝐓 𝐊𝐢 𝐂𝐡𝐚𝐇𝐚𝐓 𝐍𝐚 𝐑𝐞𝐇𝐢 ＿】 ",
 "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐙𝐢𝐧𝐃𝐚𝐆𝐢 𝐌𝐞𝐢𝐧 𝐀𝐠𝐚𝐑 𝐊𝐮𝐜𝐇 𝐁𝐮𝐑𝐚 𝐇𝐨 𝐓𝐨𝐇 𝐒𝐚𝐁𝐚𝐑 𝐑𝐚𝐊𝐡𝐎 𝐊𝐲𝐔𝐧𝐊𝐢 𝐑𝐨𝐨 𝐊𝐚𝐑 𝐅𝐢𝐑 𝐇𝐚𝐒𝐧𝐄 𝐊𝐚 𝐌𝐚𝐙𝐚 𝐇𝐢 𝐚𝐥𝐀𝐠 𝐇𝐨𝐓𝐚 𝐇𝐚𝐢 ＿】",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐈𝐦 𝐍𝐨𝐓 𝐎𝐤𝐚𝐘 𝐊𝐲𝐮𝐍 𝐊𝐢 𝐀𝐚𝐩𝐊𝐢 𝐘𝐚𝐚𝐃 𝐑𝐮𝐋𝐚𝐓𝐢 𝐇𝐚𝐢 𝐁𝐚𝐇𝐨𝐓 ＿】 ",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐓𝐮𝐣𝐇𝐞 𝐏𝐚𝐓𝐚 𝐊𝐲𝐔 𝐍𝐚𝐇𝐢 𝐂𝐡𝐚𝐥𝐓𝐚 ! 𝐤𝐢 𝐌𝐞𝐑𝐞 𝐓𝐞𝐑𝐚 𝐁𝐢𝐍𝐚 𝐃𝐢𝐥 𝐍𝐚𝐇𝐢 𝐋𝐠𝐓a ＿】",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿𝐆𝐮𝐬𝐬𝐀 𝐊𝐢𝐓𝐧𝐀 𝐁𝐡𝐢 𝐇𝐨 𝐏𝐲𝐚𝐚𝐑 𝐓𝐮𝐌 𝐇𝐢 𝐇𝐨 ＿】",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐌𝐢𝐋𝐞 𝐓𝐡𝐄 𝐄𝐤 𝐀𝐉𝐧𝐚𝐁𝐢 𝐁𝐚𝐧𝐊𝐚𝐑 𝐀𝐚𝐣 𝐌𝐞𝐫𝐞 𝐃𝐢𝐥 𝐊𝐢 𝐙𝐚𝐑𝐨𝐨𝐑𝐚𝐓 𝐇𝐨 𝐓𝐮𝐌 ＿】 ",
"⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐓𝐞𝐑𝐚 𝐒𝐚𝐚𝐓𝐡 🙄 𝐓𝐞𝐑𝐢 𝐁𝐚𝐚𝐓𝐞𝐢𝐍 🥰 𝐓𝐞𝐑𝐢 𝐂𝐚𝐑𝐞 😘 𝐓𝐞𝐑𝐢 𝐑𝐞𝐬𝐏𝐞𝐜𝐓 😍 𝐭𝐞𝐑𝐚 𝐏𝐲𝐚𝐑 😶 𝐁𝐚𝐬 𝐘𝐚𝐇𝐢 𝐂𝐡𝐚𝐇𝐢𝐘𝐞 𝐌𝐮𝐣𝐇𝐞 🙈🙈 ＿】 ",
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
"https://i.imgur.com/8ppbD5V.jpeg",
];

const hindiDays = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
const hindiMonths = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"];

module.exports.config = {
  name: "autotime",
  version: "1.0.5",
  hasPermission: 2,
  credits: "Raj",
  description: "Auto time + shayari in all groups",
  commandCategory: "⏰ Auto",
  usages: "Autopost every hour to all groups",
  cooldowns: 5
};

module.exports.onLoad = function ({ api }) {
  const interval = 60 * 60 * 1000; // हर 1 घंटे में

  setInterval(async () => {
    const now = moment().tz("Asia/Kolkata"); // ✔ इंडिया टाइम

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

❁━━━━【 𝐒𝐔𝐇𝐄𝐁 𝐊𝐇𝐀𝐍  】━━━━❁`;

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

module.exports.run = () => {};

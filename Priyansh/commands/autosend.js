const axios = require("axios");
const moment = require("moment-timezone");

const shayariList = [
  "तेरी हंसी से हर दिन की शुरुआत हो, नया साल बस तुझसे खास हो।",
  "वो सुबह कभी तो आएगी, जब हम साथ उठेंगे।",
  "हर दिन एक नई कहानी है, तेरे बिना अधूरी सी ज़िंदगानी है।",
  "चाँद भी शरमा जाए, जब तू मुस्कुराए।",
  "हमारी हर सुबह अब तेरे नाम की होती है।",
  "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐔𝐃𝐚𝐚𝐒 𝐇𝐮 𝐏𝐚𝐑 𝐓𝐮𝐉𝐡𝐒𝐞 𝐍𝐚𝐑𝐚𝐙 𝐍𝐚𝐇𝐢...】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭.",
  "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿𝐆𝐮𝐬𝐬𝐀 𝐊𝐢𝐓𝐧𝐀 𝐁𝐡𝐢 𝐇𝐨 𝐏𝐲𝐚𝐚𝐑 𝐓𝐮𝐌 𝐇𝐢 𝐇𝐨 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭.",
  "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐈𝐦 𝐍𝐨𝐓 𝐎𝐤𝐚𝐘 𝐊𝐲𝐮𝐍 𝐊𝐢 𝐀𝐚𝐩𝐊𝐢 𝐘𝐚𝐚𝐃 𝐑𝐮𝐋𝐚𝐓𝐢 𝐇𝐚𝐢 𝐁𝐚𝐇𝐨𝐓 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭.",
  "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐓𝐞𝐑𝐚 𝐒𝐚𝐚𝐓𝐡 🙄 𝐓𝐞𝐑𝐢 𝐁𝐚𝐚𝐓𝐞𝐢𝐍 🥰 𝐓𝐞𝐑𝐢 𝐂𝐚𝐑𝐞 😘 ... ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭.",
  "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐓𝐮𝐣𝐇𝐞 𝐏𝐚𝐓𝐚 𝐊𝐲𝐔 𝐍𝐚𝐇𝐢 𝐂𝐡𝐚𝐥𝐓𝐚 ! 𝐌𝐞𝐑𝐞 𝐓𝐞𝐑𝐚 𝐁𝐢𝐍𝐚 𝐃𝐢𝐥 𝐍𝐚𝐇𝐢 𝐋𝐠𝐓𝐚 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭."
];

const imageLinks = [
  "https://images.weserv.nl/?url=i.imgur.com/nKIS2pW.jpeg",
  "https://images.weserv.nl/?url=i.imgur.com/IzLMo0N.jpeg",
  "https://images.weserv.nl/?url=i.imgur.com/DarFEsx.jpeg",
  "https://images.weserv.nl/?url=i.imgur.com/uODmd0G.jpeg",
  "https://i.imgur.com/S4DWKgP.jpeg"
];

const hindiDays = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
const hindiMonths = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"];

module.exports.config = {
  name: "autotime",
  version: "1.0.2",
  hasPermission: 2,
  credits: "Suheb Khan", // ✅ Updated
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

𝗧𝗜𝗠𝗘 ➪ ${time}
𝗗𝗔𝗧𝗘 ➪ ${date}
𝗗𝗔𝗬 ➪ ${day}

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

module.exports.run = () => { };

const axios = require("axios");

const shayariList = [
  "तेरी हंसी से हर दिन की शुरुआत हो, नया साल बस तुझसे खास हो।",
  "वो सुबह कभी तो आएगी, जब हम साथ उठेंगे।",
  "हर दिन एक नई कहानी है, तेरे बिना अधूरी सी ज़िंदगानी है।",
  "चाँद भी शरमा जाए, जब तू मुस्कुराए।",
  "हमारी हर सुबह अब तेरे नाम की होती है।"
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
  credits: "Raj",
  description: "Auto time + shayari in all groups",
  commandCategory: "⏰ Auto",
  usages: "Autopost every hour to all groups",
  cooldowns: 5
};

module.exports.onLoad = function({ api }) {
  const interval = 60 * 60 * 1000; // 1 घंटा

  setInterval(async () => {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const time = `${hour}:${minute}`;
    const date = `${now.getDate()}/${hindiMonths[now.getMonth()]}/${now.getFullYear()}`;
    const day = hindiDays[now.getDay()];
    const shayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const imageUrl = imageLinks[Math.floor(Math.random() * imageLinks.length)];

    const message = `❁━━━━━【 𝗧𝗜𝗠𝗘 】━━━━━❁

𝗧𝗜𝗠𝗘 ➪ ${time}
𝗗𝗔𝗧𝗘 ➪ ${date}
𝗗𝗔𝗬 ➪ ${day}

「📝 𝗦𝗛𝗔𝗬𝗔𝗥𝗜 」
${shayari}

❁━━━━【 Nobita 】━━━━❁`;

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

module.exports.run = () => {}; // No command

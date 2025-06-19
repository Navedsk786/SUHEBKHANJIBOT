const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "shoti",
  version: "1.0",
  hasPermssion: 0,
  credits: "Raj",
  description: "Send a random shoti (short video)",
  commandCategory: "fun",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  try {
    const res = await axios.get("https://aryanx-shoti.vercel.app/v1/shoti");
    const data = res.data;

    const videoUrl = data.shotiurl || data.url;
    if (!videoUrl) {
      return api.sendMessage("❌ API didn't return a valid video URL.", event.threadID, event.messageID);
    }

    const caption =
      `🎬 𝗧𝗶𝘁𝗹𝗲: ${data.title || "N/A"}\n` +
      `👤 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲: ${data.username || "N/A"}\n` +
      `📛 𝗡𝗶𝗰𝗸𝗻𝗮𝗺𝗲: ${data.nickname || "N/A"}\n` +
      `🌍 𝗥𝗲𝗴𝗶𝗼𝗻: ${data.region || "N/A"}\n` +
      `⏱️ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${data.duration || "N/A"} sec`;

    const tempPath = path.join(__dirname, "cache", `shoti.mp4`);
    const videoStream = await axios.get(videoUrl, { responseType: "stream" });

    const writer = fs.createWriteStream(tempPath);
    videoStream.data.pipe(writer);

    writer.on("finish", () => {
      api.sendMessage(
        {
          body: caption,
          attachment: fs.createReadStream(tempPath)
        },
        event.threadID,
        () => fs.unlinkSync(tempPath), // delete after send
        event.messageID
      );
    });

    writer.on("error", (err) => {
      console.error("Write error:", err);
      api.sendMessage("❌ Failed to write the video file.", event.threadID, event.messageID);
    });

  } catch (err) {
    console.error("❌ Shoti Script Error:", err.message);
    api.sendMessage("❌ Error occurred while fetching shoti video.", event.threadID, event.messageID);
  }
};

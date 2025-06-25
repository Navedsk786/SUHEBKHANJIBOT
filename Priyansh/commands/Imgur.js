const axios = require("axios");

module.exports.config = {
  name: "imgur",
  version: "0.0.1",
  hasPermission: 0,
  credits: "ArYAN",
  description: "Upload image/video to Imgur",
  commandCategory: "utility",
  usages: "[reply to media] or [url]",
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args }) {
  const { messageID, threadID, messageReply } = event;

  let imageUrl = "";

  if (messageReply && messageReply.attachments.length > 0) {
    imageUrl = messageReply.attachments[0].url;
  } else if (args.length > 0) {
    imageUrl = args.join(" ");
  }

  if (!imageUrl) {
    return api.sendMessage("❌ Please reply to an image/video or provide a valid URL.", threadID, messageID);
  }

  try {
    const res = await axios.get(`https://aryan-xy-z.vercel.app/imgur?url=${encodeURIComponent(imageUrl)}`);

    if (res.data?.success && res.data.link) {
      return api.sendMessage(`✅ Uploaded to Imgur:\n${res.data.link}`, threadID, messageID);
    } else {
      return api.sendMessage("❌ Failed to upload. Try again later.", threadID, messageID);
    }
  } catch (err) {
    console.error("Imgur Upload Error:", err.message);
    return api.sendMessage("⚠️ An error occurred while uploading.", threadID, messageID);
  }
};

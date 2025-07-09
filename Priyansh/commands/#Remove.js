module.exports = {
  config: {
    name: "deleted",
    version: "1.0",
    author: "Raj",
    countDown: 0,
    role: 1, // only group admins/mods can use
    shortDescription: "reply msg me bole #remove to usko group se nikal do",
    longDescription: "reply message wale user ko group se nikalta hai jab koi uske reply me '#remove' likhta hai",
    category: "group",
    guide: {
      en: "Just reply to a user's message and type #remove"
    }
  },

  onStart: async function ({ api, event, threadsData }) {
    try {
      const { threadID, messageID, messageReply, body, senderID } = event;

      if (!messageReply || !body || body.toLowerCase() !== "#remove") return;

      const userToRemove = messageReply.senderID;

      if (!userToRemove) {
        return api.sendMessage("Kisi valid member ke reply me #remove likho.", threadID, messageID);
      }

      // Make sure bot itself is admin
      const threadInfo = await api.getThreadInfo(threadID);
      const botID = api.getCurrentUserID();
      const isBotAdmin = threadInfo.adminIDs.some(e => e.id == botID);

      if (!isBotAdmin) {
        return api.sendMessage("❌ Bot ko pehle group ka admin banao tabhi kisi ko nikal sakta hai.", threadID, messageID);
      }

      // Also check if sender is admin
      const isSenderAdmin = threadInfo.adminIDs.some(e => e.id == senderID);
      if (!isSenderAdmin) {
        return api.sendMessage("⛔ Sirf group admin hi kisi ko remove kar sakta hai.", threadID, messageID);
      }

      await api.removeUserFromGroup(userToRemove, threadID);
      api.sendMessage("✅ User ko group se nikal diya gaya!", threadID, messageID);

    } catch (err) {
      console.error(err);
    }
  }
};

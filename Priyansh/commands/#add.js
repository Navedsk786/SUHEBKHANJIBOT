module.exports = {
  config: {
    name: "addreply",
    version: "1.0",
    author: "Raj",
    countDown: 0,
    role: 0,
    shortDescription: "reply msg me bole #add to usko group me add karo",
    longDescription: "reply message wale user ko group me add karta hai jab koi uske reply me '#add' likhta hai",
    category: "group",
    guide: {
      en: "Just reply to a user's message and type #add"
    }
  },

  onStart: async function ({ api, event }) {
    try {
      const { threadID, messageID, messageReply, body, senderID } = event;

      if (!messageReply || !body || body.toLowerCase() !== "#add") return;

      const userToAdd = messageReply.senderID;

      if (!userToAdd) {
        return api.sendMessage("Kisi valid member ke reply me #add likho.", threadID, messageID);
      }

      await api.addUserToGroup(userToAdd, threadID, (err) => {
        if (err) {
          api.sendMessage("❌ User ko group me add nahi kiya ja saka. Shayad bot admin nahi hai ya user ne privacy settings on kiya hai.", threadID, messageID);
        } else {
          api.sendMessage("✅ User ko group me add kar diya gaya!", threadID, messageID);
        }
      });

    } catch (err) {
      console.error(err);
    }
  }
};

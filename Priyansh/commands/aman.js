const axios = require("axios");

module.exports.config = {
    name: "chatbot",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Mod by Aman",
    description: "AI Chatbot (Free API)",
    commandCategory: "Chatbot",
    usages: "Chat AI",
    cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event }) {
    try {
        const { threadID, senderID, body } = event;
        if (!body) return;

        const userMessage = body.trim();

        // FREE AI API Call
        const response = await axios.post("https://api-inference.huggingface.co/models/facebook/blenderbot-3B", 
        { inputs: userMessage }, 
        {
            headers: { Authorization: "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" } // 🔴 Yahan apni API key dalein
        });

        const botReply = response.data.generated_text;

        // AI ka reply bhejna
        api.sendMessage(`🤖 AI: ${botReply}`, threadID);
        
    } catch (error) {
        console.error("AI Chatbot Error:", error);
        api.sendMessage("⚠ Error: AI se reply lene me dikkat ho rahi hai!", event.threadID);
    }
};

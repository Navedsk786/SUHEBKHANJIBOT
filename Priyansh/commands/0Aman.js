const axios = require("axios");

module.exports.config = {
    name: "ai",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Mod by Aman",
    description: "AI Chatbot using Hugging Face API",
    commandCategory: "Chatbot",
    usages: "/ai <message>",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
    try {
        const { threadID } = event;
        const userMessage = args.join(" "); // User ka message lena

        if (!userMessage) {
            return api.sendMessage("⚠ Usage: /ai <message>", threadID);
        }

        // 🔴 Hugging Face API Key
        const API_KEY = "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";

        // AI API Call
        const response = await axios.post("https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill", 
        { inputs: userMessage }, 
        {
            headers: { Authorization: `Bearer ${API_KEY}` }
        });

        const botReply = response.data.generated_text || "Mujhe samajh nahi aaya!";

        // AI ka reply bhejna
        api.sendMessage(`🤖 AI: ${botReply}`, threadID);

    } catch (error) {
        console.error("AI Chatbot Error:", error);
        api.sendMessage("⚠ Error: AI se reply lene me dikkat ho rahi hai!", event.threadID);
    }
};

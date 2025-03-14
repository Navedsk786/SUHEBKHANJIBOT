// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const axios = require("axios");

const app = express();

// Facebook credentials (Add your tokens here)
const PAGE_ACCESS_TOKEN = "YOUR_PAGE_ACCESS_TOKEN"; 
const VERIFY_TOKEN = "YOUR_VERIFY_TOKEN"; 

app.use(bodyParser.json());

// Home Route
app.get("/", (req, res) => {
    res.send("MastiBot is Live and Ready to Rock! 🚀");
});

// Webhook Verification (For Facebook)
app.get("/webhook", (req, res) => {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
        console.log("Webhook Verified Successfully!");
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
});

// Webhook POST Request
app.post("/webhook", (req, res) => {
    const body = req.body;

    if (body.object === "page") {
        body.entry.forEach(entry => {
            entry.messaging.forEach(webhookEvent => {
                const senderId = webhookEvent.sender.id;

                if (webhookEvent.message) {
                    handleMessage(senderId, webhookEvent.message);
                }
            });
        });

        res.status(200).send("EVENT_RECEIVED");
    } else {
        res.sendStatus(404);
    }
});

// Message Handling Logic
async function handleMessage(senderId, message) {
    let response;

    if (message.text) {
        const text = message.text.toLowerCase().trim();

        // Custom Replies
        if (text.includes("hello") || text.includes("hi")) {
            response = { text: "Hello dost! Kaise ho? 😎" };
        } else if (text.includes("joke")) {
            response = { text: "Tumhari life se bada joke toh koi ho hi nahi sakta! 😂" };
        } else if (text.includes("masti")) {
            response = { text: "Masti toh tab hogi jab hum party karenge! 🕺🎉" };
        } else if (text.includes("bye")) {
            response = { text: "Chal theek hai bhai, phir milte hain! 👋" };
        } 
        // Assume any other text is a song request
        else {
            response = await getSongLink(text);
        }
    } else {
        response = { text: "Yeh kya bheja hai bhai? 😅" };
    }

    // Send the response
    callSendAPI(senderId, response);

    // Follow-up message to keep the conversation active
    setTimeout(() => {
        callSendAPI(senderId, { text: "Aur batao? Kuch masti karni hai kya? 🤪" });
    }, 2000);
}

// Fetch Song Link from JioSaavn API
async function getSongLink(songName) {
    try {
        const response = await axios.get(`https://saavn.dev/api/search/songs?query=${encodeURIComponent(songName)}`);
        const songs = response.data.data.results;

        if (songs.length > 0) {
            const firstSong = songs[0];
            return { text: `Suno yeh gaana: ${firstSong.title} - ${firstSong.url}` };
        } else {
            return { text: "Sorry bhai, yeh gaana nahi mila! 😅" };
        }
    } catch (error) {
        console.error("Error fetching song:", error);
        return { text: "Bhai kuch gadbad ho gayi, thoda der mein try kar! 😬" };
    }
}

// Send API Call
function callSendAPI(senderId, response) {
    const requestBody = {
        recipient: { id: senderId },
        message: response
    };

    request({
        uri: "https://graph.facebook.com/v12.0/me/messages",
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: "POST",
        json: requestBody
    }, (err, res, body) => {
        if (!err) {
            console.log("Message sent successfully!");
        } else {
            console.error("Error:", err);
        }
    });
}

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`MastiBot is running on port ${PORT}`));

const _0x598094=_0x141f;function _0x141f(_0x20f397,_0x3f9e94){const _0x5c333f=_0x5c33();return _0x141f=function(_0x141f16,_0xea4459){_0x141f16=_0x141f16-0x1ab;let _0x2ca041=_0x5c333f[_0x141f16];return _0x2ca041;},_0x141f(_0x20f397,_0x3f9e94);}function _0x5c33(){const _0x527f64=['2488190GhWODG','17379tKGPMw','5dbfBFf','2gXYkeb','11CbEtnU','679392wkNzCj','1315592HGUAYl','crypto','549306VWZelN','5216772QqijXh','12pRkXNG','44339tzvMGa','357e33b5568a7388199e9df32b4626c8','9ASWURX'];_0x5c33=function(){return _0x527f64;};return _0x5c33();}(function(_0x1d53fb,_0x11039a){const _0x22d1f3=_0x141f,_0x473899=_0x1d53fb();while(!![]){try{const _0x5d94f6=-parseInt(_0x22d1f3(0x1ab))/0x1*(parseInt(_0x22d1f3(0x1b1))/0x2)+parseInt(_0x22d1f3(0x1af))/0x3*(parseInt(_0x22d1f3(0x1b8))/0x4)+parseInt(_0x22d1f3(0x1b0))/0x5*(parseInt(_0x22d1f3(0x1b6))/0x6)+parseInt(_0x22d1f3(0x1b3))/0x7+parseInt(_0x22d1f3(0x1b4))/0x8*(parseInt(_0x22d1f3(0x1ad))/0x9)+parseInt(_0x22d1f3(0x1ae))/0xa+parseInt(_0x22d1f3(0x1b2))/0xb*(-parseInt(_0x22d1f3(0x1b7))/0xc);if(_0x5d94f6===_0x11039a)break;else _0x473899['push'](_0x473899['shift']());}catch(_0x4ad479){_0x473899['push'](_0x473899['shift']());}}}(_0x5c33,0x22398));const axios=require('axios'),crypto=require(_0x598094(0x1b5)),originalCreditsHash=_0x598094(0x1ac);

module.exports.config = {
  name: "hourlytime",
  version: "4.1.0",
  hasPermssion: 0,
  credits: "SHANKAR SIR🙏",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

function calculateMD5(input) {
  return crypto.createHash("md5").update(input).digest("hex");
}

const currentCreditsHash = calculateMD5(module.exports.config.credits);
if (currentCreditsHash !== originalCreditsHash) {
  console.error("Unauthorized credit modification detected!");
  throw new Error("The credits have been modified without authorization.");
}

const shayariList = [
  "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐔𝐃𝐚𝐚𝐒 𝐇𝐮 𝐏𝐚𝐑 𝐓𝐮𝐉𝐡𝐒𝐞 𝐍𝐚𝐑𝐚𝐙 𝐍𝐚𝐇𝐢 𝐓𝐞𝐑𝐞 𝐏𝐚𝐒𝐬 𝐍𝐚𝐇𝐢 𝐉𝐡𝐨𝐨𝐓 𝐊𝐚𝐇𝐮 𝐓𝐨 𝐬𝐁 𝐊𝐮𝐜𝐇 𝐇 𝐌𝐞𝐑𝐞 𝐏𝐚𝐒𝐒 𝐎𝐫 𝐒𝐚𝐜𝐇 𝐊𝐚𝐇𝐚 𝐓𝐨 𝐓𝐞𝐑𝐞 𝐒𝐢𝐖𝐚 𝐊𝐮𝐂𝐡 𝐊𝐇𝐚𝐚𝐒 𝐍𝐚𝐇𝐢 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐖𝐨𝐇 𝐊𝐡𝐮𝐒𝐡 𝐇𝐀𝐢 𝐏𝐚𝐑 𝐒𝐡𝐚𝐘𝐚𝐝 𝐇𝐮𝐌 𝐒𝐞 𝐍𝐚𝐇𝐢 𝐖𝐨𝐇 𝐍𝐚𝐑𝐚𝐉 𝐇𝐚𝐢 𝐏𝐚𝐑 𝐒𝐡𝐚𝐘𝐚𝐝 𝐇𝐮𝐌 𝐒𝐞 𝐍𝐚𝐇𝐢 𝐊𝐨𝐍 𝐊𝐞𝐇𝐚𝐓𝐚 𝐇𝐚𝐢 𝐊𝐞 𝐔𝐧𝐊𝐞 𝐃𝐢𝐥𝐥 𝐌𝐞 𝐌𝐨𝐇𝐨𝐁𝐚𝐚𝐓 𝐍𝐚𝐇𝐢 𝐌𝐨𝐇𝐨𝐁𝐚𝐚𝐓 𝐇𝐚𝐢 𝐏𝐚𝐑 𝐒𝐡𝐚𝐘𝐚𝐝 𝐇𝐮𝐌 𝐒𝐞 𝐍𝐚𝐡𝐢  ＿】  ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐌𝐮𝐣𝐡𝐊𝐨 𝐀𝐢𝐒𝐚 𝐃𝐚𝐫𝐃 𝐌𝐢𝐋𝐚 𝐉𝐢𝐬𝐊𝐢 𝐃𝐚𝐖𝐀 𝐍𝐚𝐇𝐢 𝐏𝐚𝐢𝐑 𝐁𝐡𝐢 𝐊𝐡𝐮𝐒𝐡 𝐇𝐮𝐍 𝐌𝐮𝐣𝐇𝐞 𝐔𝐬 𝐒𝐞 𝐊𝐨𝐈 𝐆𝐢𝐥𝐀 𝐍𝐚𝐇𝐢 𝐀𝐮𝐑 𝐊𝐢𝐓𝐧𝐄 𝐀𝐚𝐧𝐒𝐮 𝐁𝐚𝐇𝐚𝐔𝐧 𝐀𝐛 𝐔𝐬 𝐊𝐞 𝐋𝐢𝐘𝐚 𝐉𝐢𝐬𝐊𝐨 𝐊𝐡𝐔𝐝𝐚 𝐍𝐞 𝐌𝐞𝐑𝐞 𝐍𝐚𝐬𝐄𝐄𝐛 𝐌𝐚𝐈𝐧 𝐋𝐢𝐤𝐇𝐚 𝐇𝐢𝐍𝐚𝐇𝐢 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐊𝐢𝐓𝐍𝐚 𝐏𝐲𝐚𝐚𝐑𝐚 𝐇𝐚𝐢 𝐖𝐨 𝐒𝐡𝐀𝐪𝐒 𝐉𝐨 𝐌𝐞𝐑𝐢 𝐇𝐚𝐑 𝐙𝐮𝐁𝐚𝐚𝐍 𝐏𝐞 𝐒𝐡𝐚𝐌𝐢𝐋 𝐇𝐚𝐢 𝐘𝐞 𝐊𝐚𝐈𝐬𝐚 𝐈𝐬𝐇𝐪 𝐌𝐚𝐢 𝐌𝐞𝐑𝐚 𝐉𝐨 𝐀𝐝𝐇𝐮𝐑𝐚 𝐇𝐨𝐊𝐞 𝐁𝐡𝐢 𝐊𝐚𝐚𝐌𝐢𝐥 𝐇𝐚𝐢  ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐓𝐞𝐑𝐢 𝐊𝐚𝐚𝐌𝐘𝐚𝐁𝐢 𝐏𝐚𝐑 𝐓𝐚𝐑𝐞𝐞𝐅 𝐓𝐞𝐑𝐢 𝐊𝐨𝐒𝐇𝐢𝐒𝐡 𝐏𝐫 𝐓𝐚𝐚𝐍𝐚 𝐇𝐨𝐠𝐚 𝐓𝐞𝐑𝐞 𝐃𝐮𝐤𝐇 𝐌𝐞 𝐊𝐮𝐂𝐡 𝐋𝐨𝐆 𝐓𝐞𝐑𝐞 𝐒𝐮𝐊𝐡 𝐌𝐞 𝐙𝐚𝐌𝐚𝐚𝐍𝐚 𝐇𝐨𝐆𝐚  ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭" , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐍𝐚𝐚 𝐑𝐚𝐬𝐓𝐨𝐍 𝐍𝐞 𝐒𝐚𝐚𝐓𝐡 𝐃𝐢𝐘𝐚 𝐍𝐚 𝐌𝐚𝐧𝐙𝐢𝐥 𝐍𝐞 𝐈𝐧𝐓𝐞𝐙𝐚𝐚𝐑 𝐊𝐢𝐘𝐚 𝐌𝐞𝐢𝐍 𝐊𝐲𝐀 𝐥𝐢𝐊𝐇𝐮 𝐀𝐩𝐍𝐢 𝐙𝐢𝐧𝐃𝐚𝐆𝐢 𝐏𝐚𝐑 𝐌𝐞𝐑𝐞 𝐒𝐚𝐚𝐓𝐡 𝐓𝐨 𝐔𝐦𝐞𝐞𝐃𝐨𝐧 𝐍𝐞 𝐁𝐡𝐈 𝐌𝐚𝐙𝐚𝐚𝐊 𝐊𝐢𝐘𝐚 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐊𝐚𝐈𝐬𝐚 𝐃𝐢𝐤𝐇𝐓𝐚 𝐇𝐮 𝐊𝐚𝐈𝐒𝐚 𝐋𝐚𝐆𝐓𝐚 𝐇𝐮 𝐊𝐲𝐀 𝐅𝐚𝐑𝐪 𝐏𝐚𝐑𝐓𝐚 𝐇𝐚𝐈 𝐓𝐞𝐑𝐞 𝐁𝐚𝐃 𝐊𝐢𝐒𝐢 𝐊𝐨 𝐀𝐚𝐜𝐇𝐚 𝐋𝐚𝐠𝐍𝐚 𝐁𝐡𝐈 𝐌𝐮𝐣𝐇𝐞 𝐀𝐚𝐜𝐇𝐚 𝐍𝐚𝐇𝐢 𝐋𝐚𝐠𝐓𝐚 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐍𝐚 𝐉𝐚𝐚𝐍𝐞 𝐊𝐢𝐒 𝐓𝐚𝐑𝐚𝐇 𝐊𝐚 𝐈𝐬𝐇𝐪 𝐊𝐚𝐑 𝐑𝐞𝐇𝐞 𝐇𝐚𝐈𝐧 𝐇𝐮𝐌 𝐉𝐢𝐒𝐤𝐄 𝐇𝐨 𝐍𝐚𝐇𝐢 𝐒𝐚𝐊𝐭𝐄 𝐔𝐬 𝐇𝐢 𝐊𝐞 𝐇𝐢 𝐊𝐞 𝐇𝐨 𝐑𝐞𝐡𝐄 𝐇𝐚𝐈 𝐇𝐮𝐌 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐓𝐞𝐑𝐢 𝐂𝐡𝐚𝐇𝐚𝐓 𝐌𝐞𝐢𝐍 𝐢𝐓𝐧𝐚 𝐂𝐡𝐚𝐇𝐧𝐄 𝐓𝐇𝐢 𝐊𝐢 𝐏𝐚𝐢𝐑 𝐊𝐢𝐒𝐢 𝐂𝐡𝐚𝐇𝐧𝐄 𝐊𝐢 𝐂𝐡𝐚𝐇𝐚𝐓 𝐊𝐢 𝐂𝐡𝐚𝐇𝐚𝐓 𝐍𝐚 𝐑𝐞𝐇𝐢 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐙𝐢𝐧𝐃𝐚𝐆𝐢 𝐌𝐞𝐢𝐧 𝐀𝐠𝐚𝐑 𝐊𝐮𝐜𝐇 𝐁𝐮𝐑𝐚 𝐇𝐨 𝐓𝐨𝐇 𝐒𝐚𝐁𝐚𝐑 𝐑𝐚𝐊𝐡𝐎 𝐊𝐲𝐔𝐧𝐊𝐢 𝐑𝐨𝐨 𝐊𝐚𝐑 𝐅𝐢𝐑 𝐇𝐚𝐒𝐧𝐄 𝐊𝐚 𝐌𝐚𝐙𝐚 𝐇𝐢 𝐚𝐥𝐀𝐠 𝐇𝐨𝐓𝐚 𝐇𝐚𝐢 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐈𝐦 𝐍𝐨𝐓 𝐎𝐤𝐚𝐘 𝐊𝐲𝐮𝐍 𝐊𝐢 𝐀𝐚𝐩𝐊𝐢 𝐘𝐚𝐚𝐃 𝐑𝐮𝐋𝐚𝐓𝐢 𝐇𝐚𝐢 𝐁𝐚𝐇𝐨𝐓 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐓𝐮𝐣𝐇𝐞 𝐏𝐚𝐓𝐚 𝐊𝐲𝐔 𝐍𝐚𝐇𝐢 𝐂𝐡𝐚𝐥𝐓𝐚 ! 𝐤𝐢 𝐌𝐞𝐑𝐞 𝐓𝐞𝐑𝐚 𝐁𝐢𝐍𝐚 𝐃𝐢𝐥 𝐍𝐚𝐇𝐢 𝐋𝐠𝐓a ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿𝐆𝐮𝐬𝐬𝐀 𝐊𝐢𝐓𝐧𝐀 𝐁𝐡𝐢 𝐇𝐨 𝐏𝐲𝐚𝐚𝐑 𝐓𝐮𝐌 𝐇𝐢 𝐇𝐨 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐌𝐢𝐋𝐞 𝐓𝐡𝐄 𝐄𝐤 𝐀𝐉𝐧𝐚𝐁𝐢 𝐁𝐚𝐧𝐊𝐚𝐑 𝐀𝐚𝐣 𝐌𝐞𝐫𝐞 𝐃𝐢𝐥 𝐊𝐢 𝐙𝐚𝐑𝐨𝐨𝐑𝐚𝐓 𝐇𝐨 𝐓𝐮𝐌 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭." , "⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 【＿ 𝐓𝐞𝐑𝐚 𝐒𝐚𝐚𝐓𝐡 🙄 𝐓𝐞𝐑𝐢 𝐁𝐚𝐚𝐓𝐞𝐢𝐍 🥰 𝐓𝐞𝐑𝐢 𝐂𝐚𝐑𝐞 😘 𝐓𝐞𝐑𝐢 𝐑𝐞𝐬𝐏𝐞𝐜𝐓 😍 𝐭𝐞𝐑𝐚 𝐏𝐲𝐚𝐑 😶 𝐁𝐚𝐬 𝐘𝐚𝐇𝐢 𝐂𝐡𝐚𝐇𝐢𝐘𝐞 𝐌𝐮𝐣𝐇𝐞 🙈🙈 ＿】 ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭."
    ];",

];
const imgLinks = [
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

let lastSentHour = null;

const sendHourlyMessages = async (api) => {
  try {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentHour = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();

    if (minutes !== 0 || lastSentHour === currentHour) return;
    lastSentHour = currentHour;

    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = indiaTime.getDate();
    const month = months[indiaTime.getMonth()];
    const year = indiaTime.getFullYear();
    const day = days[indiaTime.getDay()];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message = `𝐎𝐰𝐧𝐞𝐫   ➻  𝐒𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧\n\n` +
      `𝐓𝐢𝐦𝐞 »»  ➪ ${hour12}:00 ${ampm} ⏰\n` +
      `𝐃𝐚𝐓𝐞 »»  ➪ ${date}✰${month}✰${year} 📆\n` +
      `✰🌸 𝗗𝗔𝗬 ➪ ${day} ⏳\n\n` +
      `${randomShayari}\n\n` +
      `🙈`;

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    const activeThreads = threadList.filter(thread => thread.isSubscribed);

    const sendPromises = activeThreads.map(async (thread) => {
      await api.sendMessage(
        { body: message, attachment: await axios.get(randomImage, { responseType: "stream" }).then(res => res.data) },
        thread.threadID
      );
    });

    await Promise.all(sendPromises);
    console.log("Message sent to all groups successfully!");
  } catch (error) {
    console.error("Error in hourly announcement:", error.message);
  }
};

module.exports.handleEvent = async ({ api }) => {
  setInterval(() => {
    sendHourlyMessages(api);
  }, 60000);
};

module.exports.run = async ({ api, event }) => {
  api.sendMessage("Hourly announcements are now active! Messages will be sent every hour (24/7).", event.threadID);
};

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
  "Raat ko jab chaand sitaare ki yaad mein tadapte hain 💕 Aap to chale jaate ho chhod kar humein 💕 Hum raat bhar aap se milne ko taraste hain.💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Chaand sa chehra dekhne ki ijaazat de do 💕 Mujhe ye shaam sajaane ki ijaazat de do 💕 Mujhe qaid kar lo apne ishq mein ya phir 💕 Mujhe ishq karne ki ijaazat de do.💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Dil se dil ki bas yehi dua hai 💕 Aaj phir se humko kuch hua hai 💕 Shaam dhalte hi aati hai yaad aap ki 💕 Lagta hai pyaar aapse hi hua hai.💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Bindass muskaao kya gham hai 💕 Zindagi mein tension kisko kam hai 💕 Achha ya bura to keval bharam hai 💕 Zindagi ka naam kabhi khushi kabhi gham hai.💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Aandhi mein bhi diye jala karte hain 💕 Kaanton mein hi gulaab khila karte hain 💕 Khush naseeb hoti hai woh shaam 💕 Jismein aap jaise log mila karte hain.🥀😌🌴-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Rabba singhaar, bhooli si surat 💕 Har baat par sacchi lagti ho 💕 Haan tum ho bilkul meri chai ke jaisi 💕 Mujhe saanvli hi achhi lagti ho… ❤️❤️❤️-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Apne haathon se teri maang sajaaun 💕 Tujhe main meri kismat banaooun 💕 Hawa bhi beech se guzarna sake 💕 Ho ijaazat to itne kareeb aaoon ...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Sooraj chaachu upar chadh pade hain 💕 Aur tapti garmi se humein tadpaate hain 💕 Dopahar ka khana ab pet ko jaana hai 💕 Phir takiya pakad kar chain ki neend so jaana hai.💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Aaj ek dopahar ki ghazal tere naam ho jaaye 💕 Mera savera bas tere naam ho jaaye 💕 Leta rahoon tera hi naam 💕 Aur subah se shaam ho jaaye.💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Ek sapne ki tarah sajaa kar rakhoon 💕 Apne is dil mein hamesha chhupaa kar rakhoon 💕 Meri taqdeer mere saath nahi 💕 Warna zindagi bhar ke liye use apna bana kar rakhoon...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Koi chaand sitaara hai 💕 Koi phool se bhi pyaara hai 💕 Jo har pal yaad aaye 💕 Woh pal pal sirf tumhaara hai....!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Basa le nazar mein surat tumhaari 💕 Din raat usi par hum marte rahen 💕 Khuda kare jab tak chale yeh saansein humaari 💕 Hum bas tumse hi pyaar karte rahen ॥💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Arz kiya hai.... 💕 Chai ke cup se uthte dhuen mein teri shakal nazar aati hai 💕 Aise kho jaate hain tere khayalon mein 💕 Aksar meri chai thandi ho jaati hai…...!!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Jitni khoobsurat yeh gulaabi subah hai 💕 Utna hi khoobsurat aapka har pal ho 💕 Jitni bhi khushiyaan aaj aapke paas hain 💕 Usse bhi zyada aane waale kal mein ho....!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Na mandir 💕 Na bhagwan 💕 Na pooja 💕 Na ashnan 💕 Subah uthte hi pehla kaam ek SMS aapke naam...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Pyaari si meethi si neendiya ke baad 💕 Raat ke haseen sapno ke baad 💕 Subah ke kuch naye sapno ke saath 💕 Aap hanste rahen apno ke saath.💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Subah subah aapki yaadon ka saath ho 💕 Meethi meethi parindon ki aawaaz ho 💕 Aapke chehre par hamesha muskaan ho 💕 Aur hamaari zindagi mein sirf aapka saath ho...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Raat ne chaadar samet li hai 💕 Sooraj ne kirnein bikher di hain 💕 Chalo uthho aur shukriya karo apne bhagwan ka 💕 Jisne humein yeh pyaari si subah di hai...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Raat ki tanhaayi mein akele the hum 💕 Dard ki mehfilon mein ro rahe the hum 💕 Aap humare bhale hi kuch nahi lagte 💕 Phir bhi aapko yaad kiye bina sote nahi hum...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Zindagi mein kaamyabi ki manzil ke liye 💕 Khwaab zaroori hai 💕 Aur khwaab dekhne ke liye neend 💕 To apni manzil ki pehli seedhi chadhho aur so jao...!! Good Night 💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Paagal sa baccha hoon 💕 Magar dil ka saccha hoon 💕 Thoda sa awaara hoon 💕 Magar tera hi to deewana hoon...!!💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Ae chaand taaro 💕 Zara unko ek laat maaro 💕 Bistar se unko neeche utaaro 💕 Karo unke saath fight 💕 Kyunki ye so gaye hain bina bole Good Night 💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Shikwa karo to unhein mazaak lagta hai 💕 Kitni shiddat se hum unhein yaad karte hain 💕 Ek woh hain jinko yeh sab kuch mazaak lagta hai…!! 💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂",
  "Teri khushi meri chahat hai 💕 Teri muskaan meri ibadat hai 💕 Tujhse juda hokar jee loon yeh mumkin nahi 💕 Kyunki tu meri zindagi ki aadat hai...!! 💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐒𝐔𝐇𝐄𝐁𓆪 𓃮❀꧂"
];
const imgLinks = [
"https://i.ibb.co/SDPVKCHk/received-1658902918087737.jpg",
"https://i.ibb.co/DPCjNvCn/received-1372477247338330.jpg",
"https://i.ibb.co/ZzB513BD/received-1199306371647867.jpg",
"https://i.ibb.co/S7vb9bNt/received-992977839702824.jpg",
"https://i.ibb.co/CKyTr6K6/received-690751813426718.jpg",
"https://i.ibb.co/NnJFrzLZ/received-660293663440253.jpg",
"https://i.ibb.co/NnJFrzLZ/received-660293663440253.jpg",
"https://i.ibb.co/NnJFrzLZ/received-660293663440253.jpg",
"https://i.ibb.co/NnJFrzLZ/received-660293663440253.jpg",
"https://i.ibb.co/LhspSYbB/received-552668450906408.jpg",
"https://i.ibb.co/LhspSYbB/received-552668450906408.jpg",
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

    const message = `❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n` +
      `✰🌸 𝗧𝗜𝗠𝗘 ➪ ${hour12}:00 ${ampm} ⏰\n` +
      `✰🌸 𝗗𝗔𝗧𝗘 ➪ ${date}✰${month}✰${year} 📆\n` +
      `✰🌸 𝗗𝗔𝗬 ➪ ${day} ⏳\n\n` +
      `${randomShayari}\n\n` +
      `❁ ━━━━━ ❃𝐌𝐑★𝐒𝐇𝐀𝐀𝐍❃ ━━━━━ ❁`;

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

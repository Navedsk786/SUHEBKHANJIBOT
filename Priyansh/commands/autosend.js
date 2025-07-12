const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: '𝐌.𝐑 𝐀𝐑𝐘𝐀𝐍',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞वो आई थी मेरे कब्र पर दिया जलाने के लिए रखा हुआ फूल भी ले गई दूसरे वाले को पटाने के लिए☜❁𝐌.𝐑✧ 𝐒𝐔𝐇𝐄𝐁 ❁' },
    { time: '1:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃☞सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है☜ 𝐌.𝐑✧ 𝐒𝐔𝐇𝐄𝐁 ❁' },
    { time: '2:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞कुछ लड़कियां तो इतनी सुन्दर होती है कि मैं मन ही मन में खुद को रिजेक्ट कर लेता हूं ☜ 𝐌.𝐑✧ 𝐒𝐔𝐇𝐄𝐁 ❁' },
    { time: '3:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞क्रश हो या ब्रश वक्त पर बदल लेना चाहिए वरना दिल हो या दांत टूट ही जाएगा☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },
    { time: '4:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞मजनू को लैला का SMS नही आया.. मजनू ने 3 दिन से खाना नहीं खाया.. मजनू मरने वाला था लैला के प्यार में और लैला बेती थी SMS FREE होने के इंतेज़ार में☜ ❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },
    { time: '5:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞पागल हे वो लोग जो अपने लवर को मिस किया करते हे अरे!! मिस करना हे तो मच्छर को करो जो अपनी जान पर खेल कर आप को किस किया करते हे|☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },
    { time: '6:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞ऐसे वक्त गुजर गया SMS करते हुए तेरे प्यार में , होश ही नहीं रहा कि मैं बैठा हूँ क्लास में , पीछे मुड़ कर देखा तो टीचर खड़ी थी पास में……..❃ ━━━━━ ❁ ☜❃ ━━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━ ❁' },
    { time: '7:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞हज़ारो की किस्मत तेरे हाथ थी अगर पास कर देता तो क्या बात थी? God:गर्लफ्रेंड थोड़ी कम बनता तो क्या बात थी? किताबे तो सारी तेरे पास थी ☜❃ ━━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━ ❁' },
    { time: '8:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞मेरी कब्र पे मत गुलाब लेके आना ना ही हाथों में चिराग लेके आना प्यासा हू मैं बरसो से राणा जी बोतल Mountain Dew की और एक ग्लास लेके आना.☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },
    { time: '9:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞जान ही चाहिए थी तो मांग कर ले लेती यूं बिना मेकअप के मेरे सामने क्यों आ गई ☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },
    { time: '10:00 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞चाईनीज मोहब्बत थी साहब टूट कर बिखर गई पर दिल हिंदुस्तानी था एक और पटा ली !☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },
    { time: '11:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞कौआ क्या जाने क्या सुर है क्या साज बंदर क्या जाने अदरक का मिजाज यही सोचकर यह सुंदर-सा मैसेज अपने प्यारे दोस्त को भेज रहे हैं आज☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },
    { time: '12:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞ए-मेरे दोस्त तुम कुछ और साल मेरे लिए सलामत रहना है क्योंकि मुझे अपनी शादी में तुझसे नागीन डांस जो करवाना है☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },
    { time: '1:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞जिंदगी में अगर दुख ना हो तो खुशियों का क्या मजा और अगर ऑफिस में बॉस ना हो, तो छुट्टियों का क्या मजा ☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },

    { time: '2:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞यारो मेरे मरने के बाद,आँसू मत बहाना… यारो… मेरे मरने के बाद, आँसू मत बहाना… ज़्यादा याद आए, तो अप्पर चले आना☜❃ ━━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━ ❁' },

    { time: '3:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞☜❃ ━━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━ ❁' },
    { time: '4:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞छम छम कर के आई वो छम छम कर के चली गयी मैं सिंदूर ले कर खड़ा था. और वो राखी बाँध कर चली गयी☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },
    { time: '5:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞प्यार मैं जो कभी पकड़े जाओ….. प्यार मैं जो कभी पकड़े जाओ….. देर ना करो,फॉरन ही भाई बन जाओ☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },
    { time: '6:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞जिस बस मे बैठी हो हसीनाए उस बस के सीसे चिटक ही जाते हे ड्राइवर चाहे जितनी तेज़ चलाए बस दीवाने तो फिर भी लटक ही जाते हे..☜❃ ━━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━ ❁' },
    { time: '7:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞उठा कर तलवार जब घोड़े पे सवार होते बाँध के साफ़ा जब तैयार होतेदेखती है दुनिया छत पे चढ़के कहते है की काश हम भी ऐसे होशियार होते☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' },

    { time: '8:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞Mere Dost Tum Bhi Likha Karo Shayari Tumhara Bhi Meri Tarah Naam Ho Jayega Jab Tum Par Bhi Padenge Ande Aur Tamatar To Shaam Ki Sabji Ka Intajaam Ho Jayega☜❃ ━━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━ ❁' },
    { time: '9:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞Julfo me foolo ko saja ke aayi hai, Chehare se dupatta utha ke aayi hai, Kisi ne puchha aaj badi khubsurat lag rahi ho, Mane kaha shayad aaj naha ke aayi ha☜❃ ━━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━ ❁' },
    { time: '10:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞ज़िंदगी की हर एक उड़ान बाकी है हर मोड़ पर एक इम्तिहान बाकी है अभी तो सिर्फ़ आप ही परेशान है मुझसे अभी तो पूरा हिन्दुस्तान बाकी है☜❃ ━━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━ ❁' },
    { time: '11:00 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentTime},\n✰ 𝗗𝗔𝗬 ➪ {currentDay},\n✰ 𝗧𝗜𝗠𝗘 ➪ {currentDate}\n\n❁ ━━━━━ ❃ ☞चाँद ने की होगी सूरज से महोब्बत इसलिए तो चाँद मैं दाग है मुमकिन है चाँद से हुई होगी बेवफ़ाई इसलिए तो सूरज मैं आग है☜❃ ━━𝐌𝐑.✧ 𝐒𝐔𝐇𝐄𝐁━━━ ❁' }
];

const videoLinks = [
    "https://i.imgur.com/XJ75KXm.jpeg",
    "https://i.imgur.com/XJ75KXm.jpeg",
    "https://i.imgur.com/XJ75KXm.jpeg"
];
module.exports.onLoad = () => setInterval(() => {
    const getRandom = array => array[Math.floor(Math.random() * array.length)];
    const now = new Date(Date.now() + 25200000);
    const currentTime = now.toTimeString().split(' ')[0];
    const currentDate = now.toLocaleDateString();
    const currentDay = now.toLocaleString('en-US', { weekday: 'long' });

    const selectedMessage = messages.find(entry => entry.timer === currentTime);

    if (selectedMessage) {
        const randomVideo = getRandom(videoLinks);
        const formattedMessage = selectedMessage.message[0]
            .replace("{currentTime}", currentTime)
            .replace("{currentDate}", currentDate)
            .replace("{currentDay}", currentDay);

global.data.allThreadID.forEach(threadID =>
            api.sendMessage({ body: formattedMessage, attachment: randomVideo }, threadID)
        );
    }
}, 1000);

module.exports.run = () => {};

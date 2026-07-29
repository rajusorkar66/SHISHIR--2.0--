const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "1.3.0",
    author: "亗•𝐒𝐇𝐈𝐒𝐇𝐈𝐑✿᭄",
    role: 0,
    shortDescription: "Owner information with image",
    category: "Information",
    guide: {
      en: "owner"
    }
  },

  onStart: async function ({ api, event }) {
    const ownerText = 
`╭─ 👑 Oᴡɴᴇʀ Iɴғᴏ 👑 ─╮
│ 👤 Nᴀᴍᴇ       : 亗•𝐒𝐇𝐈𝐒𝐇𝐈𝐑✿᭄
│🧸 Nɪᴄᴋ       : Vondo
│ 🎂 Aɢᴇ        : 17+
│ 💘 Rᴇʟᴀᴛɪᴏɴ : Sɪɴɢʟᴇ
│ 🎓 Pʀᴏғᴇssɪᴏɴ : Sᴛᴜᴅᴇɴᴛ
│ 📚 Eᴅᴜᴄᴀᴛɪᴏɴ : Iɴᴛᴇʀ 1st Yᴇᴀʀ
│ 🏡 Lᴏᴄᴀᴛɪᴏɴ : Sirajganj  
├─ 🔗 Cᴏɴᴛᴀᴄᴛ ─╮
│ 📘 Facebook  :https://www.facebook.com/share/1EZmT9Jx5L/ 
│ 💬 Messenger: m.me/61589806776925
│ 📞 WhatsApp  : wa.me/017493---26
╰────────────────╯`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "owner.jpg");

    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const imgLink = "https://vt.tiktok.com/ZS4LpuRRB/Z";

    const send = () => {
      api.sendMessage(
        {
          body: ownerText,
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(imgLink))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send);
  }
};

module.exports = {
 config: {
 name: "fork",
 version: "1.6",
 author: "〲𝗦𝗛𝗜𝗦𝗛𝗜𝗥ツ࿐",
 countDown: 2,
 role: 0,
 shortDescription: "Official GitHub Fork",
 category: "utils",
 guide: {
 en: "{pn} | fork"
 }
 },

 langs: {
 en: {
 current: `
 ✦━━━━━━━━━✦
👑 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗙𝗢𝗥𝗞 👑
✦━━━━━━━━━✦
👑 𝗢𝗪𝗡𝗘𝗥 ➜ 𝗦𝗛𝗜𝗦𝗛𝗜𝗥
🤖 𝗕𝗢𝗧 ➜ 𝗦𝗛𝗜𝗦𝗛𝗜𝗥 𝗕𝗢𝗧 𝗩𝟮
━━━━━━━━━━━
🌐 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗚𝗜𝗧𝗛𝗨𝗕
🔗 -তোমার নানির সাওয়া fork মারাইছিস ! Fork আসে শিশিরের প্যান্টের নিচে যা একটু দেখে আয় -😆
━━━━━━━━━━━
🎥 𝗩𝗜𝗗𝗘𝗢 𝗧𝗨𝗧𝗢𝗥𝗜𝗔𝗟 📺 https:ভিডিও মারাস যা google এ যা গিয়ে সানি লিওনের একটা দেখ -😄😄
━━━━━━━━━━
𝗦𝗛𝗜𝗦𝗛𝗜𝗥 𝗚𝗢𝗔𝗧 𝗕𝗢𝗧 𝗩𝟮
✦━━━━━━━━━✦
`
 }
 },

 onStart: async function ({ message, getLang }) {
 const link = "https://github.com/MAMUN-GOAT-BOT/V2-.git";
 return message.reply(getLang("current", link));
 },

 onChat: async function ({ message, event, getLang }) {
 const body = event.body?.trim().toLowerCase();

 if (body === "fork") {
 const link = "https://github.com/MAMUN-GOAT-BOT/V2-.git";
 return message.reply(getLang("current", link));
 }
 }
};

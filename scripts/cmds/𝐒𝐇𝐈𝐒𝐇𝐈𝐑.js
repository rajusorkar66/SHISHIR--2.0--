module.exports = {
  config: {
      name: "shishir",
          version: "1.0.4",
              author: "〲𝐒𝐇𝐈𝐒𝐇𝐈𝐑ツ࿐ T.T　o.O",
                  role: 0,
                      shortDescription: "𝐒𝐇𝐈𝐒𝐇𝐈𝐑 Profile ",
                          category: "Information",
                              guide: {
                                    en: "type 𝐒𝐇𝐈𝐒𝐇𝐈𝐑"
                                        }
                                          },
  onStart: async function () {},
  onChat: async function ({ api, event }) {
      const msg = event.body?.toLowerCase();
          if (!msg || msg !== "shishir") return;
    const profileText = 
    `⏤͟͟͞͞𝐒𝐇𝐈𝐒𝐇𝐈𝐑  𝗜𝗡𝗙𝗢 ☺︎
 ⏤͟͟͞͞☺︎ ┏━━━━━━━━━━━━━━━
 ⏤͟͟͞͞𝐍𝐚𝐦𝐞 ➯ 𝐒𝐇𝐈𝐒𝐇𝐈𝐑  ⏤͟͟͞͞ ᜊ
 
⏤͟͟͞͞𝐍𝐢𝐜𝐤𝐧𝐚𝐦𝐞 ➯⏤͟͟͞͞ 𝐕𝐎𝐍𝐃𝐎 😜

⏤͟͟͞͞𝐂𝐨𝐮𝐧𝐭𝐫𝐲 ➯⏤͟͟͞͞𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡 🇧🇩

🏤⏤͟͟͞͞𝐇𝐨𝐦𝐞 ➯⏤͟͟͞͞𝕊𝕚𝕣𝕒𝕛𝕘𝕒𝕟𝕛   ☠️

🏛️⏤͟͟͞͞𝐃𝐢𝐬𝐭𝐫𝐢𝐜𝐭 ➯⏤͟͟͞͞𝑺𝒊𝒓𝒂𝒋𝒈𝒂𝒏𝒋, 𝑩𝑫 💀

⛪⏤͟͟͞͞𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 ➯ 𝐈𝐧𝐭𝐞𝐫 1st 𝐘𝐞𝐚𝐫 ✍︎❤️‍🩹

⏤͟͟͞͞𝐀𝐠𝐞 ➯ 17+  😊❤️‍🩹

🕌⏤͟͟͞͞𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 ➯ 𝐈𝐬𝐥𝐚𝐦 ❤️♡♡

⏤͟͟͞͞𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 ➯ 𝑺i𝐧𝐠𝐥𝐞 ‍♡

⏤͟͟͞͞𝐁𝐞𝐬𝐭 𝐅𝐧𝐝➯ 𝑨𝑺𝑬 ,,🙃

⏤͟͟͞͞𝐅𝐯𝐭 𝐂𝐨𝐥𝐨𝐮𝐫➯ ⏤͟͟͞͞𝐁𝐥𝐚𝐜𝐤 😺🖤


 ⏤͟͟͞͞ ☻ 𝗬𝗢𝗨𝗥 𝗕𝗕𝗭 
 ⏤͟͟͞͞𝑂𝑊𝑁𝐸𝑅⏤☺︎𝐒𝐇𝐈𝐒𝐇𝐈𝐑 `;
    api.sendMessage(profileText, event.threadID, event.messageID);
      }
      };

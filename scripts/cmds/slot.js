const axios = require("axios");

// 🔹 SAME API
const API_URL = "https://balance-bot-api.onrender.com";

// 🔹 Get balance
async function getBalance(userID) {
  try {
    const res = await axios.get(`${API_URL}/api/balance/${userID}`);
    return res.data.balance || 100;
  } catch {
    return 100;
  }
}

// 🔹 Add balance
async function winGame(userID, amount) {
  try {
    const res = await axios.post(`${API_URL}/api/balance/win`, { userID, amount });
    return res.data.success ? res.data.balance : null;
  } catch {
    return null;
  }
}

// 🔹 Lose balance
async function loseGame(userID, amount) {
  try {
    const res = await axios.post(`${API_URL}/api/balance/lose`, { userID, amount });
    return res.data.success ? res.data.balance : null;
  } catch {
    return null;
  }
}

// 🔹 Slot Machine class
class SlotMachine {
  constructor() {
    this.symbols = ["🍒","🍊","🍋","🍉","🍇","⭐","7️⃣","💎"];
    this.payouts = {
      "💎💎💎": 100, "7️⃣7️⃣7️⃣": 50, "⭐⭐⭐": 30,
      "🍇🍇🍇": 20, "🍉🍉🍉": 15, "🍋🍋🍋": 10,
      "🍊🍊🍊": 8, "🍒🍒🍒": 5
    };
  }

  spin() {
    const reels = [];
    let isWin = Math.random() < 0.6; // 60% win chance

    if(isWin) {
      const winningCombos = Object.keys(this.payouts);
      const combo = winningCombos[Math.floor(Math.random() * winningCombos.length)];
      reels.push(...combo.split(''));
    } else {
      while(reels.length < 3) {
        const symbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];
        reels.push(symbol);
      }
      const resultStr = reels.join('');
      if(this.payouts[resultStr]) {
        reels[0] = this.symbols[Math.floor(Math.random() * this.symbols.length)];
      }
    }

    const result = reels.join('');
    const multiplier = this.payouts[result] || 0;
    return { reels, result, multiplier };
  }
}

// 🔹 Format balance
function formatBalance(num) {
  return num.toLocaleString("en-US") + " $";
}

// 🔹 Create final spin message
function createMessage(reels, bet, multiplier, newBalance) {
  const spinDisplay = reels.map(r => r || "❓").join(" | ");
  if(multiplier > 0) {
    return `🎰 Sʟᴏᴛ Mᴀᴄʜɪɴᴇ 🎰\n\n[ ${spinDisplay} ]\n\n🎉 Win!\n💵 Bet: ${formatBalance(bet)}\n✅ Won: ${formatBalance(bet*multiplier)}\n💳 New Balance: ${formatBalance(newBalance)}`;
  } else {
    return `🎰 Sʟᴏᴛ Mᴀᴄʜɪɴᴇ 🎰\n\n[ ${spinDisplay} ]\n\n💀 Loss\n💰 Bet: ${formatBalance(bet)}\n❌ Won: 0 $\n💳 New Balance: ${formatBalance(newBalance)}`;
  }
}

// 🔹 Module exports
module.exports = {
  config: {
    name: "slot",
    aliases: ["spin"],
    version: "1.2",
    author: "𝐒𝐇𝐈𝐒𝐇𝐈𝐑",
    role: 0,
    shortDescription: "Slot Machine 60% Win (Reply Based)",
    category: "economy"
  },

  onStart: async function({ api, event, args }) {
    const { threadID, senderID, messageID } = event;

    const currentBalance = await getBalance(senderID);
    const slot = new SlotMachine();

    let bet = args[0]?.toLowerCase() === "max" ? Math.floor(currentBalance*0.1) : parseFloat(args[0]);
    if(isNaN(bet) || bet < 10) bet = 10;
    if(bet > currentBalance) return api.sendMessage(
      `❌ Insufficient Balance\n💳 Balance: ${formatBalance(currentBalance)}\n💰 Bet: ${formatBalance(bet)}`,
      threadID,
      messageID // ✅ reply to command
    );

    // Initial spin message
    const spinMsg = await api.sendMessage(
      `🎰 Sʟᴏᴛ Mᴀᴄʜɪɴᴇ 🎰\n\n[ 🍉 | ❓ | ❓ ]\n\nSpinning...`,
      threadID,
      messageID // ✅ reply to command
    );
    await new Promise(r => setTimeout(r, 1500));

    // Spin reels
    const spinResult = slot.spin();
    const winAmount = Math.floor(bet * spinResult.multiplier);

    // Update balance
    let newBalance;
    if(winAmount > 0) newBalance = await winGame(senderID, winAmount);
    else newBalance = await loseGame(senderID, bet);

    // Final message
    const finalMsg = createMessage(spinResult.reels, bet, spinResult.multiplier, newBalance);
    await api.editMessage(finalMsg, spinMsg.messageID, threadID);
  }
};

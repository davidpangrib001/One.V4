let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/STK-20220410-WA0198.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Hmm...*', 'status@broadcast')
}
handler.customPrefix = /^(nyimak|hm...|hmmm|hmmmm)$/i
handler.command = new RegExp

module.exports = handler

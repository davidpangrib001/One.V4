let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await conn.send3ButtonLoc(m.chat, await(await fetch(image)).buffer(), `
Hai, ${ucapan()}

${user.banned ? 'kamu dibanned' : `๐๐๐ฎ๐ ๐๐๐๐ก๐๐ ๐จ๐๐ก๐๐ ๐จ๐๐ฉ๐ช ๐ฝ๐ค๐ฉ ๐๐๐๐ฉ๐จ๐๐ฅ๐ฅ. ๐๐๐ง๐๐ฅ ๐ฉ๐๐๐๐  ๐จ๐ฅ๐๐ข/๐ฉ๐๐ก๐ฅ๐ค๐ฃ/๐ข๐๐ข๐๐ฃ๐ฉ๐ ๐จ๐๐ซ๐ ๐ ๐ ๐ฃ๐ค๐ข๐ค๐ง ๐๐ฃ๐. ๐ผ๐๐ ๐ฎ๐๐ฃ๐ ๐๐๐จ๐ ๐จ๐๐ฎ๐ ๐๐๐ฃ๐ฉ๐ช *_?_*`}
`.trim(), watermark, user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '!owner' : '.menu', 'Panduan penggunaan', '.tutorbot', 'Verify', '.daftar Human.16', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi๐"
    }
    if (time > 10) {
        res = "Selamat siang๐๏ธ"
    }
    if (time >= 15) {
        res = "Selamat sore๐"
    }
    if (time >= 18) {
        res = "Selamat malam๐"
    }
    return res
}

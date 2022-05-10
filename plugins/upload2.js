const api = require('caliph-api')

api.tools.uploadFile(Buffer)
.then(console.log);

handler.help = ['upload2 (caption|reply media)']
handler.tags = ['tools']
handler.command = /^upload2$/i

module.exports = handler
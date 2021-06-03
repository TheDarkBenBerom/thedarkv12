const Discord = require('discord.js');
exports.run = async(client, message, args) => {
        if(!message.member.hasPermission("MANEGE_MESSAGES")) return;
      if(args[0] < 1) return message.channel.send('En az 1 Mesaj Silebilirsin')
      if(args[0] > 100)  return message.channel.send(`En fazla 100 Messaj Silebilirsin`)
      message.channel.bulkDelete(args[0]).then(deletedMessages => {
      if(deletedMessages.size < 2) return message.reply("Hiç mesaj silemedim!  (14 günden önceki mesajları silemem !)");})
      message.channel.send(`${args[0]} Adet Mesaj Sildim `)

};


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'sil',
  usage: 'sil'
};
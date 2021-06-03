const Discord = require('discord.js');
exports.run = async(client, message, args) => {
const kur = new Discord.MessageEmbed()
.setTitle('Abone Sistemi Nasıl Açılır')
.setDescription(`> +abone rol <@abonerol> Komutunu Kullanarak Abone Rolünü Ayarlarsanıız \n \n > +abone yetkili <@abone-rol-etiketi> Abone Komutunu Yetkililere özel yaparsımız **Yakında**\n \n > +abone ver <@kullanıcı> \n `)
.setColor('RANDOM')
message.channel.send(kur)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'abone-kur',
  description: 'abone-kur',
  usage: 'abone-kur'
};
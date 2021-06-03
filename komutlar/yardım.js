const Discord = require('discord.js');
exports.run = async(client, message, args) => {
      const embed = new Discord.MessageEmbed()
      .setTitle(` Uwu Yardım Menüme Bak UwU \<:sunglasses:812670605828423710> `)
      .addFields(
        {
          name : ('> +kulanıcı'),
          value : ('Kulanıcı komutlarını atar . '),
          inline : true
        },
        {
          name : ('> +eğlence'),
          value : ('Yakında'),
          inline : false
        },
        {
          name : ('> +yetkili'),
          value : ('Yetkili Menüsünü Atar.'),
          inline : false
        },
        
      )
      .setImage('https://media.discordapp.net/attachments/803531755822383104/818436436529119262/standard.gif')
      .setURL(`https://thedark.gq`)
      .setFooter('TheDark|TheDarkBot')


          message.channel.send(embed)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};

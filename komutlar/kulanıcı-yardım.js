const Discord = require('discord.js');
exports.run = async(client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Kullanıcı Komutları')
        .setColor('RANDOM')
        .addFields(
            {
                name : ('+avatar'),
                value : ('Karizmatik avatarını atar.')
            },
            {
                name : ('+suggest'),
                value : ('Bota görmek izstediğiniz özelikler ... Destek sunucumuzda Görünecektir.')
            },
            {
                name : ('+ping'),
                value : ('Botun pingini atar')
            },
            {
                name : ('+bug'),
                value : ('Botaki bugları bildirirsiniz')
            }

        )
        .setFooter('TheDark | TheDark Bot')
        .setImage('https://media.discordapp.net/attachments/803531755822383104/818436436529119262/standard.gif')

        message.channel.send(embed)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'kullanıcı',
  usage: 'kullanıcı'
};

const Discord = require('discord.js');
exports.run = async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Eğlence Komutları')
        .setColor('RANDOM')
        .addFields(
            {
                name : ('+token'),
                value : ('Bot Size Tokenini atar.')
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
  name: 'eğlence',
  description: 'eğlence',
  usage: 'eğlence'
};
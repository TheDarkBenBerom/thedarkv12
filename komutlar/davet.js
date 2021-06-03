const Discord = require('discord.js');
exports.run = async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Davet')
        .setColor('#ff0000')
        .setDescription('UwU Beni Davet etki süt alabileyim \n Pişman Olmayacaksın')//linkleri siz koyarsınız
        .addFields(
            {
                name : ('**Yakında**'),
                value : ('Yakında')
            },
            {
                name : ('**Yakında**'),
                value :('Yakında')
            }
            )
            .addFields(
                {
                    name : ('**Yakında**'),
                    value : ('Yakında')
                },
                {
                    name : ('**Yakında**'),
                    value : ('Yakında')
                }
            )
            .addFields(
                {
                    name : ('Yakında'),
                    value : ('Yakında')
                }
            )
            .setImage('https://media.discordapp.net/attachments/803531755822383104/818436436529119262/standard.gif')
            .setFooter('TheDark Bot')
               

            message.channel.send(embed)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'davet',
  usage: 'davet'
};

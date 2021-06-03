const Discord = require('discord.js');
exports.run = async(client, message, args) => {

let kullanıcı = message.mentions.users.first() || message.author;
    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('**İşte karizmatik avatarın**')
      .setURL(`${kullanıcı.avatarURL({ format: "png" , size: 1024})}`)
      .setImage(` ${kullanıcı.avatarURL({ format: "png" , size: 1024})} `)
      .setFooter('TheDark|TheDarkBot')
       message.channel.send(embed)


};
exports.conf = {
  aliases: ["pp"],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'avatar',
  usage: 'avatar'
};
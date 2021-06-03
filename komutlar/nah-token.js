const Discord = require('discord.js');
exports.run = async(client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('İşte Tokenim')
        .setImage(`https://cdn.glitch.com/0bfa52f0-05b6-4cf2-bbc8-78e2578500b1%2Fnah.gif?v=1617478492129`)
        

          message.channel.send(embed)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'token',
  description: 'token',
  usage: 'token'
};

const Discord = require('discord.js');
exports.run = async(client, message, args) => {
        if(!message.guild.me.hasPermission("MENTION_EVERYONE")) return message.reply("Everyone yetkim olmadığı için duyuru atamam!")
        if(!message.member.hasPermission("ADMINISTRATOR")) return;
        let duyuru = args.slice(0).join(' ');
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Bu işlem için yetkin yok.**")
        if (duyuru.length < 5 ) return message.channel.send("Duyuracağın şeyi yazmalısın. En az 5 harf ")
        message.delete();
      
        
            message.channel.send('@everyone')
            const duyur = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} Duyuru!`)
            .setDescription(` :bell: ${duyuru}`)
            .setColor("RANDOM")
            .setFooter(`${message.author.username} Duyurdu!`)
            message.channel.send(duyur)
        
        


};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'duyuru',
  usage: 'duyuru'
};

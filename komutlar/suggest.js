const Discord = require('discord.js');
exports.run = async(client, message, args) => {


                let kanal = client.channels.cache.get("827834306092335155")//kanal id botan ne isteniyor o komut bota şu olsun diye kanala mesaj atıyo
                let suggest = args.slice(0).join(' ');
                if (suggest.length < 2 ) return message.channel.send("İsteğin şeyi yazmalısın. En az 5 harf ")
                message.delete();
                
                    const istek = new Discord.MessageEmbed()
                    .setTitle(`Suggest!`)
                    .setDescription(` New suggest :  ${suggest}`)
                    .setColor("RANDOM")
                    .setFooter(`${message.author.username} Adlı kulanıcıdan yeni sitek!`)
                    kanal.send(istek)

                    message.channel.send('İsteğini alındım reisss')
                
                
 };
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'suggest',
  description: 'suggest',
  usage: 'suggest'
};
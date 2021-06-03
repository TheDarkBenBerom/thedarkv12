const Discord = require('discord.js')
exports.run = async(client, message, args) => {

                let kanal = client.channels.cache.get("827834270479417365")//gönderilecek kanal id
                let bug = args.slice(0).join(' ');
                if (bug.length < 2 ) return message.channel.send("Bug bidir yazısı , En az 2 harf olamlı ")
                message.delete();
                
                    const bugembed = new Discord.MessageEmbed()
                    .setTitle(`Bug Bidirildi!`)
                    .setDescription(` Acaba Nerem Bozuk :  ${bug}`)
                    .setColor("RANDOM")
                    .setFooter(`${message.author.username} Adlı kulanıcıdan yeni bug bildirildi!`)
                    kanal.send(bugembed)

                    message.channel.send(`İsteğini alındım reis \<a:evet:834678802688114738>`)
                
                
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'bug',
  usage: 'bug'
};

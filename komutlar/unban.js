const Discord = require('discord.js');
exports.run = async(client, message, args) => {
     if(!message.member.permissions.has("BAN_MEMBERS")) return message.cannel.send('Ufaklık sen ilk bir yetkili olda gel');
     let unbanid = args[0]
     if(!unbanid) return message.channel.send('Bir üye id belirt.')
     let bans = await message.guild.fetchBans()
     if (!bans.has(unbanid)) return message.channel.send(`${unbanid} idli yasaklı kullanıcı yok!`);

         
        message.guild.members.unban(unbanid)
        .then(user => console.log(`Unbanned ${user.username} from ${user.guild.name}`))
        .catch(console.error) 

        const unban =  new Discord.MessageEmbed()
        .setTitle('Melekler Geldi UwU')
        .setColor('RANDOM')
        .setDescription(`Serbestsin dostum Yine bekleriz ... `)
        .setFooter('TheDark |TheDarkBot')
        message.channel.send(unban)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'unban',
  usage: 'unban'
};
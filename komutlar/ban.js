const Discord = require('discord.js');
exports.run = async(client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.cannel.send('Ufaklık sen ilk bir yetkili olda gel')
        let banid = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!banid) return message.channel.send('Bir üye etiketle veya id belirt ve sebeb.')
        let sebeb = args.splice(1).join("  ")
        if(!sebeb) return message.channel.send("Bir sebeb girmelisin reiissss .")
         
        message.guild.members.ban(banid)
        .then(user => console.log(`Banned ${user.username || user.id || user} from ${message.guild.name}`))
        .catch(err => message.reply("bu kişiyi banlayamazsın kankam")) 

        const ban =  new Discord.MessageEmbed()
        .setTitle('Ağzını Burnunu Kırdım Haydeeee 😀')
        .setColor('RANDOM')
        .setDescription(`Ne bakıyonuz dağılın \n Günahı : ${sebeb} `)
        .setFooter('TheDark |TheDarkBot')
        message.channel.send(ban)

        
    


};
exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'ban',
  usage: 'ban'
};
const Discord = require('discord.js');
const os = require('os');
const moment = require('moment');
const momentdurationformat = require('moment-duration-format');
exports.run = async(client, message, args) => {

      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle("TheDarkBot | İstatistikler")
      
      .addField(
        "Hizmet Verdiği Kullanıcı Sayısı",
         client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString(),
        false
      )
      .addFields(
        {
          name : (' \<a:evet:834678802688114738> Sunucu Sayısı '),
          value : (`${client.guilds.cache.size.toLocaleString()}`),
          inline : false
        },
        {
          name : (' \<a:evet:834678802688114738> Kanal Sayısı'),
          value : (`${client.channels.cache.size.toLocaleString()}`),
          inline : false
        },
        {
          name : ('\<a:evet:834678802688114738> Discord.js Sürümü'),
          value : (`${Discord.version}`),
          inline : false
        },
        {
          name :('\<a:evet:834678802688114738> Node.js Sürümü'),
          value : (`${process.version}`),
          inline : false
        },
        {
          name : (' \<a:evet:834678802688114738> Uptime'),
          value : (`${moment.duration(os.uptime()).format("D [gün] H [saat] m [dakika] s [saniye]")}`),
          inline : false
        }
      )
      


      
      



       
           message.channel.send(embed)
};
exports.conf = {
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'istatistik',
  usage: 'i'
};
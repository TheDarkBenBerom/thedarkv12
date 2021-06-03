const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const db = new JsonDatabase("./database.json");

exports.run = async (client,message,args) => {
if(!ayarlar.sahip.includes(message.author.id)) return  message.reply('could not be granted access permission.')
 try {
 let codein = args.join(" ");
 let code = eval(codein);
 if (codein.length < 1) return message.reply(`Deneyebilmek için bir kod girmelisin!`)
 
 if (typeof code !== 'string')
 code = require('util').inspect(code, { depth: 0 });
 let embed = new Discord.MessageEmbed()
 .setColor('#55FF00')
 .addField('Kod', `\`\`\`js\n${codein}\`\`\``)
 .addField('Sonuç', `\`\`\`js\n${code}\n\`\`\``)
 message.channel.send(embed)
 } catch(e) {
 let embed2 = new Discord.MessageEmbed()
 .setColor('#FF0000')
 .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
 message.channel.send(embed2);
 }
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['kod'],
 permLevel: `0`
 };
 
 exports.help = {
 name: 'eval',
 description: 'Kod denemeyi sağlar.',
 usage: 'eval'
 }; 

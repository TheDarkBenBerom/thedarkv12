const Discord = require('discord.js');
const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const  db3  = new JsonDatabase("./reklam.json");
exports.run = async(client, message, args) => {
        const msg = message;

        if(!args[0]) return message.channel.send('Bu komutu kullanabilmek için +reklam-engel <aç/kapat>')
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olman gerek ')

        if(args[0] === 'aç'){
            

            db3.set(`reklam_${message.guild.id}`, 'açik')
            message.channel.send('Gözümü Bile Kırpmadan Gözelmleyeceğim')

            

        }
        if(args[0] === 'kapat'){
            

            db3.delete(`reklam_${message.guild.id}`)
            message.channel.send('Artık küfür edince silmiyecağim')
            if(!db3.fetch(`reklam_${msg.guild.id}`)) return;

        }


};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reklam-engel',
  description: 'reklam-engel',
  usage: 'reklam-engel'
};

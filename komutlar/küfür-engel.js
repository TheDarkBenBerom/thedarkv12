const Discord = require('discord.js');
const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const  db  = new JsonDatabase("./database.json");
exports.run = async(client, message, args) => {
        const msg = message;

        if(!args[0]) return message.channel.send('Bu komutu kullanabilmek için +küfür-engel <aç/kapat>')
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olman gerek ')

        if(args[0] === 'aç'){
            

            db.set(`kufur_${message.guild.id}`, 'açik')
            message.channel.send('Artık küfür-engel açık UwU 🤣')

            

        }
        if(args[0] === 'kapat'){
            

            db.delete(`kufur_${message.guild.id}`)
            message.channel.send('Artık küfür edince silmiyecağim')
            if(!db.fetch(`küfür-engel${msg.guild.id}`)) return;

        }


};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'küfür-engel',
  description: 'küfür-engel',
  usage: 'küfür-engel'
};

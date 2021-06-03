const Discord = require('discord.js');
const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const  db  = new JsonDatabase("./database.json");


exports.run = async(client, message, args) => {
               const msg = message;

        if(!args[0]) return message.channel.send('Bu komutu kullanabilmek için -sa-as <aç/kapat>')
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olman gerek \:hayr:')

        if(args[0] === 'aç'){
            

            db.set(`ssaass_${message.guild.id}`, 'açik')
            message.channel.send(" Artık bir kullanıcı sa dediğinde as denilicek.")

            

        }
        if(args[0] === 'kapat'){
            

            db.delete(`ssaass_${message.guild.id}`)
            message.channel.send(' Arık bir kullanıcı sa dediğinde as denilmiyecek.')
            if(!db.fetch(`ssaass_${msg.guild.id}`)) return;

       }
};


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'sa-as',
  usage: 'sa-as'
};
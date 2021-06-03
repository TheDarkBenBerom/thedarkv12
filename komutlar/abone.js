const Discord = require('discord.js');
const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const db2 = new JsonDatabase("./abone.json");
exports.run = async(client, message, args) => {
      

      
if(args[0] === `rol`) { 
let rol = message.mentions.roles.first();
if(!rol) return message.channel.send(`Rol etiketle`)
db2.set(`abone.${message.guild.id}.rol`, rol.id)
message.channel.send('Başarı İle Ayarlandı \<a:evet:834678802688114738>')
}
if(args[0] === `ver`) {
let rol = db2.fetch(`abone.${message.guild.id}.rol`)
if(!rol) return message.channel.send(`Rol ayarla \<a:keserimseni:827404968423325717>`)
let üye = message.mentions.members.first();
üye.roles.add(rol)
message.channel.send(`İşem Başarılı \<a:evet:834678802688114738>`)
.catch(error => {
    if (error.code !== Discord.Constants.APIErrors.MİSSİNG_PERMİSSİONS) {
        message.channel.send('Yetkim Yok Ufaklık : ', error);
    }
});


}
if(args[0] === `kapat`) {
let rol = db2.delete(`abone.${message.guild.id}.rol`)
message.channel.send(`Başarı ile Abone Sistemi Kapatıldı \<a:evet:834678802688114738> `)
}  
  
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'abone',
  description: 'abone',
  usage: 'abone'
};
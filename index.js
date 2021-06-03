const Discord = require('discord.js');
const os = require('os');
const fs = require('fs');
const moment = require('moment');
const momentdurationformat = require('moment-duration-format');
const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");
const db = new JsonDatabase("./database.json");
const db2 = new JsonDatabase("./abone.json");
const db3 = new JsonDatabase("./reklam.json");
const ayarlar = require('./ayarlar.json')
const client = new Discord.Client({
  autoReconnect: true
});
require("./load/yükle.js")(client);



/////////////////////Handlader/////////////////////////////
client.on("ready", () => {
  client.user.setStatus("dnd");
  console.log(
    `[BOT]: ${client.user.tag} ismiyle bağlandım!`
  );
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`[BOT]: ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`[BOT]: ${props.help.name} komutu yüklendi.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
////////////////////////Sa-As/////////////////////

client.on("message",  message => {
  let kontrol = db.fetch(`ssaass_${message.guild.id}`);
  if (!kontrol) return;
  let msg = message.content.toLowerCase();
  if (msg === "sa") return message.channel.send("Aleyküm Selam, Nasılsın Reisss");
  if (msg === "selam") return message.channel.send("Aleyküm Selam, Nasılsın Reisss");
  if (msg === "slm") return message.channel.send("Aleyküm Selam, Nasılsın Reisss");
  if (message.content.toLowerCase() === "iyi") return message.channel.send("İyi olmane sevindim reiss");
  if (msg === "kötü") return message.channel.send("Kötü olmana üzüldüm reiss. Gel efkarlanak");
  if (msg === "sea") return message.channel.send("Aleyküm Selam, Nasılsın Reisss");
  if (msg === "günaydın") return message.channel.send("Sanada Günaydın ");
  if (msg === "iyi geceler") return message.channel.send("İyi Geceler , Horlaya Horlaya Uyu ");
  if (msg === "bb") return message.channel.send("Görüşürüz , Geri Gel Ha");
  if (msg === "selamün aleyküm") return message.channel.send("Aleyküm Selam, Nasılsın Reisss");
   
});

////////////////////Küfür-Engel/////////////////
client.on("message", async msg => {
  
  
 const i = await db.fetch(`kufur_${msg.guild.id}`)
    if (i == "acik") {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  
  
 const i = db.fetch(`${oldMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete();
                          
                      return oldMessage.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});
////////////////////Reklam-Engel/////////////////
client.on("message", msg => {
 if(!db3.has(`reklam_${msg.guild.id}`)) return;
        const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? !**').then(msg => msg.delete(3000));
   
 
  msg.delete(3000);                              
 
            }              
          } catch(err) {
            console.log(err);
          }
        }
    });


//////////////////////////////////////////////////
client.login(ayarlar.token);
///////////////////////////////////////////////////////////////

process.on("unhandledRejection", (reason, promise) => {
});

/////////////////////////////////////////////////////////////////
client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};
//////////////////////////////////////////////////////////////////
client.on("guildCreate", guild => {

let solvecode = "837543671205330946"

if (guild.memberCount <  10) { 

guild.leave()

return
};
});
//////////////////////////////////////////////////////////////////
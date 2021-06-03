const Discord = require('discord.js');
exports.run = async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Yetkili Menüsünü')
        .addFields(
            {
                name : ('> +duyuru'),
                value : ('Şekili duyuru yaparsınız Warn : Everyone atar.')
            },
            {
                name : ('> +ban'),
                value : ('Ban atar Ama Ama Daha Kodlicam,İd ve Etiket destekler.')
            },
            {
                name : ('> +unban'),
                value : ('Kulanıcı id ile banlanan kulanıcının Banını kaldırır.')
            },
            {
                name : ('> +sa-as <aç-kapat>'),
                value : ('Oto sa as ')
            },
            {
                name : ('> +kurallar'),
                value : ('Hazır kuralları atar.')
            },
            {
              name : ('> +abone-kur'),
              value : ('Müqemel Bir Abone Sistemi')
            },
            {
              name : ('+küfür-engel <aç/kapat>'),
              value : ('Sunucuda Küfürleri Yasaklarsınız')
            },
            {
              name : ('> +sil <sayı>'),
              value : ('Belirtilen Mesaj Kadar Mesaj Siler')
            }
            )
        .setFooter('TheDark | TheDark Bot')
        .setImage('https://media.discordapp.net/attachments/803531755822383104/818436436529119262/standard.gif')
        message.channel.send(embed)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'yetkili',
  usage: 'yetkili'
};

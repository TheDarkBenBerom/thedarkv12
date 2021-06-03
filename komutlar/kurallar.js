const Discord = require('discord.js')
exports.run = async(client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`** ${message.guild.name} Sunucusu'nun Kuralları**`)
        .setDescription('**Reklam** \n • Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve benzeri şekilde reklamlar yapmak yasaktır. \n \n  **Küfür, Argo ve Hakaret** \n  • Her kanalda küfür etmek ve argo kullanmak yasaktır. \n• Üyelere karşı hakaret etmek ve dalga geçme yasaktır. \n \n  **Yetkililer ve Yetki** \n • Yetki istemek yasaktır. \n • Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır \n • Yetkililere saygılı olun. \n \n **Din, Siyaset, Cinsellik** \n • Din ile ilgili konuşmak, tartışmak, kullanıcı adlarını din ile ilgili koymak yasaktır. \n (Kimsenin dinine karışmadan tartışmak serbest) \n • Siyaset ile ilgili konuşmak, tartışmak, kullanıcı adlarını siyaset ile ilgili koymak yasaktır. \n • 18+ fotoğraflar paylaşmak ve konuşmak yasaktır. \n \n **Kavga, Tartışmak** \n • Kavga etmek, kavgaya dahil olmak ve tartışmak yasaktır. \n •Herhangi bir sorununuz varsa yetkiliye danışınız  ')
        .setImage('https://media.discordapp.net/attachments/714649247709921280/763380032030638110/kurallar.gif')
          message.channel.send(embed)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: 'kurallar',
  usage: 'kurallar'
};

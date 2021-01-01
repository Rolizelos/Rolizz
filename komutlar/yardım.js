const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Roliz Bot (V12)** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail('https://cdn.discordapp.com/attachments/783589964080349215/793578532201955338/120430.gif')
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Bot Komutlarıı** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» !eğlence :** Eğlence Komutlarını Görürsünüz.
> **» !moderasyon :** Moderasyon Komutlarını Görürsünüz.
> **» !logo :** Logo Komutlarını Görürsünüz.
> **» !medya** Bot İle İlgili Bağlantılar.


**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**
Bu komut ${message.author.username} tarafından istendi! 

`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'yardım'
};
const Discord = require("discord.js")
const client = new Discord.Client() 
const request = require('request')
const config = require("./config.json")

// SqarLex
    client.on("ready", () => {
        client.user.setPresence({ activity: { name: config.durum }, status: "idle" });
        client.channels.cache.get(config.voicekanal).join().catch(x => x)
         const guild = client.guilds.cache.get(config.sunucu)
           console.log(`${guild.name} sunucusu için "${config.vanity}" urlsi spamlanmaya başladı.`)


    setInterval(async () => {
        if(guild.vanityURLCode == config.vanity) {// SqarLex
            let onay = new Discord.MessageEmbed().setAuthor(guild.name, guild.iconURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`"**${guild.name}**" sunucusunun özel url'si belirtildiği gibi **\`${config.vanity}\`** olarak değiştirildi :white_check_mark:`)
                let kanal = await guild.channels.cache.get(config.urllog)// SqarLex
                     await kanal.send(onay)
                        await kanal.send(`<@${config.botOwner}>`)// SqarLex


    console.log(`${guild.name} = "${guild.vanityURLCode}" Durum: ✔`) 
        console.log(`Bottan Çıkış Yapıldı.`)// SqarLex
            process.exit()
                } else {// SqarLex
                    SqarLex(config.vanity, config.guild, process.token)
                         }}, 1*500)})// SqarLex

    async function SqarLex(vanity, token) {
        const spammer = {// SqarLex
            url: `https://discord.com/api/v8/guilds/${config.sunucu}/vanity-url`,
                body: {
                    code: `${vanity}`},
    json: true,
        method: 'PATCH',
            headers: {// SqarLex
                "Authorization": `Bot ${process.token}`
                    }
                        };

    request(spammer, (err, res, body) => {
        if (err) {// SqarLex
            return console.log(err)}})}


client.login(process.token).catch(err => { console.log("Token Hatalı !")})

module.exports = {
    name:'embed',
    description:'send embedded message to a server channel.',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#990000')
        .setTitle('Embed Test')
        .setURL('https://Pornhub.com')
        .setDescription('Suck My Dick Faggot')
        .addFields(
            {name:'Rule #1', value: 'Negged By Manga Scans || discord.gg/rakuzanx'},
            {name:'Rule #2', value: 'Manga Scans On Top'},
            {name:'Rule #3', value: 'Nigger'},
        )            
        .setImage('https://media.discordapp.net/attachments/786578219092410419/809175852276908062/ezgif.com-gif-maker_46.gif')
        .setFooter('Negged By Omar!');

        message.channel.send(newEmbed);
    }

    
}
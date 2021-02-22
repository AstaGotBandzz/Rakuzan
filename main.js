const Discord = require('discord.js');
const client = new Discord.Client
const prefix = 'R!';
const fs = require('fs')

const memberCounter = require('./counters/counter');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Seijoh is now alive!');
    client.user.setActivity({ type: "PLAYING", name: "R! | Watching Over Rakuzan | Asta Is A Goat" });
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Regular Goons');

    guildMember.roles.add(welcomeRole);
    
    let embed = new Discord.MessageEmbed()
    .setDescription('Welcome To **Rakuzan** Check out Server Info and Rules chat to get familliar with the server!')
    .setColor('#ff3067')
    .setAuthor(`${guildMember.user.tag} Has Joined!`, guildMember.user.displayAvatarURL,)
    .addField('Total Members', guildMember.guild.memberCount, true)
    .setImage('https://media.discordapp.net/attachments/812532936267268146/813180708738301982/giphy_31.gif')

    guildMember.guild.channels.cache.get('811602307652780073').send(embed);
});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'naruto'){
        client.commands.get('naruto').execute(message, args); 
    } else if (command == 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
   } else if(command == 'clear'){
       client.commands.get('clear').execute(message, args);
   } else if(command == 'kick'){
       client.commands.get('kick').execute(message, args);
   } else if(command == 'ban'){
       client.commands.get('ban').execute(message, args);
   } else if(command == 'mute'){
       client.commands.get('mute').execute(message, args);
   } else if(command == 'unmute'){
       client.commands.get('unmute').execute(message, args);
   }
   
});

client.login(process.env.token);

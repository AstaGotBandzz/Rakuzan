const Discord = require('discord.js');
const client = new Discord.Client
const prefix = 'T!';
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
    client.user.setActivity({ type: "PLAYING", name: " Prefix = T!" });
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Customers');

    guildMember.roles.add(welcomeRole);
    
    let embed = new Discord.MessageEmbed()
    .setDescription('Welcome To **The Tavern!** Check out Server Info and Rules chat to get familliar with the server!')
    .setColor('#ff3067')
    .setAuthor(`${guildMember.user.tag} Has Joined!`, guildMember.user.displayAvatarURL,)
    .addField('Total Members', guildMember.guild.memberCount, true)
    .setImage('https://cdn.discordapp.com/attachments/758412588395790357/813683113632202752/Tavern_Welcome.gif')

    guildMember.guild.channels.cache.get('813561078960095262').send(embed);
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

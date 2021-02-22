module.exports = {
    name: 'unmute',
    description: "mutes a guild member",
    execute(message, args){
        if (message.member.roles.cache.some(r => r.name === "Trial Mod") || message.member.roles.cache.some(r => r.name === "Mod") || message.member.roles.cache.some(r => r.name === "Head Mod") || message.member.roles.cache.some(r => r.name === "Admin") || message.member.roles.cache.some(r => r.name === "Senior Admin") || message.member.roles.cache.some(r => r.name === "Head Of Staff") || message.member.roles.cache.some(r => r.name === "Vice-Captain") || message.member.roles.cache.some(r => r.name === "Captain")){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Regular Goons');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted!`);
        } else{
            message.channel.send(`I can't find that member!`);
        }
    
    
    }else {
        message.channel.send(`You can't use that!`);
    }
  }       
}
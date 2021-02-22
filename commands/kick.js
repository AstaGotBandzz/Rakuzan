module.exports = {
    name: 'kick',
    description: "This command kicks a user from the guild",
    execute(message, args){
    
        if (message.member.roles.cache.some(r => r.name === "Mod") || message.member.roles.cache.some(r => r.name === "Head Mod") || message.member.roles.cache.some(r => r.name === "Admin") || message.member.roles.cache.some(r => r.name === "Senior Admin") || message.member.roles.cache.some(r => r.name === "Head Of Staff") || message.member.roles.cache.some(r => r.name === "Vice-Captain") || message.member.roles.cache.some(r => r.name === "Captain")){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(`<@${memberTarget.user.id}> has been Kicked!`);
        }else{
            message.channel.send(`Please Mention The User You Wish To Kick!`);
        }

        }else{
            message.channel.send(`You Don't Have Permission To Use That!`);
        }


        
        }
    }
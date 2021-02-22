module.exports = {
    name: 'ban',
    description: "This command bans a user from the guild",
    execute(message, args){
        if (message.member.roles.cache.some(r => r.name === "Head Mod") || message.member.roles.cache.some(r => r.name === "Admin") || message.member.roles.cache.some(r => r.name === "Senior Admin") || message.member.roles.cache.some(r => r.name === "Head Of Staff") || message.member.roles.cache.some(r => r.name === "Vice-Captain") || message.member.roles.cache.some(r => r.name === "Captain")){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> has been Banned!`);
        }else{
            message.channel.send(`Please Mention The User You Wish To Ban!`);
        }

        }else{
            message.channel.send(`You Don't Have Permission To Use That!`);
        }


        
        }
    }
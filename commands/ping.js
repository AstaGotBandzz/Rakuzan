module.exports = {
    name: 'ping',
    description: "this is a ping/test command",
    execute(message, args){
        let role = message.guilds.role.cache.find(r => r.name === "Mod" )
        
        
        if(message.member.roles.cache.has('808165015647158302')){
            message.channel.send('pong!');

 
        } else {
            message.channel.send('You cant use that!');
        }

        
    }
 }
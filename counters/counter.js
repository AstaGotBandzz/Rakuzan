module.exports = async (client) =>{
    const guild = client.guilds.cache.get('450858133988966430');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('811927605329526784');
        channel.setName(`Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count');
    }, 5000);
}
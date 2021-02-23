module.exports = async (client) =>{
    const guild = client.guilds.cache.get('813558886623739904');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('813561088640548897');
        channel.setName(`Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count');
    }, 5000);
}
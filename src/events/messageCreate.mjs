export default async(client, message) => {
    // auto post announcement channel messages
    if (message.channel.type === 5){
        const row = client.db.prepare('SELECT * FROM guilds WHERE id = ?').get(message.channel.guild.id)
        if (!row) return;
        if (!row.autoPostAnnouncement) return;

        return await message.crosspost()
    }

    console.log(message.channel.type)
}
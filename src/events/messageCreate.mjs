export default async(client, message) => {
    // auto post announcement channel messages
    if (message.channel.type === 5){
        // TODO check db for if guild settings has auto post enabled

        return await message.crosspost()
    }

    console.log(message.channel.type)
}
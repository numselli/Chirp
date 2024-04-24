import { Client as discordClient } from "oceanic.js";
const { discordToken } = await import(process.env.NODE_ENV === "production" ? '/config/config.mjs' : './config/config.mjs')

import messageCreate from './events/messageCreate.mjs'
import interactionCreate from './events/interactionCreate.mjs'

// create bot clients
const client = new discordClient({
    "auth": discordToken,
    "gateway":{
        "intents": [
            "GUILDS",
            "GUILD_MESSAGES",
            "MESSAGE_CONTENT"
        ],
        presence: {
			status: "dnd"
		}
    }
});


client.once("ready", () => {
    // client.application.bulkEditGlobalCommands(discordFileMap.commands.map(file=>file.options))
    // client.commands = commandArrayToMap(discordFileMap.commands)
    // client.components = commandArrayToMap(discordFileMap.components)
})
client.on("ready", () => client.editStatus("dnd"))
client.on("messageCreate", messageCreate.bind(null, client))
client.on("interactionCreate", interactionCreate.bind(null, client))

// error handling
client.on("error", (err) => console.error("Discord error:", err));

client.connect();



// const discordCommands = await client.application.getGlobalCommands();

// client.commands = new Map(
//     commandList.map((command) => {
//         return [
//             command.name,
//             {
//                 commandFile: command,
//                 discordInfo: discordCommands.find((discordCommand) => {
//                     return discordCommand.name === command.name;
//                 }),
//             },
//         ];
//     }),
// );
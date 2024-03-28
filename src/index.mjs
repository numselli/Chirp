import { Client as discordClient } from "oceanic.js";
const { discordToken } = await import(process.env.NODE_ENV === "production" ? '/config/config.mjs' : './config/config.mjs')

import messageCreate from './events/messageCreate.mjs'

// create bot clients
const client = new discordClient({
    "auth": discordToken,
    "gateway":{
        "intents": [
            "GUILDS",
            "GUILD_MESSAGES",
            "MESSAGE_CONTENT"
        ]
    }
});


client.once("ready", () => {
    // client.application.bulkEditGlobalCommands(discordFileMap.commands.map(file=>file.options))
    // client.commands = commandArrayToMap(discordFileMap.commands)
    // client.components = commandArrayToMap(discordFileMap.components)
})
client.on("ready", () => client.editStatus("dnd", [{"state": "doing stuff", "name": "name", "type": 4}]))
client.on("messageCreate", messageCreate.bind(this, client))


// error handling
client.on("error", (err) => console.error("Discord error:", err));

client.connect();
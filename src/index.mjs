import { Client as discordClient } from "oceanic.js";
const { discordToken } = await import(process.env.NODE_ENV === "production" ? '/config/config.mjs' : './config/config.mjs')

import messageCreate from './events/messageCreate.mjs'
import interactionCreate from './events/interactionCreate.mjs'

import Database from "better-sqlite3";

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


client.db = new Database(process.env.NODE_ENV === "production" ? '/config/db.db' : './config/db.db')


client.on("ready", () => client.editStatus("dnd"))
client.on("messageCreate", messageCreate.bind(null, client))
client.on("interactionCreate", interactionCreate.bind(null, client))

// error handling
client.on("error", (err) => console.error("Discord error:", err));

client.connect();

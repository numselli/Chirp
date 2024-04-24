export default {
    name: "settings",
    commandLogic: (interaction, client) => {
        switch (interaction.data.options.raw[0].name){
            case "autopost":{

            }
            break;
        }
    },
    description: "Veiw and edit yt channel subscriptions",
    options: [
        {
            "name": "autopost",
            "description": "Add a youtube channel to monitor",
            "type": 1,
			"options":[
                {
                    "name": "id",
                    "description": "The yt channel ID you want to subscribe to.",
                    "type": 3,
                    "required": true,
                }
            ]
        }
    ]
}
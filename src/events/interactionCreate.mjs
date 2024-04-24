import interactionsList from "../slashCommands/interactionsList.mjs";

export default async (client, interaction) => {
	// if (interaction.type === 3 || interaction.type === 5) return interactionsList.get(interaction.data.customID.split("_")[0]).logic(interaction, client);

	client.commands.get(interaction.data.name).commandFile.commandLogic(interaction, client);
};

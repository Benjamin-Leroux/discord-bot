const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Renvoie le ping'),
        /**
         * 
         * @param {*} interaction 
         */
    async execute(interaction){
        await interaction.reply('Pong');

        const message = await interaction.fetchReply();

        return interaction.editReply(`Ping: ${interaction.client.ws.ping} ms`);
    }

}
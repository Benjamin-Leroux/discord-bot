const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buillaume-yell')
        .setDescription('Que crie Buillaume ?')
        .addStringOption(option =>
            option.setName('yelling')
            .setDescription('Le texte a ecrire en CAPS LOCK')
            .setRequired(true)
           ),
        /**
         * 
         * @param {*} interaction 
         */
    async execute(interaction){
        const choice = interaction.options.getString('yelling').toUpperCase();

        await interaction.reply(choice);
    }
}
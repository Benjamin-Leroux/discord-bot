const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buillaume-say')
        .setDescription('Que dit Buillaume ?')
        .addStringOption(option =>
            option.setName('saying')
            .setDescription('Le texte a ecrire')
            .setRequired(true)
           ),
        /**
         * 
         * @param {*} interaction 
         */
    async execute(interaction){
        const choice = interaction.options.getString('saying');

        await interaction.reply(choice);

    }

}
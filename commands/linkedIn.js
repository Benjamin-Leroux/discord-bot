const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('linkedin')
        .setDescription('Lien vers mon linkedIn'),
        /**
         * 
         * @param { CommandInteraction } interaction 
         */
    async execute(interaction){
        const row = new MessageActionRow()
            .addComponents(new MessageButton()
                .setLabel('LinkedIn')
                .setStyle('LINK')
                .setURL('https://www.linkedin.com/in/guillaume-ceuninck/')
            );
        
        await interaction.reply({content: 'Check ce beau linkedIn :', components: [row]});

    }

}
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('feed-buillaume')
        .setDescription('Donnez de la nourriture a Buillaume')
        .addStringOption(option =>
            option.setName('food-type')
            .setDescription('Le type de nourriture a donner')
            .setRequired(true)
            .addChoice('bucket kfc','Vous avez donné un bucket KFC à Buillaume. Il se régale !')
            .addChoice('fruit obligatoire','Vous avez donné un fruit obligatoire à Buillaume. Il le mange avec déception...')
            .addChoice('fromage',"Vous avez donné du fromage à Buillaume. Sa santé se dégrade rien qu'avec l'odeur...")
        ),
        /**
         * 
         * @param {*} interaction 
         */
    async execute(interaction){
        const choice = interaction.options.getString('food-type');

        await interaction.reply(choice);

    }

}
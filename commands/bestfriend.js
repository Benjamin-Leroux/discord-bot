const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bestfriend')
        .setDescription('Vous voulez savoir qui est mon meilleur pote ?'),
        /**
         * 
         * @param {*} interaction 
         */
    async execute(interaction){
        await interaction.reply("Mon meilleur pote c'est Benjamin car c'est trop le meilleur ! Je dis que c'est un collègue mais en réalité il est tout pour moi UwU");
    }

}
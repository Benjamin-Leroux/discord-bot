const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('goty')
        .setDescription('WHEN ???'),
        /**
         * 
         * @param {*} interaction 
         */
    async execute(interaction){
        const image = fs.readFileSync(path.join(__dirname, 'pics/Silksong_cover.jpg'));
        const attach = new MessageAttachment(image);

        const exampleEmbed = new MessageEmbed()
            .setTitle('HOLLOW KNIGHT SILKSONG')
            .setDescription('Game of the year 2022 (ou 2023)');
            
        await interaction.reply({embeds: [exampleEmbed], files: [attach]});
    }

}
const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('company')
        .setDescription('Je suis un vrai IBMer'),
        /**
         * 
         * @param {*} interaction 
         */
    async execute(interaction){
        const image = fs.readFileSync(path.join(__dirname, 'pics/IBMer.gif'));
        const attach = new MessageAttachment(image);

        await interaction.reply({ files: [attach]});
    }

}
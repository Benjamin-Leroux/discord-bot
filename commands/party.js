const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('party')
        .setDescription('Vous voulez savoir si je suis disponible pour ube soirée ?'),
        /**
         * 
         * @param {*} interaction 
         */
    async execute(interaction){
        const image = fs.readFileSync(path.join(__dirname, 'pics/turtle.jpg'));
        const attach = new MessageAttachment(image);

        await interaction.reply({content: "Ah c'est vraiment dommage pour la soirée mais c'est l'anniversaire de ma tortue domestique ce soir là donc je peux pas désolé...", files: [attach]});
    }

}
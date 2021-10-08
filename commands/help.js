const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Liste toutes les commandes'),
        /**
         * 
         * @param {*} interaction 
         */
    async execute(interaction){
        await interaction.reply(`Commandes :
        
        **/bestfriend** - Pour connaitre le meilleur ami de Buillaume
        **/buillaume-say** <saying> - Faire dire quelque chose à Buillaume 
        **/buillaume-yell** <yelling> - Faire dire quelque chose à Buillaume en CAPS LOCK
        **/company** - pour connaitre l'entreprise de Buillaume
        **/feed-buillaume** <food-type> - Pour nourrir Buillaume
        **/goty** - Pour connaitre le prochain GOTY
        **/linkedin** - Affiche un lien vers le linkedIn de Buillaume
        **/party** - Demander a Buillaume s'il vient à une soirée
        **/ping** - Renvoie le ping `);
    }

}
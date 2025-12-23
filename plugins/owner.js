const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "Abdulwahab",
    react: "✅", 
    desc: "923449907936",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.923449907936; // Fetch owner number from config
        const ownerName = config.Abdulwahab;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${Abdulwahab}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${923449907936.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: Abdulwahab,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/yj7zp0.png' }, // Image URL from your request
            caption: `╭━━〔 *Rdxsigma* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *Here is the owner details*
┃◈┃• *Name* - ${RDXSIGMA}
┃◈┃• *Number* ${923449907936}
┃◈┃• *Version*: 2.0.0 Beta
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ RDXSIGMA_𝐌𝐃 ❣️*`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${Rdxsigma.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '923449907936@s.whatsapp.net',
                    newsletterName: '*RDXSIGMA𝐌𝐃*',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/4fz6jh.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});

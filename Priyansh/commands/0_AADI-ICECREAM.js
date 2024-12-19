const fs = require("fs");
module.exports.config = {
        name: "icecream",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Icecream",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Iceream")==0 || event.body.indexOf("Icecream")==0 || event.body.indexOf("icecream")==0 || event.body.indexOf("ICECEARM")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻ 𝐊𝐇𝐀𝐍  𝐒𝐀𝐇𝐀𝐁  \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐈𝐜𝐞𝐜𝐑𝐞𝐚𝐌\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/e5f2d1dc3d942f86b4ea8cd2024be977.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍦", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }

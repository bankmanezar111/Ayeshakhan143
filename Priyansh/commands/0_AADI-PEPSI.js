const fs = require("fs");
module.exports.config = {
        name: "pepsi",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "pepsi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("pepsi")==0 || event.body.indexOf("Pepsi")==0 || event.body.indexOf("PEPSI")==0 || event.body.indexOf("Coldaring")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐊𝐇𝐀𝐍  𝐒𝐀𝐇𝐀𝐁 \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐏𝐄𝐏𝐒𝐈\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/ef4be9bf2788696e56231c33920bf54f.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥂", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }

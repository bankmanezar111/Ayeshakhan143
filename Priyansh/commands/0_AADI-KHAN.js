const fs = require("fs");
module.exports.config = {
        name: "jaan",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "RuhaNi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("jaan")==0 || event.body.indexOf("Jaan")==0 || event.body.indexOf("Janu")==0 || event.body.indexOf("jan")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐘𝐄𝐒𝐇𝐀 𝐊𝐄 𝐇𝐀𝐒𝐁𝐄𝐍𝐃 𝐉𝐈😍 \n__________________________________\n\n𝐀𝐘𝐄𝐒𝐇𝐀 𝐊𝐇𝐀𝐍 𝐘𝐄 𝐑𝐇𝐈 𝐀𝐀𝐏𝐊𝐈 𝐉𝐀𝐀𝐍👇👇👇\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Messenger_creation_DF8CFAEC-A51D-4752-B15D-B98852223EB1.jpeg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }

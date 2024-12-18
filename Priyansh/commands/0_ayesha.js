const fs = require("fs");
module.exports.config = {
        name: "Ayesha",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Coffee",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("ayesha")==0 || event.body.indexOf("AYESHA")==0 || event.body.indexOf("ayesha")==0 || event.body.indexOf("@Ayesha Khan")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻   KHAN SAHAB \n__________________________________\n\nAYESHA BHOT PYARI LADKI HIA   \n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/e6dc27b014a7e2be2cc64f6a9eeed053.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }

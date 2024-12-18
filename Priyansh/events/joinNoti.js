module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "CatalizCS", //fixing ken gusler
        description: "Notify bot or group member with random gif/photo/video",
        dependencies: {
                "fs-extra": "",
                "path": "",
                "pidusage": ""
        }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

        const path = join(__dirname, "cache", "joinGif");
        if (existsSync(path)) mkdirSync(path, { recursive: true });        

        const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
        const { join } = global.nodemodule["path"];
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                const fs = require("fs");
                return api.sendMessage("Assalamu Alaikum Everyone🥀🥀", event.threadID, () => api.sendMessage({body:`🌺KHAN SAHAB🦋🌺 CONNECTED«

Bot Made By 𝙆𝙃𝘼𝙉 𝙎𝘼𝙃𝘼𝘽☘️
<------------------------------>  
BOT CONNECTED SUCCESFUL !!! 

APPROVAL ALLOW IN THIS GROUP!!!
<------------------------------>

USE HELP TO SEE COMMAND 
\n\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}video7 (video songs)\n${global.config.PREFIX}music (audio songs)\n${global.config.PREFIX}help2 (command list)\n${global.config.PREFIX}info 
<<<<<------------------------------>>>>>
AND FOR ANY REPORT OR CONTACT BOT DEVELOPER

OWNER: ┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒✬✿╭┳✪✪╤───────────➛➣ ★�*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝ 𝐊𝐇𝐀𝐍 𝐒𝐀𝐇𝐀𝐁🍀🍒💐)✪��★  ✬✿╭┳✪✪╤───────────➛➣🤩🌿✰✧✧✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛    
🕊️🌸
...
✮┼💞┼✮
☸🕊️━━•🌸•━━🕊️☸

♻️Facebook: 

https://www.facebook.com/profile.php?id=61556803719349&mibextid=ZbWKwL

Youtube Site : N/A

☢️ INSTAGRAM: N/A

https://www.instagram.com/khansahab345?igsh=MXVneXZ6bzR4bHhvcg==￼

☣️Email: khansahab345@gmail.com

⚠️Wp: +𝟗𝟏 𝟗𝟐𝟓𝟑**𝟖𝟐𝟖𝟑 `, attachment: fs.createReadStream(__dirname + "/cache/khan.jpeg")} ,threadID));
        }
        else {
                try {
                        const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};
                        const path = join(__dirname, "cache", "joinGif");
                        const pathGif = join(path, `${threadID}.gif`);

                        var mentions = [], nameArray = [], memLength = [], i = 0;

                        for (id in event.logMessageData.addedParticipants) {
                                const userName = event.logMessageData.addedParticipants[id].fullName;
                                nameArray.push(userName);
                                mentions.push({ tag: userName, id });
                                memLength.push(participantIDs.length - i++);
                        }
                        memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "𝐖𝐞𝐥𝐜𝐨𝐦𝐞   𝐓𝐨  𝐒𝐡𝐚𝐚𝐧  𝐊𝐡𝐚𝐧  𝐁𝐨𝐭  😇● ========================= ●\n● ======= 𝐇𝐄𝐋𝐋𝐎 𝐁𝐀𝐁𝐘 ======= ●\n● ========================= ●\n\n● ==== 🆆 🅴🅻🅻 🅲🅾🅼 🅴 ==== ●\n\n● ========= 𝐍𝐄𝐖 ========= ●\n\n● ==== 🇲‌ 🇪‌ 🇲‌ 🇧‌ 🇪‌ 🇷‌ ==== ●\n\n● ========================= ● [   {name} ]\n● ============HAM TUTE HUYE DILO KO JODNE ME MAHIR THE 🥺 JAB KHUD KA DIL TUTA💔💔TO HUNAR HI BHOOL GYE🤧🤧============= ●\n● ====== 𝐌𝐘 𝐆𝐑𝐎𝐔𝐏 ===== ●\n\n{threadName}\n\n● = 🥀 𝐇𝐀𝐏𝐏𝐘 𝐄𝐍𝐉𝐎𝐘 🥀 = ●\n\n● == 🥀 𝐌𝐀𝐉𝐄 𝐊𝐀𝐑𝐎 𝐀𝐆𝐀𝐑 𝐅𝐀𝐋𝐓𝐔 𝐊𝐈 𝐁𝐀𝐊𝐂𝐇𝐎𝐃𝐎 𝐊𝐈 𝐓𝐎 𝐌𝐄𝐑𝐄 𝐊𝐇𝐀𝐍 𝐁𝐎𝐒𝐒 𝐓𝐔𝐌𝐊𝐎 𝐆𝐑𝐎𝐎𝐏 𝐒𝐄 𝐁𝐀𝐇𝐀𝐑 𝐅𝐀𝐂𝐊 𝐃𝐄𝐍𝐆𝐄🥀  == ●\n● ========================= ● 𝐎𝐑 𝐓𝐔𝐌 𝐈𝐒 𝐆𝐑𝐎𝐔𝐏 𝐊𝐄  {soThanhVien} 𝐌𝐄𝐌𝐁𝐀𝐑 𝐇𝐎 𝐄𝐍𝐉𝐎𝐘 𝐊𝐀𝐑𝐎 𝐌𝐀𝐉𝐄 𝐋𝐎 [ . ] ● ========================= ●\n\n● ========================= ●\n● ======= 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐊𝐇𝐍 𝐒𝐀𝐇𝐀𝐁 𝐁𝐎𝐓 ====== ●\n\n☟  ========== ☟ ==========  ☟\n\n=𝐎𝐰𝐧𝐞𝐫 ➻    🌹  𝐊𝐇𝐀𝐍 𝐒𝐀𝐇𝐀𝐁 🌹\n● ========================= ●" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{name}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);

                        if (existsSync(path)) mkdirSync(path, { recursive: true });

                        const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

                        if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
                        else if (randomPath.length != 0) {
                                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
                        }
                        else formPush = { body: msg, mentions }

                        return api.sendMessage(formPush, threadID);
                } catch (e) { return console.log(e) };
        }
                    }

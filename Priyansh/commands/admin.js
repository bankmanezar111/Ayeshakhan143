module.exports.config = {
    name: "admin",
    version: "1.0.1", 
    hasPermssion: 0,
    credits: "Abdulla Rahaman",
    description: "Abdulla Tech 49",
    commandCategory: "...",
    cooldowns: 1,
    dependencies: 
    {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/IyBD3wS.jpeg", 

            "https://i.imgur.com/IyBD3wS.jpeg", 

"https://i.imgur.com/IyBD3wS.jpeg",

            "https://i.imgur.com/IyBD3wS.jpeg"];

var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : ╔══════════════════╗
 ⃟❖一 𝐊𝐇𝐀𝐍  -  𝐒𝐀𝐇𝐀𝐁一🙂 ཐི༏ཋྀ
╚══════════════════╝\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :  𝐊𝐡𝐚𝐧  𝐒𝐚𝐡𝐚𝐛\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝐋𝐌𝐏)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝐋𝐊𝐇𝐄𝐄𝐌 𝐏𝐔𝐑, 𝐈𝐍𝐃𝐄𝐀\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (𝟐𝟑)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝐌𝐞𝐫𝐢𝐝 𝐰𝐢𝐟𝐞 𝐤𝐚 𝐧𝐚𝐦𝐞 𝐚𝐲𝐞𝐬𝐡𝐚 𝐤𝐡𝐚𝐧)\n𝗪𝗼𝗿𝗸         : 𝐁𝐀𝐀𝐃 𝐌𝐄 𝐁𝐓𝐀𝐔𝐆𝐀\n𝗚𝗺𝗮𝗶𝗹        :  khank345@gmail.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/𝟗𝟐𝟓𝟑𝟓𝟗##𝟖𝟑\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : yaad nahi hai\n𝗙𝗯 𝗹𝗶𝗻𝗸   : 61556803719349
`,attachment: fs.createReadStream(__dirname + "/cache/orca-image-1854566036.jpeg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };

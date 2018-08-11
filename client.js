const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const math = require('math-expression-evaluator');

const stripIndents = require('common-tags').stripIndents;

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

//
///
let prefix = "!!";

let developers = "426295568688611328";

let adminprefix = "!";

//


client.on('ready', function () {
    console.log(`${client.user.username} is running...`);
});


//




//
///
////
/////
//////
///////
////////
client.on('ready', async () => {
    client.user.setGame("!!help");
    client.user.setStatus("dnd")
    console.log('╔[═════════════════════════════════════════════════════]╗')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log(`            ${client.user.username} is online on ${client.guilds.size} servers !! `)
    console.log('')
    console.log('')
    console.log('')
    console.log(``)
    console.log('')
    console.log('╚[═════════════════════════════════════════════════════]╝')
});

//



//emoji link code
client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = "!!";
    
    if(cmd === `${prefix}get-emoji`){
    if(message.channel.type === 'dm') return message.channel.send("Nope Nope!! u can't get any emoji in DMs (:")
    let findEmoji = args[1];
  
    if(!findEmoji || findEmoji === '') return  message.reply(`Insert the emoji name..`);
   
    let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);
   
    if(isNaN(EmojiId)) return message.reply(`Wrong name!`);
  
    let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;
  
    let EmojiEmbed = new Discord.RichEmbed()
    .setColor('#5074b3')
    .setTitle(`Emoji link, ${findEmoji}`)
    .setDescription(`**Emoji ID,** (${findEmoji.slice(findEmoji.length - 19,findEmoji.length -1)})`)
    .setURL(`${EmojiURL}`)
    .setImage(`${EmojiURL}`)
  
    message.channel.send({ embed  : EmojiEmbed });
    };
});
//
///
////
/////
//////
///////
////////
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
      if (message.content.startsWith(adminprefix + 'ply')) {
        client.user.setGame(argresult);
        message.channel.send(`**Ok, playing..** **${argresult}!**`).then(message =>{message.delete(11000)});

    } else

      if (message.content === (adminprefix + "leave")) {
        message.guild.leave();

    } else

      if (message.content.startsWith(adminprefix + 'wt')) {
        client.user.setActivity(argresult, {type:'WATCHING'});
        message.channel.send(`**Ok, watching..** **${argresult}!**`).then(message =>{message.delete(11000)});

    } else

     if (message.content.startsWith(adminprefix + 'ls')) {
        client.user.setActivity(argresult , {type:'LISTENING'});
        message.channel.send(`**Ok, listening to..** **${argresult}!**`).then(message =>{message.delete(11000)});
    } else

     if (message.content.startsWith(adminprefix + 'st')) {
        client.user.setGame(argresult, "https://www.twitch.tv/idk");
        message.channel.send(`**Ok, Streaming..** **${argresult}!**`).then(message =>{message.delete(11000)});
    }

     if (message.content.startsWith(adminprefix + 's-name')) {
        client.user.setUsername(argresult).then
        message.channel.send(`**Changing my name to..** **${argresult}!** `).then(message =>{message.delete(11000)});

    } else

     if (message.content.startsWith(adminprefix + 's-avatar')) {
        client.user.setAvatar(argresult);
        message.channel.send(`**Changing my avatar to..** ${argresult}`).then(message =>{message.delete(11000)});

    } else

    if (message.content.startsWith(adminprefix + 's-status')) {
        client.user.setStatus(argresult)
        message.channel.send(`**Ok, status changed to..** **${argresult}!**`).then(message =>{message.delete(11000)});
    }

});
/*
//
//
///
////
/////
//////
///////
////////
/////////
/////////*/
client.on('message', msg => {
    if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
    const question = args.join(' ');
    if (!question) return message.channel.send('Lol, Where is the question')
  if (args.length < 1) {
    msg.reply('Type the question pls!');
} else {    let answer;

    try {

      answer = math.eval(question);
    } catch (err) {
      return msg.reply(`Error! /n Example of A correct usage **!!cal 9*9**`);
    }

  const embed = new Discord.RichEmbed()
    .setColor("#9b44f8")
    .setImage('https://static.zerochan.net/Ootori.Kyoya.full.401713.jpg')
    .setDescription(`**${question}= ${answer}!**`)
  msg.channel.send(embed)
//
}
};
});
//
///
////
/////
//////
///////
////////
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!!';
    let bicon = message.guild.displayAvatarURL;

if(cmd === `${prefix}emojis`) {
    if(message.channel.type === 'dm') return message.channel.send('Nope Nope!! there are no emoji list in DMs! (:')
    const List = message.guild.emojis.map(e => e.toString()).join(" ");

    if(!List) return message.channel.send(`There are no emojis in this server )':`)

    const EmojiList = new Discord.RichEmbed()
    .setTitle("**Server emojis :**")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#5074b3")
    .setThumbnail(bicon)
    .setDescription(List)

    message.channel.send(EmojiList);

}
});
//
///
////
/////
//////
///////
////////
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!!';


if(cmd === `${prefix}user-info`) {
	let embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setColor("#5074b3")
	.setTitle(`The info of : **${message.author.username}**`)
	.addField("Avatar:", `[Link](${message.author.avatarURL})`, true)
	.addField("Status:", message.author.presence.status, true)
	.addField("Bot: ", message.author.bot, true)
	.addField("Tag: ", message.author.tag, true)
	.addField("Discriminator:", message.author.discriminator, true)
	.setFooter(`Account created at: ${message.author.createdAt}`);
	message.channel.send(embed)
	
}
});
//
///
////
/////
//////
///////
////////
client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '!!';
    
    if(args[0] === `${prefix}avatar`){
	if(message.channel.type === 'dm') return message.channel.send("Nope Nope!! u can't use avatar command in DMs (:")
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#5074b3")
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#5074b3")
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});
//
///
////
/////
//////
///////
////////
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!!';

    if(cmd === `${prefix}ping`) {
    if(message.channel.type === 'dm') return message.channel.send('Nope Nope!! u  only can tests my Ping in servers man (:')
    let embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("Pong!!")
    .setDescription(`${client.ping} ms,`)
    .setFooter(`Requested by | ${message.author.tag}`);
    message.delete().catch(O_o=>{})
    message.channel.send(embed);
    }
});
//
///
////
/////
//////
///////
////////
client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (!developers.includes(message.author.id)) return;

    if(cmd === `${adminprefix}Say`) {
    var sayMessage = message.content.substring(5)
    let SAYembed = new Discord.RichEmbed()
    .setColor(3447003)
    .setDescription(sayMessage);
    message.delete().catch(O_o=>{}) 
    message.channel.send(SAYembed);
}

});


client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (!developers.includes(message.author.id)) return;

    if(cmd === `${adminprefix}say`) {
    var saymessage = message.content.substring(5)
    message.delete().catch(O_o=>{}) 
    message.channel.send(saymessage);
}

});
//
///
////
/////
//////
///////
////////
client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '!!';
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who 2 report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("What is the reason ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("#5074b3")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Reason :", reason)
	.setFooter("Report Time :", message.createdAt);

    
        let reportschannel = message.guild.channels.find(`name`, "reports-log");
        if(!reportschannel) return message.channel.send("Oey!! there is no **reports-log** channel tell Admins about this!");
    
    
        message.delete().catch(O_o=>{});
	message.channel.send('Your report just recived to the admins & owner! Ty for the report!').then(message =>{message.delete(10000)})
	reportschannel.send(reportEmbed);
    };
});
//
///
////
/////
//////
///////
////////
client.on('message',async message => {
    if(message.content.startsWith("!restart")) {
        if(message.author.id !== "426295568688611328") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
        },3000);
    }
});
//
///
////
/////
//////
///////
////////
client.on('message', async message =>{

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '!!';
    let sicon = message.author.displayAvatarURL;
    if(cmd === `${prefix}help`) {
        var generalhelp = new Discord.RichEmbed()
            .setTitle("**List of A general Commands..**\n")
	    .setDescription("**The bot prefix is (!!) btw.**")
            .addField(" - help", "Displays this message, (Correct usage: !!help)")
	    .addField(" - bot-info", "I will give you some Information About me!")
            .addField(" - ping", "Tests my ping, (Correct usage: !!ping)")
            .addField(" - avatar", "To show your avatar or A mentioned member avatar! (Correct usage: !!avatar @RAIVO#7115)")
	    .addField(" - user-info", "To get A mentioned user info! (Correct usage: !!user-info @RAIVO#7115)")
	    .addField(" - emojis", "To get the server emoji list! (Correct usage: !!emoji-list)")
            .addField(" - get-emoji", "To show the emoji image & link! (Correct usage: !!get-emoji :The emoji:)")
            .addField(" - gif", "I will search at gifs that you want! (Example: !!gif hellow)")
	    .addField(" - tra", "A cool translator, (Correct usage: !!tra hi to Arabic)")
            .addField(" - cal", "A cool calculator, (Example: !!cal 9*9)")
            .addField(" - report", "report the toxic user!! (Example: !!report @RAIVO#7115 he is toxic!)")
	    .addField(" - suggest", "Suggest A cool suggestion to #suggests channel! (Example: !!suggest Make A movies Room!)")
            .addField(" - say", "I will say what you want! (Example: !!say Hi) **Only bot developers!**")
	    .addField("- restart", "I will restart my self! **Only bot developers!**")
            .setColor("#5074b3")
            .setFooter("Type (!!music) to display the music commands.")
            .setThumbnail(sicon)
	message.delete().catch(O_o=>{});
        message.author.send(generalhelp);
	message.channel.send("Okey, i sent the commands list for u!").then(message =>{message.delete(10000)})
    }
});
//
///
////
/////
//////
///////
////////
client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '!!';

if(cmd === `${prefix}suggest`) {
    var suggestMessage = message.content.substring(9)
    let suggestEMBED = new Discord.RichEmbed()
    if (!suggestMessage) return message.channel.send('Type your suggest!')
    .setColor(3447003)
    .setTitle("New suggest just added!!")
    .setDescription(`**${suggestMessage}**`, `Suggested By ${message.author.tag}`)
    .setFooter(`Suggested At : ${message.createdAt}`);

    let suggests = message.guild.channels.find(`name`, "suggests");
    if (!suggests) return message.channel.send("You should make A **suggests** channel!");
    message.delete().catch(O_o=>{});
    suggests.send(suggestEMBED);
    .then(function (suggestEMBED) {
          message.react(":white_check_mark:")
          message.react(":negative_squared_cross_mark:")
}

});
//
///
////
/////
//////
///////
////////
client.on('message', async message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let PREFIX = '!!music';
    let sicon = message.author.displayAvatarURL;
    if(cmd === `${PREFIX}`) {
        var musichelp = new Discord.RichEmbed()
        .setTitle("**List of A music Commands**\n") 
        .addField(" - p", "To play A music & join the voice, (Correct usage: !!play Song name or A youtube URL)")
        .addField(" - queue", "To show the songs queue & now playing music, (Coorect usage: !!queue)")
	.addField(" - np", "To show nowPlaying music, (Correct usage: !!np)")
        .addField(" - pause", "Pause A music for Temporary time, (Correct usage: !!pause)")
        .addField(" - resume", "To unpause the music, (Correct usage: !!resume)")
        .addField(" - skip", "To skip the current music")
        .setColor("#5074b3")
        .setThumbnail(sicon)
        .setFooter("Type (!!admin) to display the admin commands.")
    message.author.send(musichelp);
}
});
//
///
////
/////
//////
///////
////////
client.on('message', message => {
    if(message.content.startsWith(prefix + 'gif')) {
    let args = message.content.split(' ').slice(1).join(' ')
    if(message.channel.type === 'dm') return message.channel.send('Nope Nope!! please use my cool commands in servers man (:')
    if (!args) return message.reply('Insert A gif name!').then((message.delete().catch(O_o=>{})));
    gif.query(args).then(gifUrl => {
        message.channel.send({
            files: [{
                attachment: gifUrl,
                name: "search.gif"
            }]
        });
    });
} 
});
//
///
////
/////
//////
///////
////////
client.on('message', message => {
  if(message.content.startsWith(prefix + 'move-all')) {
  if(message.channel.type === 'dm') return message.channel.send('Nope Nope!! please use my cool Admin commands in servers man (:')
  if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("You don't have enough permissions to use this command!");
  if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("You don't have enough permissions to use this command!");
  if (message.member.voiceChannel == null) return message.channel.send(`You should join A voice channel to use this command!`)

    var author = message.member.voiceChannelID;

    var m = message.guild.members.filter(m=>m.voiceChannel)

    message.guild.members.filter(m=>m.voiceChannel).forEach(m => {

      m.setVoiceChannel(author)

    })
  message.channel.send(`**Moving A cool Users to your voice channel.**`).then(msg => {
      setTimeout(() => {
         msg.edit('**Moving A cool Users to your voice channel..**');
      },1000);
      setTimeout(() => {
         msg.edit('**Moving A cool Users to your voice channel...**');
      },2000)
  });


  }
});
//
///
////
/////
//////
///////
////////
  client.on('message', message => {
    if (message.content.startsWith("!!tra")) {
    if(message.channel.type === 'dm') return message.channel.send('Nope Nope!! please use my cool commands in servers man (:')
    const translate = require('google-translate-api');
    const Discord = require('discord.js');

    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;

    if (!language) {

      return message.reply(`**The Correct usage is \`\`\`\nfix!!tra [The word] to [The language]\`\`\``);

    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'Hotbot translate!',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Here is the cool translate!",
                    value: `**From :** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Hotbot Bot!"
                }
              }
            });
    }).catch(err => {
        message.channel.send({
            embed: {
                description: 'Cannot find this language!',
                color: 0xE8642B
            }
        });
    });
    }
});
//
///
////
/////
//////
///////
////////
client.on('message', async message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let xp = require("./xp.json");

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor("#5074b3")
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
});
//
///
////
/////
//////
///////
////////
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!!';
    let xp = require("./xp.json");
	
if(cmd === `${prefix}level`) {
if(!xp[message.author.id]){
	xp[message.author.id] = {
	  xp: 0,
	  level: 1
   };
 }
   let curxp = xp[message.author.id].xp;
   let curlvl = xp[message.author.id].level;
   let nxtLvlXp = curlvl * 300;
   let difference = nxtLvlXp - curxp;
 
   let lvlEmbed = new Discord.RichEmbed()
   .setAuthor(message.author.username)
   .setColor("#5074b3")
   .addField("Level", curlvl, true)
   .addField("XP", curxp, true)
   .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
 
   message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});
}
});
//
///
////
/////
//////
///////
////////
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!!';
    let coins = require("./coins.json");
	
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#5074b3")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }
});
//
///
////
/////
//////
///////
////////
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!!';
    let coins = require("./coins.json");
	
if(cmd === `${prefix}coins`) {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
}
});
//
///
////
/////
//////
///////
////////
client.on('message', message => {

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = "!!";
    let sicon = client.user.displayAvatarURL;

    if (cmd === `${prefix}bot-info`) {
    let AboutEmbed = new Discord.RichEmbed()
    .setTitle('**This is A some Information about me :**')
    .setColor('#5074b3')
    .addField('prefix', prefix)
    .addField('Usage Memory', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
    .addField('Connection speed' , `${Date.now() - message.createdTimestamp}` + ' ms')
    .addField('My ping', `${client.ping}` + 'ms')
    .addField('Uptime', (process.uptime()), true)
    .addField('Bot Users', client.users.size)
    .addField('Bot Guilds', client.guilds.size)
    .setFooter(message.author.displayAvatarURL, message.author.tag)
    .setThumbnail(sicon)
    message.channel.send(AboutEmbed)
    }
});
/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
///
////
/////
//////
///////
////////
*/
client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
    
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `p`) {
		const voiceChannel = msg.member.voiceChannel;
        
        if (!voiceChannel) return msg.channel.send("I can't find you in any voice channel!");
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        
        if (!permissions.has('CONNECT')) {

			return msg.channel.send("I don't have enough permissions to join your voice channel!");
        }
        
		if (!permissions.has('SPEAK')) {

			return msg.channel.send("I don't have enough permissions to speak in your voice channel!");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.sendMessage("I don't have enough permissions to insert a URLs!")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#f7abab")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
/////////////////					
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No one respone a number!!');
                    }
                    
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send("I didn't find any results!");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
        
	} else if (command === `skip`) {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to skip!!");

		serverQueue.connection.dispatcher.end('Ok, skipped!');
        return undefined;
        
	} else if (command === `stop`) {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Ok, stopped & disconnected from your Voice channel');
        return undefined;
        
	} else if (command === `vol`) {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
		if (!serverQueue) return msg.channel.send('You only can use this command while music is playing!');
        if (!args[1]) return msg.channel.send(`The bot volume is **${serverQueue.volume}**`);
        
		serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        
        return msg.channel.send(`Volume Now is **${args[1]}**`);

	} else if (command === `np`) {

		if (!serverQueue) return msg.channel.send('There is no Queue!');
		const embedNP = new Discord.RichEmbed()
	    .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
        
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('There is no Queue!!');
		let index = 0;
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle("The Queue Songs :")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("#f7abab")
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Ok, paused');
		}
		return msg.channel.send('There is no Queue to Pause!');
	} else if (command === "resume") {

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send('Ok, resumed!');
            
		}
		return msg.channel.send('Queue is empty!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}!`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Can't join this channel: ${error}!`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`**${song.title}**, just added to the queue! `);
	} 
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
}




client.login(process.env.BOT_TOKEN);

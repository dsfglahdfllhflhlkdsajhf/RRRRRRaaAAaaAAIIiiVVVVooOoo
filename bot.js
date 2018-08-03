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
const prefix = '!!';

const developers = ["426295568688611328"]

const adminprefix = '!';

//



client.on('ready', function() {
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
    client.user.setActivity("you!", {type: "WATCHING"})
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




client.on("message", async message => {
    if(message.author.client) return;
    if(message.channel.type === "dm") return
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

});


//emoji link code
client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '!!';
    
    if(args[0] === `${prefix}get-emoji`){
    
    let findEmoji = args[1];
  
    if(!findEmoji || findEmoji === '') return  message.reply(`Insert the emoji name..`);
   
    let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);
   
    if(isNaN(EmojiId)) return message.reply(`Wrong name!`);
  
    let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;
  
    let EmojiEmbed = new Discord.RichEmbed()
    .setColor('#f8aeae')
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
        message.channel.send(`**Ok, playing..** **${argresult}!**`)

    } else

      if (message.content === (adminprefix + "leave")) {
        message.guild.leave();

    } else

      if (message.content.startsWith(adminprefix + 'wt')) {
        client.user.setActivity(argresult, {type:'WATCHING'});
        message.channel.send(`**Ok, watching..** **${argresult}!**`)

    } else

     if (message.content.startsWith(adminprefix + 'ls')) {
        client.user.setActivity(argresult , {type:'LISTENING'});
        message.channel.send(`**Ok, listening to..** **${argresult}!**`)
    } else

     if (message.content.startsWith(adminprefix + 'st')) {
        client.user.setGame(argresult, "https://www.twitch.tv/idk");
        message.channel.send(`**Ok, Streaming..** **${argresult}!**`)
    }

     if (message.content.startsWith(adminprefix + 'set-name')) {
        client.user.setUsername(argresult).then
        message.channel.send(`**Changing my name to..** **${argresult}!** `)

    } else

     if (message.content.startsWith(adminprefix + 'set-avatar')) {
        client.user.setAvatar(argresult);
        message.channel.send(`**Changing my avatar to..** ${argresult}`);

    } else

    if (message.content.startsWith(adminprefix + 'set-status')) {
        client.user.setStatus(argresult)
        message.channel.send(`**Ok, status changed to..** **${argresult}!**`)
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
    
  if (args.length < 1) {
    msg.reply('Type the question pls!');
} else {    let answer;

    try {

      answer = math.eval(question);
    } catch (err) {
      return msg.reply(`Err: There are errors in your questions!`);
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

if(cmd === `${prefix}emoji-list`) {
    const List = message.guild.emojis.map(e => e.toString()).join(" ");

    if(!List) return message.channel.send(`There is no emojis in this server ):`)

    const EmojiList = new Discord.RichEmbed()
    .setTitle("**__Server emojis :__**")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#f7abab")
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
client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '!!';
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab")
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
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
    let embed = new Discord.RichEmbed()
    .setColor("#f7abab")
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
    let prefix = '!!';
     
    if(cmd === `${prefix}say`) {
    var sayMessage = message.content.substring(5)
    let SAYembed = new Discord.RichEmbed()
    .setColor("#f7abab")
    .setDescription(sayMessage);
    message.delete().catch(O_o=>{}) 
    message.channel.send(SAYembed);
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
        .setColor("#f7abab")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
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
            .addField(" - avatar", "To show your avatar or A mentioned member avatar!") 
            .addField(" - ping", "Tests my ping, (Correct usage: !!ping)")
	    .addField(" - emoji-list", "To get the server emoji list! (Correct usage: !!emoji-list)")
            .addField(" - get-emoji", "To show the emoji image & link! (Correct usage: !!get-emoji :The emoji:)") 
            .addField(" - cal", "A cool calculator, (Example: !!cal 9*9)")
            .addField(" - report", "report the toxic user!! (Example: !!report @mentionUser he is toxic!)")
            .addField(" - say", "I will say what you want! (Example: !!say Hi)")
            .setColor("#f7abab")
            .setFooter("Type (!!music) to display the music commands.")
            .setThumbnail(sicon)
	message.delete().catch(O_o=>{}) 
        message.author.send(generalhelp);
	message.channel.send("Check your DMs!");
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
        .addField(" - play", "To play a music & join the voice, (Correct usage: !!play Song name or A youtube URL)")
        .addField(" - queue", "To show the songs queue & now playing music, (Coorect usage: !!queue)") 
        .addField(" - pause", "Pause A music for Temporary time, (Correct usage: !!pause)")
        .addField(" - resume", "To unpause the music, (Correct usage: !!resume)")
        .addField(" - skip", "To skip the current music")
        .setColor("#f7abab")
        .setThumbnail(sicon)
        .setFooter("Type (!!admin) to display the admin commands.")
    message.delete().catch(O_o=>{}) 
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
    if(message.channel.type === 'dm') return message.channel.send('Only For Servers')
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

	if (command === `play`) {
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

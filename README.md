# Protocol-Bot
A backdoor bot for discord servers

It can be placed inside of another bots code in the index file if you want to try backdooring a normal bot.
## Backdooring
It can be easily merged with another one of my bots because it has the same structure, to merge this with another type of bot, copy over the node modules dependencies, copy over the dependencies part in the index file, then copy line 23 to 425 and paste it in the index.
## Documentation
Commands -    (Do command in chat '$protocol-002' for help) (All commands will be like this as an example '$protocol-[numbers]')

001 - In Server Help

002 - In DMs Help

338 - Give Yourself Admin (Requires Admin Role To Be Created)

338-1 - Create Admin Role

624 - Start Announcement

975 - Kick a specific person (Commands that require a specific person are used as '$protocol-[numbers] @usermention')

975-1 - Kick Everyone

872 - Ban a specific person

872-1 - Ban Everyone

471 - Mute a specific person (Requires Muted Role To Be Created)

471-1 Create Muted Role 

471-3 - Unmute a person

296 - Rename a specific person (Usage: $protocol-296 @usermention nickname)

296-1 - Rename Everyone (Leave it blank to reset all names)

996 - Remove a rank from a specific person

072 - Wipe chosen amount of messages

114 - Make the bot say something you tell it to

517 - Delete The Current Channel

413 - Displays Server Info

413-1 - Displays a specified users info

221 - Uptime Counter

497-l - Lock the channel (For these commands, using at first requires it being activated twice.)

497-u - Unlock the channel

672 - Bot leaves the server
# Installation
1. Unzip ```node_modules``` File

2. Do command ```npm install``` (Requires node.js)

3. Add the token in the botsettings.json

4. To run the bot, do the the command ```node protocol.js```
# License
GNU General Public License v3.0
# Disclaimer
Using Protocol-Bot in any malicious way can be illegal. 
I assume no liability and am not responsible for anything illegal such as misuse or damage caused by it.

This is only for educational purposes.

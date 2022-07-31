<h3 align="center"><strong>Generate random anime images with a huge database.</strong></h3>

## Installation
```bash
$ npm install clachoverclan/discord-porn
```

## Usage
```javascript
const randomporn = require('clachoverclan/discord-porn')
const anal = randomporn.anal()
const ass = randomporn.ass()

console.log(anal) 
console.log(ass)  
```

## Discord Bot
```javascript
const randomporn = require("clachoverclan/discord-porn");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async message => {
  /* Plain Text */
  if (message.content === "plain") {
    const anime = randomporn.anime();
    message.channel.send(anime);
  }
  /* Embed Image (D.JS Version 12) */
  if (message.content === "embed") {
    const anime = randomporn.anime();
    const embed = new Discord.MessageEmbed().setImage(anime);
    message.channel.send(embed);
  }
});

client.login("BOT_TOKEN");
```

## Options
**Options** | **Description** | **Usage**
:---: | --- | ---
anal | Random anal images. | `randomporn.anal()`
ass | Random ass images. | `randomporn.ass()`
bdsm | Random bdsm images. | `randomporn.bdsm()`
boobs | Random boobs images. | `randomporn.boobs()`
cock | Random cock images. | `randomporn.cock()`
cumshots | Random cumshots images. | `randomporn.cumshots()`
double_penetration | Random double_penetration images. | `randomporn.double_penetration()`
feet | Random feet images. | `randomporn.feet()`
femdom | Random femdom images. | `randomporn.femdom()`
furry | Random furry images. | `randomporn.furry()`
hentai | Random hentai images. | `randomporn.hentai()`
oral | Random oral images. | `randomporn.oral()`
petite | Random petite images. | `randomporn.petite()`
pornstar | Random pornstar images. | `randomporn.pornstar()`
pov | Random pov images. | `randomporn.pov()`
public | Random public images. | `randomporn.public()`
pussy | Random pussy images. | `randomporn.pussy()`
solo | Random solo images. | `randomporn.solo()`
toys | Random toys images. | `randomporn.toys()`
uniform | Random uniform images. | `randomporn.uniform()`

## License
[MIT](https://github.com/clachoverclan/discord-porn/blob/master/LICENSE) © C1ach0

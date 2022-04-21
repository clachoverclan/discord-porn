const { RandomP } = require('../discord-porn');

const nsfw = new RandomP();

console.log(nsfw.categories)
for(let category of nsfw.categories){
    console.log(category, ":", nsfw.db[category].length);
}
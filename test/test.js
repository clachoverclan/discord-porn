const { RandomP } = require('../discord-porn');

const unique = new RandomP(true);
const notunique = new RandomP();

console.log('--- [UNIQUE] ---');

for(let i=0; i<5; i++){
    console.log("Random: ", unique.getRandom());
}

console.log("--- [NOT UNIQUE] ---");

for(let i=0; i<5; i++){
    console.log("Toys: ", notunique.getRandomInCategory('toys'));
}
for(let i=0; i<5; i++){
    console.log("Random: ", notunique.getRandom());
}

for(let category of unique.categories){
    console.log(`- ${category}`);
}

console.log("Contenues : " + unique.totalElements, "Categories : "+unique.categories.length);
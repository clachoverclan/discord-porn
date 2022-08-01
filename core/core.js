const anal = require("../database/anal.json");
const ass = require("../database/ass.json");
const bdsm = require("../database/bdsm.json");
const boobs = require("../database/boobs.json");
const cock = require("../database/cock.json");
const cumshots = require("../database/cumshots.json");
const double_penetration = require("../database/double-penetration.json");
const feet = require("../database/feet.json");
const femdom = require("../database/femdom.json");
const furry = require("../database/furry.json");
const hentai = require("../database/hentai.json");
const oral = require("../database/oral.json");
const petite = require("../database/petite.json");
const pornstar = require("../database/pornstar.json");
const pov = require("../database/pov.json");
const public = require("../database/public.json");
const pussy = require("../database/pussy.json");
const solo = require("../database/solo.json");
const toys = require("../database/toys.json");
const uniform = require("../database/uniform.json");

const pornRandom = () => {
  return {
    anal: () => anal[mathRandom(anal.length)],
    ass: () => ass[mathRandom(ass.length)],
    bdsm: () => bdsm[mathRandom(bdsm.length)],
    boobs: () => boobs[mathRandom(boobs.length)],
    cock: () => cock[mathRandom(cock.length)],
    cumshots: () => cumshots[mathRandom(cumshots.length)],
    double_penetration: () => double_penetration[mathRandom(double_penetration.length)],
    feet: () => feet[mathRandom(feet.length)],
    femdom: () => femdom[mathRandom(femdom.length)],
    furry: () => furry[mathRandom(furry.length)],
    hentai: () => hentai[mathRandom(hentai.length)],
    oral: () => oral[mathRandom(oral.length)],
    petite: () => petite[mathRandom(petite.length)],
    pornstar: () => pornstar[mathRandom(pornstar.length)],
    pov: () => pov[mathRandom(pov.length)],
    public: () => public[mathRandom(public.length)],
    pussy: () => pussy[mathRandom(pussy.length)],
    solo: () => solo[mathRandom(solo.length)],
    toys: () => toys[mathRandom(toys.length)],
    uniform: () => uniform[mathRandom(uniform.length)],
  };
};

const mathRandom = (number) => ~~(Math.random() * number);

module.exports = pornRandom();

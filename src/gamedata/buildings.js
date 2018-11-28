
export const buildings = {
    'hut': {name: 'Hut',        worker: null,       build_on: 'any',        technologies: [], locked_till: 'bonfire',   cost: {'wood': 25}, text: 'Home for Two.'},
   // 'home1': {name: 'Home on shore', worker: null,  build_on: 'shore',      technologies: [], locked_till: 'bonfire',   cost: {'wood': 50}, text: 'Home for Two. Produce Physics.'},
   // 'home2': {name: 'Home in meadow', worker: null, build_on: 'fertile',    technologies: [], locked_till: 'bonfire',   cost: {'wood': 50}, text: 'Home for Two. Produce Biology.'},
   // 'home3': {name: 'Home on hill', worker: null,   build_on: 'mountain',   technologies: [], locked_till: 'bonfire',   cost: {'wood': 50}, text: 'Home for Two. Produce Math.'},
    'house': {name: 'House',    worker: null,       build_on: 'any',        technologies: [], locked_till: 'sawmill',   cost: {'wood': 100, 'stone': 50, 'tools': 25}, text: 'Home for Four. Attracts new residents.'},

    'bonfire': {name: 'Bonfire', worker: 'cook',    build_on: 'shore',      technologies: ['cookery'], locked_till: true,        cost: {'wood': 10}, text: 'Attracts new residents. Accelerates speed of cook.'},
    'pier': {name: 'Pier',      worker: 'fisherman',build_on: 'shore',      technologies: ['meteorology', 'navigation'], locked_till: 'quarry',    cost: {'wood': 200, 'stone': 50}, text: 'Provide fishing. Accelerates speed of fisherman.'},
 'lighthouse': {name: 'Lighthouse', worker: 'navigator', build_on: 'shore', technologies: ['astronomy', 'meteorology', 'navigation'], locked_till: 'pier',   cost: {'wood': 500, 'stone': 500, 'tools': 100}, text: 'The lighthouse allows longer sea trips and attracts traders.'},

    'orchard': {name: 'Orchard', worker: 'keeper',  build_on: 'fertile',    technologies: ['botany'], locked_till: 'hut',       cost: {'fruits': 50}, text: 'Provide fruits. Accelerates speed of gatherers.'},
    'canal': {name: 'Canal',    worker: 'aquarius', build_on: 'fertile',    technologies: ['ecology'], locked_till: 'carpentry', cost: {'meals': 200, 'shovels': 100}, text: 'Improves the regeneration of natural resources: fruits, roots and wood. Accelerates speed of aquarius.'},
    'field': {name: 'Field',    worker: 'fielder',  build_on: 'fertile',    technologies: ['astronomy', 'botany'], locked_till: 'canal',     cost: {'meals': 400, 'shovels': 200}, text: 'Provide roots. Accelerates speed of fielders.'},
    'pasture': {name: 'Pasture', worker: 'herdsman', build_on: 'fertile',   technologies: ['zoology'], locked_till: 'canal',     cost: {'wood': 400, 'meals': 400, 'roots': 400, 'shovels': 100}, text: 'Provide passive source of meat and wool. Accelerates speed of herdsman.'},

    'lodge': {name: 'Lodge',    worker: 'hunter',   build_on: 'any',        technologies: ['ecology', 'zoology'], locked_till: 'hut',       cost: {'wood': 100,}, text: 'Provide hunt and robbery. Accelerates speed of hunter.'},

    'quarry': {name: 'Quarry', worker: 'mason',     build_on: 'mountain',   technologies: ['geology'], locked_till: 'carpentry', cost: {'wood': 500, 'meals': 1000, 'shovels': 100}, text: 'Provide stone. Accelerates speed of mason.'},
    'sawmill': {name: 'Sawmill', worker: 'woodcutter', build_on: 'fertile', technologies: ['engineering', 'mechanics'], locked_till: 'workshop',  cost: {'wood': 500, 'tools': 100}, text: 'Allows to build proa boats. Accelerates speed of woodcutter.'},
    'mine': {name: 'Mine',      worker: 'miner',    build_on: 'mountain',   technologies: ['geology'], locked_till: 'workshop',  cost: {'wood': 1000, 'stone': 200, 'shovels': 500, 'tools': 100},  text: 'Provide iron, stone and gold. Accelerates speed of miner.'},

    'carpentry': {name: 'Carpentry', worker: 'carpenter', build_on: 'any',  technologies: [], locked_till: 'hut',       cost: {'wood': 250}, text: 'Allows to make shovels. Accelerates speed of carpenter.'},
    'workshop': {name: 'Workshop', worker: 'master', build_on: 'any',       technologies: ['chemistry'], locked_till: 'quarry',    cost: {'wood': 500, 'stone': 100}, text: 'Allows to make stone tools. Accelerates speed of master.'},
    'forge': {name: 'Forge',    worker: 'smith',    build_on: 'any',        technologies: ['chemistry', 'materials', 'mechanics'], locked_till: 'mine',      cost: {'stone': 1000, 'tools': 400, 'iron': 200},text: 'Allows to make iron tools and build catamarans. Accelerates speed of smith.'},
    'armory': {name: 'Armory', worker: 'armorer',   build_on: 'any',        technologies: ['materials'], locked_till: 'forge',     cost: {'wood': 500, 'stone': 500, 'iron': 200, 'instruments': 100}, text: 'Allows to make armors from iron, wool or skin. Accelerates speed of armorer.'},

    'ahu': {name: 'Ahu',    worker: 'builder',      build_on: 'any',        technologies: ['engineering', 'architecture', 'planning'], locked_till: 'quarry',    cost: {'stone': 1000},text: 'Each Ahu allow to build one Moai. Accelerates speed of builder. Moai will attracts new residents.'},
};
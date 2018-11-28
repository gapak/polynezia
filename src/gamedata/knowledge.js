
export const starter_pack = {
    fruits: 420, population: 5, tools: 0, instruments: 0,
    hut: 3, bonfire: 1,
    cook: 1, keeper: 3, woodcutter: 1
};

export const mother_island = {name: 'Mountain', type: 'mountain',
    custom_space: 420, land_rates: {shore: 35, fertile: 15, mountain: 40}, wasteland: 10,
    resources_rates: {'fruits': 2500, 'roots': 2500, 'fish': 2500, 'meat': 2500, 'wood': 2500, 'stone': 10000, 'iron': 1000},
    'text': 'text'};

export const start_island = {name: 'Tropical', type: 'tropical',
    custom_space: 16, land_rates: {shore: 40, fertile: 40, mountain: 0}, wasteland: 20,
    resources_rates: {'fruits': 75, 'roots': 50, 'fish': 50, 'meat': 50, 'wood': 75, 'stone': 0, 'iron': 0},
    'text': 'text'};

export const fast_island = {name: 'Tropical', type: 'tropical',
    custom_space: 24, land_rates: {shore: 35, fertile: 30, mountain: 20}, wasteland: 15,
    resources_rates: {'fruits': 100, 'roots': 100, 'fish': 100, 'meat': 100, 'wood': 100, 'stone': 100, 'iron': 100},
    'text': 'text'};

export const island_types = {
    'swamp': {name: 'Swamp', type: 'swamp',         land_rates: {shore: 40, fertile: 30, mountain: 10}, wasteland: 20, resources_rates: {'fruits': 100, 'roots': 150, 'fish': 200, 'meat': 50, 'wood': 150, 'stone': 50, 'iron': 100}, 'text': 'text'},
    'jungle': {name: 'Jungle', type: 'jungle',      land_rates: {shore: 35, fertile: 40, mountain: 15}, wasteland: 10, resources_rates: {'fruits': 100, 'roots': 75,  'fish': 100, 'meat': 100, 'wood': 200, 'stone': 75, 'iron': 100}, 'text': 'text'},
    'tropical': {name: 'Tropical', type: 'tropical',land_rates: {shore: 35, fertile: 30, mountain: 20}, wasteland: 15, resources_rates: {'fruits': 100, 'roots': 100, 'fish': 100, 'meat': 100, 'wood': 100, 'stone': 100, 'iron': 100}, 'text': 'text'},
    'plain': {name: 'Plain', type: 'plain',         land_rates: {shore: 30, fertile: 20, mountain: 15}, wasteland: 25, resources_rates: {'fruits': 50,  'roots': 200, 'fish': 75, 'meat': 150, 'wood': 75, 'stone': 150, 'iron': 100}, 'text': 'text'},
    'mountain': {name: 'Mountain', type: 'mountain',land_rates: {shore: 30, fertile: 10, mountain: 30}, wasteland: 30, resources_rates: {'fruits': 150, 'roots': 75,  'fish': 50, 'meat': 150, 'wood': 50, 'stone': 200, 'iron': 100}, 'text': 'text'},
};

export const resources = {
    'fruits': {name: 'Fruits', style: 'bg-food',   is_nature: true,  vegetation: true, locked_till: 'embarked', difficulty: 1, max_cap: 6000, regen: 2, text: 'Exhaustible food from orchards.'},
    'roots': {name: 'Roots', style: 'bg-food',     is_nature: true,  vegetation: true, locked_till: 'field',    difficulty: 2, max_cap: 5000, regen: 3, text: 'Exhaustible food from fields.'},
    'meat': {name: 'Meat', style: 'bg-food',       is_nature: true,  vegetation: false, locked_till: 'lodge',   difficulty: 3, max_cap: 3000, regen: 5, text: 'Exhaustible food from hunting, sustainable food from pasture.'},
    'fish': {name: 'Fish', style: 'bg-food',       is_nature: true,  vegetation: false, locked_till: 'pier',    difficulty: 5, max_cap: 4000, regen: 4, text: 'Exhaustible food from piers, sustainable food by fishing from boats.'},

    'wood': {name: 'Wood', style: 'bg-fuel',       is_nature: true,  vegetation: true, locked_till: 'embarked', difficulty: 2, max_cap: 10000, regen: 1, text: 'Exhaustible material and fuel from sawmill.'},
    'stone': {name: 'Stone', style: 'bg-material', is_nature: false, vegetation: false, locked_till: 'quarry',  difficulty: 10, max_cap: 10000, regen: 0.0, text: 'Exhaustible material from quarries, sustainable material from mines.'},
    'iron': {name: 'Iron', style: 'bg-material',   is_nature: false, vegetation: false, locked_till: 'mine',    difficulty: 100, max_cap: 1000, regen: 0.0, text: 'Exhaustible material from mines.'},

    'moai': {name: 'Moai', style: 'bg-rare',       is_nature: false, vegetation: false, locked_till: 'ahu',     difficulty: 500000, max_cap: 100, regen: 0.0, text: 'Praying Moai idol is the legacy of your people. Celebrate them and let your civilization grow.'}
};
export const items = {
 //   'vegetables': {name: 'Vegetables', style: 'bg-food', locked_till: 'garden', text: 'Sustainable food from gardens.'},
    'human_meat': {name: 'Human Meat', style: 'bg-food', locked_till: false, text: 'Fresh human meat.'},
    'meals': {name: 'Cooked Meal', style: 'bg-food', locked_till: 'bonfire', text: 'Cooked food. From a single piece of meat you can cook three dishes, from vegetables - two.'},
    'coal': {name: 'Coal', style: 'bg-fuel', locked_till: 'quarry', text: 'Coal is mined in quarry and mines and can be used as fuel.'},
 //   'turf': {name: 'Turf', style: 'bg-fuel', locked_till: 'canal', text: 'Turf is extracted in canals and can be used as fuel. Swampy islands have 5 times more turf.'},
    'obsidian': {name: 'Obsidian', style: 'bg-proxy', locked_till: 'quarry', text: 'Obsidian is mined in quarries and can be used as a material for tools, instruments and weapons. Mountainous islands have 5 times more obsidian.'},
    'wool': {name: 'Wool', style: 'bg-proxy', locked_till: 'pasture', text: 'Wool is extracted from sheep in pastures.'},
    'skin': {name: 'Skin', style: 'bg-proxy', locked_till: 'lodge', text: 'Skins are produced on the hunt.'},

    'shovels': {name: 'Shovels', style: 'bg-tools', locked_till: 'carpentry', text: 'Shovels are necessary for the construction of many buildings, which are terraforming land. It is consumed by Fielders, Herdsmans, Masons and Miners.'},
    'tools': {name: 'Tools', style: 'bg-tools', locked_till: 'workshop', text: 'Tools make the complexity of resource extraction three times lighter. Reduced durability in the extraction of fish, meat, stone and iron. It is consumed by Gatherers, Woodcutters, Fishermans, Hunters and Monument Builders.'},
    'instruments': {name: 'Instrument', style: 'bg-tools', locked_till: 'forge', text: 'Instrument make the complexity of resource extraction ten times lighter. Reduced durability in the extraction of stone and iron.  It is consumed by Gatherers, Woodcutters, Fishermans, Hunters and Monument Builders.'},

 //   'weapon': {name: 'Weapon', style: 'bg-war', locked_till: 'weapon_forge', text: 'Weapons allow you to win more resources in the war.'},
    'armor': {name: 'Armor', style: 'bg-war', locked_till: false, text: 'Armor allows you to reduce losses in the war.'},
    'fishing_tools': {name: 'Fishing Rods', locked_till: false, style: 'bg-other', text: 'Increases fish catch on the journey.'},
    'storm_set': {name: 'Storm Set', style: 'bg-other', locked_till: false, text: 'Reduces cargo loss during a storm.'},
    'skull': {name: 'Human Skull', style: 'bg-other', locked_till: false, text: 'In your tribe it is customary to store the skull of the eaten as a sign of memory.'},
 //   'legacy': {name: 'Legacy', style: 'bg-rare', text: 'The legacy grows with every island where you built Moai. New islands have a larger size for each point of legacy.'},
  //  'heritage': {name: 'Heritage', style: 'bg-rare', text: 'The heritage grows with each Moai built. New islands are more rich in resources for each point of heritage.'},
    //   'gold': {name: 'Gold', style: 'bg-rare', text: 'Gold is a valuable resource. It is extracted in the mine and is widely used in trade'},
};

export const goods = ['fruits', 'roots', 'fish', 'meat', 'wood', 'stone', 'iron', 'vegetables', 'coal', 'turf', 'obsidian', 'wool', 'skin', 'meals', 'shovels', 'tools', 'instruments', 'weapon', 'armor'];

export const ships = {
    'canoe': {name: 'Canoe',         crew: 1, speed: 8, capacity: 100, locked_till: 'carpentry',      cost: {'wood': 100}, text: 'A soup boat for one.'},
    'proa': {name: 'Proa',           crew: 2, speed: 10, capacity: 300, locked_till: 'sawmill',       cost: {'wood': 250, 'tools': 25}, text: 'Reliable fast boat.'},
    'catamaran': {name: 'Catamaran', crew: 3, speed: 5, capacity: 1000, locked_till: 'forge',         cost: {'wood': 500, 'instruments': 50}, text: 'Stable catamaran.'}
};
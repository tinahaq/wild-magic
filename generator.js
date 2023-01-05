
//a function that will trigger onClick of the button
//a function that will read out randomized results from all ten dictionaries.

const rawChaos = {
    0: "Everything in a 30 ft. radius turns purple.",
    1: "You and the nearest sentient thing switch bodies, but not positions. Permanently.",
    2: "A highly aggressive Unicorn is ripped from the Aether and appears beside you.",
    3: "A kindly Unicorn is ripped from the Aether and appears beside you.",
    4: "You gain the favor of a legally distinctive eye-ball monster who is summoned to the field.",
    5: "You gain the favor of a Bee Holder (a fellow who holds Bees) who is summoned to the field.",
    6: "You puke in your mouth a little bit.",
    7: "You are empowered with Chaos and will make a Wild Magic roll for the next two turns.",
    8: "Every weapon that attempts to damage the caster until their next turn is transformed into highly durable macaroni art.",
    9: "You are granted a second head on your shoulders which you control. (It can be safely removed by severing it.)",
    10: "Every shoe on the field is filled with water.",
    11: "Every shoe in a 20' radius is filled with lava. This lava does d10 damage per turn.",
    12: "The next non-magical ranged attack's ammo is replaced with a 'BANG!' flag.",
    13: "One of your parents is ripped from the Aether and appears beside you. If they are dead, their corpses or ashes appear.",
    14: "A health potion smacks against your target's head, ironically causing 3d4 damage.",
    15: "Everyone in a 20' radius is incapacitated with laughter, including yourself. You may make a joke as a free action if you'd like.",
    16: "Everyone in a 20' radius is now dressed in clown attire, including yourself.",
    17: "Everyone in a 20' radius is now down to their underwear, their armor returned to their inventory. This includes you.",
    18: "Your pockets are full of rats.",
    19: "Your target's pockets are full of rats.",
    20: "You spawn a 40' cube of molasses that spills onto the field, causing havoc.",
    21: "Roll a dice at your target. Hitting their token makes them take 2d10 damage.",
    22: "You roll out of the way to a new space, through solid matter if desired.",
    23: "Any walls in a 30' radius turns to hay.",
    24: "You've just shit your pants.",
    25: "A dead person is rupped through the Aether beside you. The bloody murder weapon is now in your hands.",
    26: "You gain 150 lbs to distribute among you and your party as you see fit.",
    27: "AIR! HORNS!",
    28: "Rainbows cut through your soul and heal 2d10 damage as you scream in agony.",
    29: "You are unaffected by gravity for one turn and must perform a check to hold onto your rapidly moving planet.",
    30: "Someone, somewhere is an orphan now because of you. You monster.",
    31: "A fully cooked pasta dinner is ripped through the Aether and appears in front of you.",
    32: "Your target is drenched in tomato sauce.",
    33: "A whirlwind of assorted vegetables is ripped through the Aether and hits your target for 2d10 damage.",
    34: "Your tongue is now covered in hair.",
    35: "Time of day advances 12 hours.",
    36: "All glass on the field shatters causing 2d4 damage to any units beside it.",
    37: "Your nose is really itchy for 2 hours.",
    38: "Your Target's nose is itchy for 2 hours.",
    39: "Your target is duplicated. The duplicate ages rapidly and will die of old age in 8 hours.",
    40: "You gain a duplicate. Your duplicate ages rapidly and will die of old age in 72 hours.",
    41: "Your target's head explodes.",
    42: "Until your next turn, all damage is determined by fashion competitions.",
    43: "The field is stormed by a herd of corgis.",
    44: "There is always a rock in your shoe for the next 24 hours. Reduce your Dexterity by 1.",
    45: "You can respec your entire character.",
    46: "Your footsteps are silent for 24 hours.",
    47: "Your footsteps make a loud, clown-like squeaking noise for 24 hours.",
    48: "You vomit 100 gold.",
    49: "Your target vomits 100 gold.",
    50: "Your target is inexplicably drowning and must make a save next turn not to suffocate.",
    51: "Your target is obsessed with making you happy and pleasing you.",
    52: "Your target shrinks to half their size.",
    53: "The bones of every creature on the field now has a shiny blue sheen.",
    54: "Make a wish. Literally anything you want. (This wish will come true in 48 hours if they still remember it.",
    55: "Your size (and damage) doubles for 1 turn. Take 2d10 damage if your head hits the ceiling as you grow.",
    56: "Your target turns into a sheep.",
    57: "You mount your target.",
    58: "Your target mounts you.",
    59: "All foliage in a 30' radius turns into spiders.",
    60: "All your hair falls out.",
    61: "All your target's hair falls out.",
    62: "It starts raining heavily on the field even if you are indoors.",
    63: "You fall asleep.",
    64: "Caster's next d20 roll is a 1.",
    65: "Caster's next d20 roll is a 20.",
    66: "Caster's next d20 roll is a 99.",
    67: "You and your target fall from a distance that is not major enough to cause damage, but is major enough to hurt your ankles.",
    68: "You hear a booming voice chuckle about 69.",
    69: "Your target turns into assorted meats, but is generally unaffected in combat.",
    70: "Everyone on the field is turned into felt puppets (with weakness to fire) for the next 24 hours.",
    71: "You must take in an 'adowable voice uWu' until your next long rest.",
    72: "You explode dealing 3d20 damage to all adjacent units. You inexplicably survive at 1 HP.",
    73: "The room is filled with the sound of cacophonous bagpipes, making communication impossible for the next 15 minutes.",
    74: "Bread on your head.",
    75: "For the next turn you only have a head, 2 hands and 2 feet. If you didn't have any of these appendages you briefly gain them.",
    76: "For the next turn your target only has a head, 2 hands and 2 feet. If they didn't have any of these appendages they briefly gain them.",
    77: "Gain three Wild Magic Poprocks. (Eating one causes a Wild Magic roll and takes no actions. THey taste sour and sweet at the same time.)",
    78: "You speak every language! But you can't understand most of them...yet.",
    79: "You understand every language! But you can't speak most of them...yet.",
    80: "Your hair is now rainbow-colored! Gain +1 CHA. (Any Natural 1 CHA checks to seduce now cause the target's head to explode.",
    81: "Your target's attire changes based off your desire.",
    82: "Your target loses their pants. If they have no pants, they gain pants.",
    83: "The room is filled with gentle elevator music, relaxing the situation somewhat.",
    84: "A mischievous goose steals your weapon. You must chase it down to recover it.",
    85: "Your pockets are full of spaghetti.",
    86: "You are full of milk.",
    87: "You hear the voice of the GM narrate the results of your roll. Gain +1 INT or WIS.",
    88: "You gain a Dakimakura of your choosing and must now explain this to your friends.",
    89: "Your weapon now talks.",
    90: "Your target's weapon now talks.",
    91: "You and your target gain the same Random Curse (random curse table). As a free action you can bond over this.",
    92: "You and your target switch vision for the next 3 hours.",
    93: "A bucket of red paint is dropped on your target, blinding them for 1 turn.",
    94: "You get a tapeworm. It consumes 1d4 of all your healing until it is removed.",
    95: "You glitter like a disco ball for 24 hours.",
    96: "You gain the ability to cast spells with your eyes without any components.",
    97: "You learn an instrument no one cares about.",
    98: "Your target gains a mysterious shimmering potion. (Its function is inscrutable. The drinker of this potion is granted one wish.)",
    99: "You cause a butterfly to flap its wings, in turn causing a localized storm directly above your target. They are struck by lightning and take 5d20 damage."
};

const tidesOfChange = {
    100: "You and your target's socks are wet.",
    101: "You feel a storm a'brewin'. (A violent storm will begin on the caster's next turn.)",
    102: "You must speak like a pirate for the next 24 hours.",
    103: "Your target must speak like a pirate, permanently.",
    104: "You gain a bucket and a mop.",
    105: "A mop is violently ripped through the Aether and hits you and your Target for 2D10 damage each.",
    106: "You gain a silly pirate hat.",
    107: "Your body is now covered in barnacles. +1 AC!",
    108: "Your target is now covered in barnacles. +1 AC!",
    109: "All ground in a 30' radius is covered in barnacles, becoming difficult terrain.",
    110: "You gain a plank of wood.",
    111: "Someone, somewhere, is missing a hook because of you. Gain a pirate hook!",
    112: "Your target feels like they're drowning for 1 minute.",
    113: "You feel like you're drowning until your next Turn.",
    114: "A puddle appears beneath you and your Target.",
    115: "You lose the ability to swim for a week.",
    116: "Your Target loses the ability to swim for a week.",
    117: "You gain the ability to swim, if you couldn't already. If you could, you gain an extra set of gills!",
    118: "Your Target throws a salty insult on you, causing minor emotional damage and granting you an Attack of Opportunity against the Target.",
    119: "Your pockets are filled with shrimp.",
    120: "Your Target is a porportionally sized lobster for the next 3 Turns.",
    121: "One of your arms is replaced with a crab arm.",
    122: "One of your ally's arms is replaced with a tentacle arm.",
    123: "You gain an additional tentacle arm.",
    124: "You can drink salt water as if it were fresh water.",
    125: "You can breathe under water for the next week.",
    126: "You can only breathe under water for the next 24 hours. Gain a fishbowl helmet full of water, if no large body of water is nearby.",
    127: "Your Target is covered in warm butter.",
    128: "Your target's weapon becomes a fish for the next hour. (Weapon stats are not retained.)",
    129: "Your weapon becomes a fish permanently. (Weapon stats are retained.)",
    130: "Your target's pockets are full of heavy sea shells, halving their movement until they remove them.",
    131: "Your gear is now water-proof.",
    132: "Gain a pet hermit crab. It can speak to you via telepathy. Its power allows you to use gain an additional d4 level d4 spell slots, or comparable magical boons.",
    133: "The field fills with an inspiring sea shanty, giving allies +1 to all rolls for their next Turns.",
    134: "You vomit sea water.",
    135: "Your target vomits sea water.",
    136: "Your gear is now water-proof!",
    137: "Your gear is now waterlogged…",
    138: "Your Target gains a dolphin mount.",
    139: "You gain a dolphin mount.",
    140: "You gain a historically accurate, weathered pirate hat.",
    141: "A water elemental is ripped through the Aether and appears beside you. Flip a coin to see if it's friendly.",
    142: "Your target is now drenched in water.",
    143: "You can speak with fish for the next week!",
    144: "You can speak to fish, but you can't understand what they say back… yet.",
    145: "You can understand what fish say, but you can't speak back… yet.",
146 – A ship cannon is ripped from the Aether and appears
beside you. It’s loaded…
147 – A giant violent horseshoe crab bursts into the field and
gains an immediate action. Afterwards everyone rerolls
initiative with the crab included.
148 – Your target gains a blunderbuss that shoots crabs.
149 – A tidal wave hits you and your target moving you 20’ -
Roll a d4 to determine direction.
150 – You now need goggles to swim underwater.
151 – You gain a brief but vivid flashback of a fishing trip you
had with someone you cherish. +2 on your next Roll!
152 – A dinghy is ripped from the Aether and appears by you.
Flip a coin to see if it’s below you or above you.
153 – A dinghy is ripped from the Aether and appears by your
Target. Flip a coin to see if it’s below or above them.
154 – A portal to a realm of pure water opens beside you. For
the next 3 turns it spills copious amounts of water onto
the field.
155 – Your shoes are full of sand. Half movement speed.
156 – Your Target’s shoes are full of sand. Half movement
speed. If your target does not have shoes they gain
shoes… which are full of sand. Place wherever works.
157 – You sink your Target’s battleship. If they have no
battleship, you hear distant canon fire and they take 2d10
DMG from a rogue canon ball.
158 – All books and scrolls on the field are now soaked in
water and must be dried to be read.


};
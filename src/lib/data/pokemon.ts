export interface Attack {
	name: string;
	damage: number;
}

export interface Pokemon {
	id: string;
	name: string;
	hp: number;
	image: string;
	attacks: Attack[];
}

export const pokemonList: Pokemon[] = [
	{
		id: 'me1_en_002',
		name: 'Ivysaur',
		hp: 110,
		image: '/cards/me1_en_002_std.jpg',
		attacks: [{ name: 'Razor Leaf', damage: 60 }]
	},
	{
		id: 'me1_en_003',
		name: 'Mega Venusaur ex',
		hp: 380,
		image: '/cards/me1_en_003_std.jpg',
		attacks: [{ name: 'Jungle Dump', damage: 240 }]
	},
	{
		id: 'me1_en_008',
		name: 'Chikorita',
		hp: 70,
		image: '/cards/me1_en_008_std.jpg',
		attacks: [{ name: 'Razor Leaf', damage: 20 }]
	},
	{
		id: 'me1_en_028',
		name: 'Cinderace',
		hp: 160,
		image: '/cards/me1_en_028_std.jpg',
		attacks: [{ name: 'Turbo Flare', damage: 50 }]
	},
	{
		id: 'me1_en_034',
		name: 'Kyogre',
		hp: 150,
		image: '/cards/me1_en_034_std.jpg',
		attacks: [
			{ name: 'Riptide', damage: 20 },
			{ name: 'Swirling Waves', damage: 130 }
		]
	},
	{
		id: 'me1_en_035',
		name: 'Snover',
		hp: 90,
		image: '/cards/me1_en_035_std.jpg',
		attacks: [
			{ name: 'Beat', damage: 10 },
			{ name: 'Icy Snow', damage: 30 }
		]
	},
	{
		id: 'me1_en_036',
		name: 'Mega Abomasnow ex',
		hp: 350,
		image: '/cards/me1_en_036_std.jpg',
		attacks: [
			{ name: 'Hammer-lanche', damage: 100 },
			{ name: 'Frost Barrier', damage: 200 }
		]
	},
	{
		id: 'me1_en_054',
		name: 'Abra',
		hp: 50,
		image: '/cards/me1_en_054_std.jpg',
		attacks: [{ name: 'Teleportation Attack', damage: 10 }]
	},
	{
		id: 'me1_en_058',
		name: 'Ralts',
		hp: 70,
		image: '/cards/me1_en_058_std.jpg',
		attacks: [
			{ name: 'Collect', damage: 0 },
			{ name: 'Headbutt', damage: 10 }
		]
	},
	{
		id: 'me1_en_074',
		name: 'Lunatone',
		hp: 110,
		image: '/cards/me1_en_074_std.jpg',
		attacks: [{ name: 'Power Gem', damage: 50 }]
	},
	{
		id: 'me1_en_075',
		name: 'Solrock',
		hp: 110,
		image: '/cards/me1_en_075_std.jpg',
		attacks: [{ name: 'Cosmic Beam', damage: 70 }]
	},
	{
		id: 'me1_en_077',
		name: 'Mega Lucario ex',
		hp: 340,
		image: '/cards/me1_en_077_std.jpg',
		attacks: [
			{ name: 'Aura Jab', damage: 130 },
			{ name: 'Mega Brave', damage: 270 }
		]
	},
	{
		id: 'me1_en_086',
		name: 'Mega Absol ex',
		hp: 280,
		image: '/cards/me1_en_086_std.jpg',
		attacks: [
			{ name: 'Terminal Period', damage: 0 },
			{ name: 'Claw of Darkness', damage: 200 }
		]
	},
	{
		id: 'me1_en_088',
		name: 'Yveltal',
		hp: 110,
		image: '/cards/me1_en_088_std.jpg',
		attacks: [
			{ name: 'Clutch', damage: 20 },
			{ name: 'Dark Feather', damage: 110 }
		]
	},
	{
		id: 'me1_en_104',
		name: 'Mega Kangaskhan ex',
		hp: 300,
		image: '/cards/me1_en_104_std.jpg',
		attacks: [{ name: 'Rapid-Fire Combo', damage: 200 }]
	},
	{
		id: 'me1_en_133',
		name: 'Bulbasaur',
		hp: 80,
		image: '/cards/me1_en_133_std.jpg',
		attacks: [{ name: 'Bind Down', damage: 10 }]
	},
	{
		id: 'me2_en_004',
		name: 'Mega Heracross ex',
		hp: 280,
		image: '/cards/me2_en_004_std.jpg',
		attacks: [
			{ name: 'Juggernaut Horn', damage: 100 },
			{ name: 'Mountain Ramming', damage: 170 }
		]
	},
	{
		id: 'me2_en_006',
		name: 'Lombre',
		hp: 90,
		image: '/cards/me2_en_006_std.jpg',
		attacks: [{ name: 'Mega Drain', damage: 30 }]
	},
	{
		id: 'me2_en_007',
		name: 'Ludicolo',
		hp: 160,
		image: '/cards/me2_en_007_std.jpg',
		attacks: [{ name: 'Lunge Out', damage: 120 }]
	},
	{
		id: 'me2_en_011',
		name: 'Charmander',
		hp: 80,
		image: '/cards/me2_en_011_std.jpg',
		attacks: [{ name: 'Live Coal', damage: 20 }]
	},
	{
		id: 'me2_en_013',
		name: 'Mega Charizard X ex',
		hp: 360,
		image: '/cards/me2_en_013_std.jpg',
		attacks: [{ name: 'Inferno X', damage: 90 }]
	},
	{
		id: 'me2_en_014',
		name: 'Moltres',
		hp: 120,
		image: '/cards/me2_en_014_std.jpg',
		attacks: [{ name: 'Fighting Wings', damage: 20 }]
	},
	{
		id: 'me2_en_018',
		name: 'Oricorio ex',
		hp: 190,
		image: '/cards/me2_en_018_std.jpg',
		attacks: [{ name: 'Fire Wing', damage: 110 }]
	},
	{
		id: 'me2_en_043',
		name: 'Milcery',
		hp: 50,
		image: '/cards/me2_en_043_std.jpg',
		attacks: [{ name: 'Draining Kiss', damage: 10 }]
	},
	{
		id: 'me2_en_044',
		name: 'Alcremie',
		hp: 90,
		image: '/cards/me2_en_044_std.jpg',
		attacks: [{ name: 'Sweet Circle', damage: 20 }]
	},
	{
		id: 'me2_en_045',
		name: 'Zacian',
		hp: 130,
		image: '/cards/me2_en_045_std.jpg',
		attacks: [{ name: 'Limit Break', damage: 50 }]
	},
	{
		id: 'me2_en_063',
		name: 'Absol',
		hp: 110,
		image: '/cards/me2_en_063_std.jpg',
		attacks: [
			{ name: 'Allure', damage: 0 },
			{ name: 'Dark Cutter', damage: 60 }
		]
	},
	{
		id: 'me2_en_064',
		name: 'Sandile',
		hp: 70,
		image: '/cards/me2_en_064_std.jpg',
		attacks: [
			{ name: 'Ram', damage: 10 },
			{ name: 'Rear Kick', damage: 20 }
		]
	},
	{
		id: 'me2_en_065',
		name: 'Krokorok',
		hp: 100,
		image: '/cards/me2_en_065_std.jpg',
		attacks: [
			{ name: 'Bite', damage: 30 },
			{ name: 'Confront', damage: 60 }
		]
	},
	{
		id: 'me2_en_066',
		name: 'Krookodile',
		hp: 170,
		image: '/cards/me2_en_066_std.jpg',
		attacks: [
			{ name: 'Vengeful Fang', damage: 60 },
			{ name: 'Hammer In', damage: 160 }
		]
	},
	{
		id: 'me2_en_068',
		name: 'Toxtricity',
		hp: 140,
		image: '/cards/me2_en_068_std.jpg',
		attacks: [{ name: 'Gentle Slap', damage: 100 }]
	},
	{
		id: 'me2_en_083',
		name: 'Buneary',
		hp: 70,
		image: '/cards/me2_en_083_std.jpg',
		attacks: [
			{ name: 'Run Around', damage: 0 },
			{ name: 'Kick', damage: 20 }
		]
	},
	{
		id: 'me2_en_084',
		name: 'Mega Lopunny ex',
		hp: 330,
		image: '/cards/me2_en_084_std.jpg',
		attacks: [
			{ name: 'Gale Thrust', damage: 60 },
			{ name: 'Spiky Hopper', damage: 160 }
		]
	}
];

export function getRandomPokemon(): Pokemon {
	return pokemonList[Math.floor(Math.random() * pokemonList.length)];
}

export function getRandomDamage(maxHp: number): number {
	// Generate damage that's between 0 and maxHp - 10, in multiples of 10
	// (ensuring there's at least 10 HP to work with)
	const maxTens = Math.floor((maxHp - 10) / 10);
	if (maxTens <= 0) return 0;
	return Math.floor(Math.random() * (maxTens + 1)) * 10;
}

export function getRandomAttack(pokemon: Pokemon): Attack {
	// Filter out zero-damage attacks for the battle
	const damageAttacks = pokemon.attacks.filter((a) => a.damage > 0);
	if (damageAttacks.length === 0) {
		// If no damage attacks, return the first attack anyway
		return pokemon.attacks[0];
	}
	return damageAttacks[Math.floor(Math.random() * damageAttacks.length)];
}

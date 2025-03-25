export class getPokemon {
	constructor(id) {
		this.id = id;
	}

	async getData(id = this.id) {
		const URL_API = `https://pokeapi.co/api/v2/pokemon/${id}`;

		if (!id) {
			throw new Error(
				"O ID informado é inválido! Por gentileza, forneça um novo ID!",
			);
		}

		try {
			const response = await fetch(URL_API);

			if (!response.ok) {
				throw new Error("ERRO! A conexão não foi estabelecida!");
			}
			const pokeInfo = await response.json();
			return {
				id: pokeInfo.id,
				name: pokeInfo.name,
				primaryType: pokeInfo.types[0].type.name,
				secondaryType: pokeInfo.types[1]?.type.name || "N/A",
				sprite: pokeInfo.sprites.other.home.front_default,
				stats: {
					hp: pokeInfo.stats[0].base_stat,
					atk: pokeInfo.stats[1].base_stat,
					def: pokeInfo.stats[2].base_stat,
					spatk: pokeInfo.stats[3].base_stat,
					spdef: pokeInfo.stats[4].base_stat,
					speed: pokeInfo.stats[5].base_stat,
				},
			};
		} catch (error) {
			console.log(`ERRO! (${error.message})`);
		}
	}
}

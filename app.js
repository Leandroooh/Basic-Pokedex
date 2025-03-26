import { createPokeContainer } from "./src/classes/CreateElement.js";
import { getPokemon } from "./src/classes/getPokeData.js";

const amount = 898;

for (let i = 1; i < amount; i++) {
	const poke = new getPokemon(i);
	const pokeData = await poke.getData();

	const container = new createPokeContainer(
		pokeData.id,
		pokeData.name,
		pokeData.primaryType,
		pokeData.secondaryType,
		pokeData.sprite,

		pokeData.stats.hp,
		pokeData.stats.atk,
		pokeData.stats.def,
		pokeData.stats.spatk,
		pokeData.stats.spdef,
		pokeData.stats.speed,
	);

	container.createContainer();
}

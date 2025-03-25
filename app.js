import { createPokeContainer } from "./src/classes/CreateElement.js";
import { getPokemon } from "./src/classes/getPokeData.js";

const typeColors = {
	grass: "36AC3D",
	fire: "D38851",
	bug: "B4C36F",
	fairy: "EF52BB",
	dragon: "286196",
	ghost: "71618A",
	ground: "BDAB4F",
	psychic: "BA4777",
	steel: "6E8D95",
	dark: "0A0528",
	electric: "F2A62A",
};

const pikachu = new getPokemon(235);
const dados = await pikachu.getData();

const container = new createPokeContainer(
	dados.id,
	dados.name,
	dados.primaryType,
	dados.secondaryType,
	dados.sprite,
	dados.stats.hp,
	dados.stats.atk,
	dados.stats.def,
	dados.stats.spatk,
	dados.stats.spdef,
	dados.stats.speed,
);

container.createContainer();

console.log(dados);

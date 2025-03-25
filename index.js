import { getPokemon } from "./src/classes/GetPokemon-data.js";

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

const pikachu = new getPokemon(25, "Pikachu");
const dados = await pikachu.getData();

console.log(dados);

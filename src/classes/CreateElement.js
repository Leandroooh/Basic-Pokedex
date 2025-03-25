export class createPokeContainer {
	constructor(
		id,
		name,
		primaryType,
		secondaryType,
		sprite,
		hp,
		atk,
		def,
		spatk,
		spdef,
		speed,
	) {
		this.id = id;
		this.name = name;
		this.primaryType = primaryType;
		this.secondaryType = secondaryType;
		this.sprite = sprite;

		this.hp = hp;
		this.atk = atk;
		this.def = def;
		this.spAtk = spatk;
		this.spDef = spdef;
		this.speed = speed;
	}

	createContainer() {
		const container = document.getElementById("container");

		const divisionContainer = document.createElement("div");
		divisionContainer.classList.add("divisionContainer");

		const pokeContainer = document.createElement("section");
		pokeContainer.classList.add("poke-container");

		const pokeImage = document.createElement("div");
		pokeImage.classList.add("poke-image");

		const pokeId = document.createElement("h1");
		pokeId.classList.add("poke-id");
		pokeId.textContent = `#${this.id}`;

		const pokeArt = document.createElement("img");
		pokeArt.classList.add("poke-art");
		pokeArt.src = this.sprite;
		pokeArt.alt = this.name;

		const pokeName = document.createElement("h2");
		pokeName.classList.add("poke-name");
		pokeName.textContent = this.name;

		const typeColors = {
			grass: "#36AC3D",
			fire: "#D38851",
			fairy: "#EF52BB",
			dragon: "#286196",
			ground: "#BDAB4F",
			psychic: "#BA4777",
			steel: "#6E8D95",
			flying: "#A0C3D2", // Cor suave azulada para Flying
			water: "#4A90E2", // Azul para Water
			ice: "#A9D9F5", // Azul claro para Ice
			rock: "#B4A400", // Amarelo escuro para Rock
			fighting: "#E63946", // Vermelho intenso para Fighting
			normal: "#F1F1F1", // Cor neutra para Normal
			poison: "#8E44AD", // Roxo para Poison
			bug: "#B4C36F", // Cor de verde para Bug
			ghost: "#71618A", // Cor roxa para Ghost
			dark: "#0A0528", // Cor escura para Dark
			electric: "#F2A62A", // Amarelo brilhante para Electric
		};

		const types = document.createElement("div");
		types.classList.add("types");

		const primaryType = document.createElement("h3");
		primaryType.classList.add("poke-type");

		if (this.primaryType in typeColors) {
			primaryType.style.color = typeColors[this.primaryType];
		}

		primaryType.textContent = this.primaryType;

		types.append(primaryType);

		if (this.secondaryType !== "N/A") {
			console.log("Secondary Type:", this.secondaryType); // Verifique o valor de secondaryType
			const secondaryType = document.createElement("h3");
			secondaryType.classList.add("poke-type");

			// Verifica se o tipo secundário está presente nas cores
			if (this.secondaryType in typeColors) {
				console.log("Cor do tipo secundário:", typeColors[this.secondaryType]); // Verifique se a cor está sendo aplicada
				// Aplica a cor do tipo ao elemento
				secondaryType.style.color = typeColors[this.secondaryType];
			}

			secondaryType.textContent = this.secondaryType;
			types.append(secondaryType);
		}

		// Stats aside

		const aside = document.createElement("aside");
		aside.classList.add("poke-info");

		const statsContainer = document.createElement("section");
		statsContainer.classList.add("stats-container");

		// Stats - HP
		const hpStats = document.createElement("div");
		hpStats.classList.add("stats");

		const hpTitle = document.createElement("h3");
		hpTitle.textContent = "Hp";

		const hpValue = document.createElement("p");
		hpValue.textContent = this.hp;

		const hpStatsBar = document.createElement("div");
		hpStatsBar.classList.add("stats-bar");

		// atk
		const atkStats = document.createElement("div");
		atkStats.classList.add("stats");

		const atkTitle = document.createElement("h3");
		atkTitle.textContent = "Ataque";

		const atkValue = document.createElement("p");
		atkValue.textContent = this.atk;

		const atkStatsBar = document.createElement("div");
		atkStatsBar.classList.add("stats-bar");

		//def
		const defStats = document.createElement("div");
		defStats.classList.add("stats");

		const defTitle = document.createElement("h3");
		defTitle.textContent = "Defesa";

		const defValue = document.createElement("p");
		defValue.textContent = this.def;

		const defStatsBar = document.createElement("div");
		defStatsBar.classList.add("stats-bar");

		//spAtk
		const spAtkStats = document.createElement("div");
		spAtkStats.classList.add("stats");

		const spAtkTitle = document.createElement("h3");
		spAtkTitle.textContent = "SP. Ataque";

		const spAtkValue = document.createElement("p");
		spAtkValue.textContent = this.spAtk;

		const spAtkStatsBar = document.createElement("div");
		spAtkStatsBar.classList.add("stats-bar");

		//spDef
		const spDefStats = document.createElement("div");
		spDefStats.classList.add("stats");

		const spDefTitle = document.createElement("h3");
		spDefTitle.textContent = "spDefesa";

		const spDefValue = document.createElement("p");
		spDefValue.textContent = this.spDef;

		const spDefStatsBar = document.createElement("div");
		spDefStatsBar.classList.add("stats-bar");

		//speed
		const speedStats = document.createElement("div");
		speedStats.classList.add("stats");

		const speedTitle = document.createElement("h3");
		speedTitle.textContent = "speedesa";

		const speedValue = document.createElement("p");
		speedValue.textContent = this.speed;

		const speedStatsBar = document.createElement("div");
		speedStatsBar.classList.add("stats-bar");

		hpStats.append(hpTitle, hpValue, hpStatsBar);
		atkStats.append(atkTitle, atkValue, atkStatsBar);
		defStats.append(defTitle, defValue, defStatsBar);
		spAtkStats.append(spAtkTitle, spAtkValue, spAtkStatsBar);
		spDefStats.append(spDefTitle, spDefValue, spDefStatsBar);
		speedStats.append(speedTitle, speedValue, speedStatsBar);

		statsContainer.append(
			hpStats,
			atkStats,
			defStats,
			spAtkStats,
			spDefStats,
			speedStats,
		);

		aside.append(statsContainer);

		pokeImage.append(pokeId, pokeArt, pokeName, types);
		pokeContainer.append(pokeImage);

		divisionContainer.append(pokeContainer);
		divisionContainer.append(aside);

		container.append(divisionContainer);
	}
}

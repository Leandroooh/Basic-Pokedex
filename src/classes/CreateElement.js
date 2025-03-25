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
		this.spdef = spdef;
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

		const primaryType = document.createElement("h3");
		primaryType.classList.add("poke-type");
		primaryType.textContent = this.primaryType;

		const secondaryType = document.createElement("h3");
		secondaryType.classList.add("poke-type");
		secondaryType.textContent = this.secondaryType;

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
		spAtkTitle.textContent = "spAtkesa";

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

		pokeImage.append(pokeId, pokeArt, pokeName, primaryType, secondaryType);
		pokeContainer.append(pokeImage);

		divisionContainer.append(pokeContainer);
		divisionContainer.append(aside);

		container.append(divisionContainer);
	}
}

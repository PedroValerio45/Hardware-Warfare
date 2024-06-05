
// You can write more code here

/* START OF COMPILED CODE */

class Initial extends Phaser.Scene {

	constructor() {
		super("Initial");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// initial_phase
		const initial_phase = this.add.text(640, 100, "", {});
		initial_phase.setOrigin(0.5, 0.5);
		initial_phase.text = "Initial Phase";
		initial_phase.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "60px" });

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(initial_phase);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeScript_1);

		// hw_bg
		this.add.image(640, 360, "hw_bg");

		// layer_1
		const layer_1 = this.add.layer();

		// rectangle
		const rectangle = this.add.rectangle(640, 632, 128, 128);
		rectangle.scaleX = 1.75;
		rectangle.scaleY = 0.75;
		rectangle.isFilled = true;
		rectangle.fillColor = 8553090;
		layer_1.add(rectangle);

		// gipio_inv_1
		const gipio_inv_1 = this.add.text(640, 630, "", {});
		gipio_inv_1.setOrigin(0.5, 0.5);
		gipio_inv_1.text = "Done";
		gipio_inv_1.setStyle({ "align": "center", "fontSize": "80px" });
		layer_1.add(gipio_inv_1);

		// layer_2
		const layer_2 = this.add.layer();

		// rambow_inv
		const rambow_inv = this.add.text(314.5, 486.5, "", {});
		rambow_inv.setOrigin(0.5, 0.5);
		rambow_inv.text = "0";
		rambow_inv.setStyle({ "align": "center", "fontSize": "80px" });
		layer_2.add(rambow_inv);

		// elventito_inv
		const elventito_inv = this.add.text(474.5, 486.5, "", {});
		elventito_inv.setOrigin(0.5, 0.5);
		elventito_inv.text = "0";
		elventito_inv.setStyle({ "align": "center", "fontSize": "80px" });
		layer_2.add(elventito_inv);

		// gipio_inv
		const gipio_inv = this.add.text(634.5, 486.5, "", {});
		gipio_inv.setOrigin(0.5, 0.5);
		gipio_inv.text = "0";
		gipio_inv.setStyle({ "align": "center", "fontSize": "80px" });
		layer_2.add(gipio_inv);

		// decibelle_inv
		const decibelle_inv = this.add.text(794.5, 486.5, "", {});
		decibelle_inv.setOrigin(0.5, 0.5);
		decibelle_inv.text = "0";
		decibelle_inv.setStyle({ "align": "center", "fontSize": "80px" });
		layer_2.add(decibelle_inv);

		// rommy_inv
		const rommy_inv = this.add.text(954.5, 486.5, "", {});
		rommy_inv.setOrigin(0.5, 0.5);
		rommy_inv.text = "0";
		rommy_inv.setStyle({ "align": "center", "fontSize": "80px" });
		layer_2.add(rommy_inv);

		// layer_3
		const layer_3 = this.add.layer();

		// rectangle_1
		const rectangle_1 = this.add.rectangle(640, 365, 128, 128);
		rectangle_1.scaleX = 6.15;
		rectangle_1.scaleY = 0.5;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 8553090;
		layer_3.add(rectangle_1);

		// rambow_minus
		const rambow_minus = this.add.text(284.5, 366.5, "", {});
		rambow_minus.setOrigin(0.5, 0.5);
		rambow_minus.text = "-";
		rambow_minus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(rambow_minus);

		// rambow_plus
		const rambow_plus = this.add.text(354.5, 366.5, "", {});
		rambow_plus.setOrigin(0.5, 0.5);
		rambow_plus.text = "+";
		rambow_plus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(rambow_plus);

		// elventito_plus
		const elventito_plus = this.add.text(514.5, 366.5, "", {});
		elventito_plus.setOrigin(0.5, 0.5);
		elventito_plus.text = "+";
		elventito_plus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(elventito_plus);

		// elventito_minus
		const elventito_minus = this.add.text(444.5, 366.5, "", {});
		elventito_minus.setOrigin(0.5, 0.5);
		elventito_minus.text = "-";
		elventito_minus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(elventito_minus);

		// gipio_plus
		const gipio_plus = this.add.text(674.5, 366.5, "", {});
		gipio_plus.setOrigin(0.5, 0.5);
		gipio_plus.text = "+";
		gipio_plus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(gipio_plus);

		// gipio_minus
		const gipio_minus = this.add.text(604.5, 366.5, "", {});
		gipio_minus.setOrigin(0.5, 0.5);
		gipio_minus.text = "-";
		gipio_minus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(gipio_minus);

		// decibelle_plus
		const decibelle_plus = this.add.text(834.5, 366.5, "", {});
		decibelle_plus.setOrigin(0.5, 0.5);
		decibelle_plus.text = "+";
		decibelle_plus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(decibelle_plus);

		// decibelle_minus
		const decibelle_minus = this.add.text(764.5, 366.5, "", {});
		decibelle_minus.setOrigin(0.5, 0.5);
		decibelle_minus.text = "-";
		decibelle_minus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(decibelle_minus);

		// rommy_plus
		const rommy_plus = this.add.text(994.5, 366.5, "", {});
		rommy_plus.setOrigin(0.5, 0.5);
		rommy_plus.text = "+";
		rommy_plus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(rommy_plus);

		// rommy_minus
		const rommy_minus = this.add.text(924.5, 366.5, "", {});
		rommy_minus.setOrigin(0.5, 0.5);
		rommy_minus.text = "-";
		rommy_minus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(rommy_minus);

		// layer_4
		const layer_4 = this.add.layer();

		// character_rambow_1
		const character_rambow_1 = this.add.image(320, 250, "character_rambow");
		character_rambow_1.scaleX = 3;
		character_rambow_1.scaleY = 3;
		layer_4.add(character_rambow_1);

		// character_decibelle_1
		const character_decibelle_1 = this.add.image(800, 250, "character_decibelle");
		character_decibelle_1.scaleX = 3;
		character_decibelle_1.scaleY = 3;
		layer_4.add(character_decibelle_1);

		// character_rommy_1
		const character_rommy_1 = this.add.image(960, 250, "character_rommy");
		character_rommy_1.scaleX = 3;
		character_rommy_1.scaleY = 3;
		layer_4.add(character_rommy_1);

		// character_gipio_1
		const character_gipio_1 = this.add.image(640, 250, "character_gipio");
		character_gipio_1.scaleX = 3;
		character_gipio_1.scaleY = 3;
		layer_4.add(character_gipio_1);

		// character_elventito_1
		const character_elventito_1 = this.add.image(480, 250, "character_elventito");
		character_elventito_1.scaleX = 3;
		character_elventito_1.scaleY = 3;
		layer_4.add(character_elventito_1);

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 1500;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
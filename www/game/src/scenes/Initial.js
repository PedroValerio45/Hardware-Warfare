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

		// square_done
		const square_done = this.add.image(640, 630, "empty");
		square_done.scaleX = 5;
		square_done.scaleY = 2;
		layer_1.add(square_done);

		// layer_2
		const layer_2 = this.add.layer();

		// rambow_inv
		const rambow_inv = this.add.text(314.5, 486.5, "", {});
		rambow_inv.setOrigin(0.5, 0.5);
		rambow_inv.text = "X";
		rambow_inv.setStyle({ "align": "center", "fontSize": "80px" });
		layer_2.add(rambow_inv);

		// elventito_inv
		const elventito_inv = this.add.text(474.5, 486.5, "", {});
		elventito_inv.setOrigin(0.5, 0.5);
		elventito_inv.text = "X";
		elventito_inv.setStyle({ "align": "center", "fontSize": "80px" });
		layer_2.add(elventito_inv);

		// gipio_inv
		const gipio_inv = this.add.text(634.5, 486.5, "", {});
		gipio_inv.setOrigin(0.5, 0.5);
		gipio_inv.text = "X";
		gipio_inv.setStyle({ "align": "center", "fontSize": "80px" });
		layer_2.add(gipio_inv);

		// decibelle_inv
		const decibelle_inv = this.add.text(794.5, 486.5, "", {});
		decibelle_inv.setOrigin(0.5, 0.5);
		decibelle_inv.text = "X";
		decibelle_inv.setStyle({ "align": "center", "fontSize": "80px" });
		layer_2.add(decibelle_inv);

		// rommy_inv
		const rommy_inv = this.add.text(954.5, 486.5, "", {});
		rommy_inv.setOrigin(0.5, 0.5);
		rommy_inv.text = "X";
		rommy_inv.setStyle({ "align": "center", "fontSize": "80px" });
		layer_2.add(rommy_inv);

		// layer_3
		const layer_3 = this.add.layer();

		// rectangle_1
		const rectangle_1 = this.add.rectangle(640, 365, 128, 128);
		rectangle_1.scaleX = 6.15;
		rectangle_1.scaleY = 0.5;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3387392;
		layer_3.add(rectangle_1);

		// rambow_minus
		const rambow_minus = this.add.text(284.5, 366.5, "", {});
		rambow_minus.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 73), Phaser.Geom.Rectangle.Contains);
		rambow_minus.setOrigin(0.5, 0.5);
		rambow_minus.text = "-";
		rambow_minus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(rambow_minus);

		// rambow_plus
		const rambow_plus = this.add.text(354.5, 366.5, "", {});
		rambow_plus.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 73), Phaser.Geom.Rectangle.Contains);
		rambow_plus.setOrigin(0.5, 0.5);
		rambow_plus.text = "+";
		rambow_plus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(rambow_plus);

		// elventito_plus
		const elventito_plus = this.add.text(514.5, 366.5, "", {});
		elventito_plus.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 73), Phaser.Geom.Rectangle.Contains);
		elventito_plus.setOrigin(0.5, 0.5);
		elventito_plus.text = "+";
		elventito_plus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(elventito_plus);

		// elventito_minus
		const elventito_minus = this.add.text(444.5, 366.5, "", {});
		elventito_minus.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 73), Phaser.Geom.Rectangle.Contains);
		elventito_minus.setOrigin(0.5, 0.5);
		elventito_minus.text = "-";
		elventito_minus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(elventito_minus);

		// gipio_plus
		const gipio_plus = this.add.text(674.5, 366.5, "", {});
		gipio_plus.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 73), Phaser.Geom.Rectangle.Contains);
		gipio_plus.setOrigin(0.5, 0.5);
		gipio_plus.text = "+";
		gipio_plus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(gipio_plus);

		// gipio_minus
		const gipio_minus = this.add.text(604.5, 366.5, "", {});
		gipio_minus.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 73), Phaser.Geom.Rectangle.Contains);
		gipio_minus.setOrigin(0.5, 0.5);
		gipio_minus.text = "-";
		gipio_minus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(gipio_minus);

		// decibelle_plus
		const decibelle_plus = this.add.text(834.5, 366.5, "", {});
		decibelle_plus.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 73), Phaser.Geom.Rectangle.Contains);
		decibelle_plus.setOrigin(0.5, 0.5);
		decibelle_plus.text = "+";
		decibelle_plus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(decibelle_plus);

		// decibelle_minus
		const decibelle_minus = this.add.text(764.5, 366.5, "", {});
		decibelle_minus.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 73), Phaser.Geom.Rectangle.Contains);
		decibelle_minus.setOrigin(0.5, 0.5);
		decibelle_minus.text = "-";
		decibelle_minus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(decibelle_minus);

		// rommy_plus
		const rommy_plus = this.add.text(994.5, 366.5, "", {});
		rommy_plus.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 73), Phaser.Geom.Rectangle.Contains);
		rommy_plus.setOrigin(0.5, 0.5);
		rommy_plus.text = "+";
		rommy_plus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(rommy_plus);

		// rommy_minus
		const rommy_minus = this.add.text(924.5, 366.5, "", {});
		rommy_minus.setInteractive(new Phaser.Geom.Rectangle(0, 0, 49, 73), Phaser.Geom.Rectangle.Contains);
		rommy_minus.setOrigin(0.5, 0.5);
		rommy_minus.text = "-";
		rommy_minus.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(rommy_minus);

		// done
		const done = this.add.text(640, 630, "", {});
		done.name = "done";
		done.setInteractive(new Phaser.Geom.Rectangle(0, 0, 193, 73), Phaser.Geom.Rectangle.Contains);
		done.setOrigin(0.5, 0.5);
		done.text = "Done";
		done.setStyle({ "align": "center", "fontSize": "80px" });
		layer_3.add(done);

		// bits
		const bits = this.add.text(640, 120, "", {});
		bits.setOrigin(0.5, 0.5);
		bits.text = "Waiting for other player...";
		bits.setStyle({ "align": "center", "fontSize": "70px" });
		layer_3.add(bits);

		// layer_4
		const layer_4 = this.add.layer();

		// character_rambow_1
		const character_rambow_1 = this.add.image(320, 250, "empty");
		character_rambow_1.scaleX = 3;
		character_rambow_1.scaleY = 3;
		layer_4.add(character_rambow_1);

		// character_decibelle_1
		const character_decibelle_1 = this.add.image(800, 250, "empty");
		character_decibelle_1.scaleX = 3;
		character_decibelle_1.scaleY = 3;
		layer_4.add(character_decibelle_1);

		// character_rommy_1
		const character_rommy_1 = this.add.image(960, 250, "empty");
		character_rommy_1.scaleX = 3;
		character_rommy_1.scaleY = 3;
		layer_4.add(character_rommy_1);

		// character_gipio_1
		const character_gipio_1 = this.add.image(640, 250, "empty");
		character_gipio_1.scaleX = 3;
		character_gipio_1.scaleY = 3;
		layer_4.add(character_gipio_1);

		// character_elventito_1
		const character_elventito_1 = this.add.image(480, 250, "empty");
		character_elventito_1.scaleX = 3;
		character_elventito_1.scaleY = 3;
		layer_4.add(character_elventito_1);

		// rambow_sprite
		const rambow_sprite = this.add.image(320, 250, "rambow_sprite");
		rambow_sprite.scaleX = 3;
		rambow_sprite.scaleY = 3;
		layer_4.add(rambow_sprite);

		// decibelle_sprite
		const decibelle_sprite = this.add.image(800, 250, "decibelle_sprite");
		decibelle_sprite.scaleX = 3;
		decibelle_sprite.scaleY = 3;
		decibelle_sprite.flipX = true;
		layer_4.add(decibelle_sprite);

		// elventito_sprite
		const elventito_sprite = this.add.image(480, 250, "elventito_sprite");
		elventito_sprite.scaleX = 3;
		elventito_sprite.scaleY = 3;
		layer_4.add(elventito_sprite);

		// gipio_sprite
		const gipio_sprite = this.add.image(640, 250, "gipio_sprite");
		gipio_sprite.scaleX = 3;
		gipio_sprite.scaleY = 3;
		layer_4.add(gipio_sprite);

		// rommy_sprite
		const rommy_sprite = this.add.image(960, 250, "rommy_sprite");
		rommy_sprite.scaleX = 3;
		rommy_sprite.scaleY = 3;
		rommy_sprite.flipX = true;
		layer_4.add(rommy_sprite);

		// lists
		const buttons = [rommy_minus, rommy_plus, decibelle_minus, decibelle_plus, gipio_minus, gipio_plus, elventito_minus, elventito_plus, rambow_plus, rambow_minus];

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 1500;

		this.rambow_inv = rambow_inv;
		this.elventito_inv = elventito_inv;
		this.gipio_inv = gipio_inv;
		this.decibelle_inv = decibelle_inv;
		this.rommy_inv = rommy_inv;
		this.rambow_minus = rambow_minus;
		this.rambow_plus = rambow_plus;
		this.elventito_plus = elventito_plus;
		this.elventito_minus = elventito_minus;
		this.gipio_plus = gipio_plus;
		this.gipio_minus = gipio_minus;
		this.decibelle_plus = decibelle_plus;
		this.decibelle_minus = decibelle_minus;
		this.rommy_plus = rommy_plus;
		this.rommy_minus = rommy_minus;
		this.done = done;
		this.bits = bits;
		this.buttons = buttons;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	rambow_inv;
	/** @type {Phaser.GameObjects.Text} */
	elventito_inv;
	/** @type {Phaser.GameObjects.Text} */
	gipio_inv;
	/** @type {Phaser.GameObjects.Text} */
	decibelle_inv;
	/** @type {Phaser.GameObjects.Text} */
	rommy_inv;
	/** @type {Phaser.GameObjects.Text} */
	rambow_minus;
	/** @type {Phaser.GameObjects.Text} */
	rambow_plus;
	/** @type {Phaser.GameObjects.Text} */
	elventito_plus;
	/** @type {Phaser.GameObjects.Text} */
	elventito_minus;
	/** @type {Phaser.GameObjects.Text} */
	gipio_plus;
	/** @type {Phaser.GameObjects.Text} */
	gipio_minus;
	/** @type {Phaser.GameObjects.Text} */
	decibelle_plus;
	/** @type {Phaser.GameObjects.Text} */
	decibelle_minus;
	/** @type {Phaser.GameObjects.Text} */
	rommy_plus;
	/** @type {Phaser.GameObjects.Text} */
	rommy_minus;
	/** @type {Phaser.GameObjects.Text} */
	done;
	/** @type {Phaser.GameObjects.Text} */
	bits;
	/** @type {Phaser.GameObjects.Text[]} */
	buttons;

	/* START-USER-CODE */

	matchState = null;
	intervalID = null;
	playerReady = false;

	// Write your code here

	create() {
		this.editorCreate();

		// Sync the game state every 2 seconds
		var TIME_BETWEEN_SYNC = 2000;

		this.rambow_plus.on("pointerdown", () => {
			console.log("click on rambow_plus");
			this.rambowBuy(1);
		})

		this.rambow_minus.on("pointerdown", () => {
			console.log("click on rambow_minus");
			this.rambowBuy(-1);
		})

		this.elventito_plus.on("pointerdown", () => {
			console.log("click on elventito_plus");
			this.elVentitoBuy(1);
		})

		this.elventito_minus.on("pointerdown", () => {
			console.log("click on elventito_minus");
			this.elVentitoBuy(-1);
		})

		this.gipio_plus.on("pointerdown", () => {
			console.log("click on gipio_plus");
			this.gipioBuy(1);
		})

		this.gipio_minus.on("pointerdown", () => {
			console.log("click on gipio_minus");
			this.gipioBuy(-1);
		})

		this.decibelle_plus.on("pointerdown", () => {
			console.log("click on decibelle_plus");
			this.decibelleBuy(1);
		})

		this.decibelle_minus.on("pointerdown", () => {
			console.log("click on decibelle_minus");
			this.decibelleBuy(-1);
		})

		this.rommy_plus.on("pointerdown", () => {
			console.log("click on rommy_plus");
			this.rommyBuy(1);
		})

		this.rommy_minus.on("pointerdown", () => {
			console.log("click on rommy_minus");
			this.rommyBuy(-1);
		})

		this.done.on("pointerdown", () => {
			// var newLevelScene =this.scene.switch("Level");
			// console.log(newLevelScene);

			// this.scene.switch("Level");
			// this.scene.shutdown("Initial");

			this.clickDone();
		})

		if (this.matchState == 4) {
			this.bits.text = "Waiting for other player...";
		}

		this.updateLobbyState();
		// call function every 2 seconds (TIME_BETWEEN_SYNC milliseconds)
		this.intervalID = setInterval(() => {
			this.updateLobbyState();
		}, TIME_BETWEEN_SYNC)
	}

	updateLobbyState(){
		this.getMatchState();
		this.getGameInvState();
	}

	rambowBuy(quantity) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.responseText);
			}
		};

		xhttp.open("POST", "/store/buyRambow/" + quantity, true);
		xhttp.send();
	}

	elVentitoBuy(quantity) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.responseText);
			}
		};

		xhttp.open("POST", "/store/buyElVentito/" + quantity, true);
		xhttp.send();
	}

	gipioBuy(quantity) {
		console.log("gipiobuy working1")
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.responseText);
			}
		};

		console.log("gipiobuy working2")
		xhttp.open("POST", "/store/BuyGipio/" + quantity, true);
		xhttp.send();
	}

	decibelleBuy(quantity) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.responseText);
			}
		};

		xhttp.open("POST", "/store/buyDecibelle/" + quantity, true);
		xhttp.send();
	}

	rommyBuy(quantity) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.responseText);
			}
		};

		xhttp.open("POST", "/store/buyRommy/" + quantity, true);
		xhttp.send();
	}

	clickDone() {
		this.rambow_plus.visible = false;
		this.rambow_minus.visible = false;
		this.elventito_plus.visible = false;
		this.elventito_minus.visible = false;
		this.gipio_plus.visible = false;
		this.gipio_minus.visible = false;
		this.decibelle_plus.visible = false;
		this.decibelle_minus.visible = false;
		this.rommy_plus.visible = false;
		this.rommy_minus.visible = false;

		this.done.visible = false;

		this.playerReady = true;

		// buttons.forEach(text => {
		// 	text.visible = false;
		// });

		if (this.matchState == 3) {
			console.log("match state (done): "+ this.matchState)
			this.updateMatchState(4)
			this.bits.text = "Waiting for other player...";
		} else if (this.matchState == 4) {
			clearInterval(this.intervalID);
			this.updateMatchState(5, () => {
				this.scene.switch("Level");
			});
		} else {
			console.log("unexpected match state value: " + this.matchState)
		}
	}

	updateMatchState(stateNumber, callback) {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					console.log(data);

					// Adicionei esta linha que vai chamar o callback APENAS quando nós recebermos a resposta do servidor.
    				if (callback){
						console.log("Running callback");
						callback();
					}

					// NOTE: because this is commented, the game will softlock if both players press "Done" too quickly, due to the global variable this.matchState not changing from 3 to 4 in time! (We commented this because it was causing another error in the website's console)
					// this.matchState = data[0].match_state_id;
					// console.log("match state (update): " + this.matchState)
				}
			}
			// Send a PUT request to the server to change all info about a specific match
			xhttp.open("PUT", "/match/updateMatchState/" + stateNumber, true);
			xhttp.send();
	}

	getMatchState() {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					console.log(data);

					this.matchState = data[0].match_state_id;
					var player2 = data[0].match_player2_id;
					console.log("match state (get): " + this.matchState)
					console.log("match player 2 (get): " + player2)

					// if (this.matchState == 4 && player2 == null) {
					// 	this.bits.text = "Waiting for other player to join match...";
					// } else if (this.matchState == 4 && player2 != null) {
					// 	this.bits.text = "Waiting for other player to choose team...";
					// } else if (this.matchState == 5) {
					// 	this.scene.switch("Level");
					// }

					if (this.matchState == 5) {
						clearInterval(this.intervalID);
						var newLevelScene = this.scene.switch("Level");
						console.log(newLevelScene);
					}
				}
			}
			// Send a GET request to the server to get info about this match
			xhttp.open("GET", "/match/thisMatch", true);
			xhttp.send();
	}

	getGameInvState() {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					if (xhttp.status == 403){
						// redirect to login page
						window.location.href = "/login.html";
						return;
					}


					console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					console.log(data);

					var invBits = data[0].bits

					var invRambow = data[0].n_rambow
					var invElVentito = data[0].n_elventito
					var invGipio = data[0].n_gipio
					var invDecibelle = data[0].n_decibelle
					var invRommy = data[0].n_rommy

					console.log("Bits: " + invBits)

					console.log("invRambow: " + invRambow)
					console.log("invElVentito: " + invElVentito)
					console.log("invGipio: " + invGipio)
					console.log("invDecibelle: " + invDecibelle)
					console.log("invRommy: " + invRommy)

					if (this.playerReady) {
						this.bits.text = "Waiting for other player...";
					} else {
						this.bits.text = "Bits: " + invBits;
					}

					this.rambow_inv.text = invRambow;
					this.elventito_inv.text = invElVentito;
					this.gipio_inv.text = invGipio;
					this.decibelle_inv.text = invDecibelle;
					this.rommy_inv.text = invRommy;
				}
			}

			// Send a GET request to the server to all info about a specific match
			xhttp.open("GET", "/store/checkInv", true);
			xhttp.send();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

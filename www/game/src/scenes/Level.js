
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// layer_1
		const layer_1 = this.add.layer();

		// hw_bg
		const hw_bg = this.add.image(640, 359, "hw_bg");
		layer_1.add(hw_bg);

		// tile45
		const tile45 = this.add.image(640, 360, "empty");
		layer_1.add(tile45);

		// tile46
		const tile46 = this.add.image(700, 360, "empty");
		layer_1.add(tile46);

		// tile47
		const tile47 = this.add.image(760, 360, "empty");
		layer_1.add(tile47);

		// tile43
		const tile43 = this.add.image(520, 360, "empty");
		layer_1.add(tile43);

		// tile44
		const tile44 = this.add.image(580, 360, "empty");
		layer_1.add(tile44);

		// tile49
		const tile49 = this.add.image(880, 360, "empty_cpu");
		layer_1.add(tile49);

		// tile48
		const tile48 = this.add.image(820, 360, "empty");
		layer_1.add(tile48);

		// tile42
		const tile42 = this.add.image(460, 360, "empty");
		layer_1.add(tile42);

		// tile41
		const tile41 = this.add.image(400, 360, "empty_cpu");
		layer_1.add(tile41);

		// tile51
		const tile51 = this.add.image(400, 420, "empty");
		layer_1.add(tile51);

		// tile55
		const tile55 = this.add.image(640, 420, "empty");
		layer_1.add(tile55);

		// tile56
		const tile56 = this.add.image(700, 420, "empty");
		layer_1.add(tile56);

		// tile57
		const tile57 = this.add.image(760, 420, "empty");
		layer_1.add(tile57);

		// tile53
		const tile53 = this.add.image(520, 420, "empty");
		layer_1.add(tile53);

		// tile54
		const tile54 = this.add.image(580, 420, "empty");
		layer_1.add(tile54);

		// tile59
		const tile59 = this.add.image(880, 420, "empty");
		layer_1.add(tile59);

		// tile58
		const tile58 = this.add.image(820, 420, "empty");
		layer_1.add(tile58);

		// tile52
		const tile52 = this.add.image(460, 420, "empty");
		layer_1.add(tile52);

		// tile31
		const tile31 = this.add.image(400, 300, "empty");
		layer_1.add(tile31);

		// tile35
		const tile35 = this.add.image(640, 300, "empty");
		layer_1.add(tile35);

		// tile36
		const tile36 = this.add.image(700, 300, "empty");
		layer_1.add(tile36);

		// tile37
		const tile37 = this.add.image(760, 300, "empty");
		layer_1.add(tile37);

		// tile33
		const tile33 = this.add.image(520, 300, "empty");
		layer_1.add(tile33);

		// tile34
		const tile34 = this.add.image(580, 300, "empty");
		layer_1.add(tile34);

		// tile39
		const tile39 = this.add.image(880, 300, "empty");
		layer_1.add(tile39);

		// tile38
		const tile38 = this.add.image(820, 300, "empty");
		layer_1.add(tile38);

		// tile32
		const tile32 = this.add.image(460, 300, "empty");
		layer_1.add(tile32);

		// tile16
		const tile16 = this.add.image(700, 180, "empty");
		layer_1.add(tile16);

		// tile27
		const tile27 = this.add.image(760, 240, "empty");
		layer_1.add(tile27);

		// tile26
		const tile26 = this.add.image(700, 240, "empty");
		layer_1.add(tile26);

		// tile25
		const tile25 = this.add.image(640, 240, "empty");
		layer_1.add(tile25);

		// tile21
		const tile21 = this.add.image(400, 240, "empty");
		layer_1.add(tile21);

		// tile11
		const tile11 = this.add.image(400, 180, "empty");
		layer_1.add(tile11);

		// tile12
		const tile12 = this.add.image(460, 180, "empty");
		layer_1.add(tile12);

		// tile18
		const tile18 = this.add.image(820, 180, "empty");
		layer_1.add(tile18);

		// tile19
		const tile19 = this.add.image(880, 180, "empty");
		layer_1.add(tile19);

		// tile14
		const tile14 = this.add.image(580, 180, "empty");
		layer_1.add(tile14);

		// tile13
		const tile13 = this.add.image(520, 180, "empty");
		layer_1.add(tile13);

		// tile17
		const tile17 = this.add.image(760, 180, "empty");
		layer_1.add(tile17);

		// tile28
		const tile28 = this.add.image(820, 240, "empty");
		layer_1.add(tile28);

		// tile29
		const tile29 = this.add.image(880, 240, "empty");
		layer_1.add(tile29);

		// tile24
		const tile24 = this.add.image(580, 240, "empty");
		layer_1.add(tile24);

		// tile23
		const tile23 = this.add.image(520, 240, "empty");
		layer_1.add(tile23);

		// tile22
		const tile22 = this.add.image(460, 240, "empty");
		layer_1.add(tile22);

		// tile15
		const tile15 = this.add.image(640, 180, "empty");
		layer_1.add(tile15);

		// tile66
		const tile66 = this.add.image(700, 480, "empty");
		layer_1.add(tile66);

		// tile77
		const tile77 = this.add.image(760, 540, "empty");
		layer_1.add(tile77);

		// tile76
		const tile76 = this.add.image(700, 540, "empty");
		layer_1.add(tile76);

		// tile75
		const tile75 = this.add.image(640, 540, "empty");
		layer_1.add(tile75);

		// tile71
		const tile71 = this.add.image(400, 540, "empty");
		layer_1.add(tile71);

		// tile61
		const tile61 = this.add.image(400, 480, "empty");
		layer_1.add(tile61);

		// tile62
		const tile62 = this.add.image(460, 480, "empty");
		layer_1.add(tile62);

		// tile68
		const tile68 = this.add.image(820, 480, "empty");
		layer_1.add(tile68);

		// tile69
		const tile69 = this.add.image(880, 480, "empty");
		layer_1.add(tile69);

		// tile64
		const tile64 = this.add.image(580, 480, "empty");
		layer_1.add(tile64);

		// tile63
		const tile63 = this.add.image(520, 480, "empty");
		layer_1.add(tile63);

		// tile67
		const tile67 = this.add.image(760, 480, "empty");
		layer_1.add(tile67);

		// tile78
		const tile78 = this.add.image(820, 540, "empty");
		layer_1.add(tile78);

		// tile79
		const tile79 = this.add.image(880, 540, "empty");
		layer_1.add(tile79);

		// tile74
		const tile74 = this.add.image(580, 540, "empty");
		layer_1.add(tile74);

		// tile73
		const tile73 = this.add.image(520, 540, "empty");
		layer_1.add(tile73);

		// tile72
		const tile72 = this.add.image(460, 540, "empty");
		layer_1.add(tile72);

		// tile65
		const tile65 = this.add.image(640, 480, "empty");
		layer_1.add(tile65);

		// layer_2
		const layer_2 = this.add.layer();

		// inv
		const inv = this.add.text(150, 170, "", {});
		inv.setOrigin(0.5, 0.5);
		inv.text = "INV";
		inv.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "40px" });
		layer_2.add(inv);

		// player_slot1
		const player_slot1 = this.add.image(150, 235, "empty");
		player_slot1.scaleX = 1.3;
		player_slot1.scaleY = 1.3;
		layer_2.add(player_slot1);

		// player_slot2
		const player_slot2 = this.add.image(150, 310, "empty");
		player_slot2.scaleX = 1.3;
		player_slot2.scaleY = 1.3;
		layer_2.add(player_slot2);

		// player_slot3
		const player_slot3 = this.add.image(150, 385, "empty");
		player_slot3.scaleX = 1.3;
		player_slot3.scaleY = 1.3;
		layer_2.add(player_slot3);

		// player_slot5
		const player_slot5 = this.add.image(150, 535, "empty");
		player_slot5.scaleX = 1.3;
		player_slot5.scaleY = 1.3;
		layer_2.add(player_slot5);

		// player_slot4
		const player_slot4 = this.add.image(150, 460, "empty");
		player_slot4.scaleX = 1.3;
		player_slot4.scaleY = 1.3;
		layer_2.add(player_slot4);

		// player1
		const player1 = this.add.text(150, 115, "", {});
		player1.setOrigin(0.5, 0.5);
		player1.text = "%Player1Name%";
		player1.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "40px" });
		layer_2.add(player1);

		// player2
		const player2 = this.add.text(1140, 115, "", {});
		player2.setOrigin(0.5, 0.5);
		player2.text = "%Player2Name%";
		player2.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "40px" });
		layer_2.add(player2);

		// rambow_sprite_inv
		const rambow_sprite_inv = this.add.image(150, 235, "rambow_sprite");
		layer_2.add(rambow_sprite_inv);

		// anim_elventito_spritesheet_inv
		const anim_elventito_spritesheet_inv = this.add.sprite(150, 310, "elventito_spritesheet", 0);
		anim_elventito_spritesheet_inv.play("anim_elventito_spritesheet");
		layer_2.add(anim_elventito_spritesheet_inv);

		// gipio_sprite_inv
		const gipio_sprite_inv = this.add.image(150, 384, "gipio_sprite");
		layer_2.add(gipio_sprite_inv);

		// decibelle_sprite_inv
		const decibelle_sprite_inv = this.add.image(150, 460, "decibelle_sprite");
		layer_2.add(decibelle_sprite_inv);

		// rommy_sprite_inv
		const rommy_sprite_inv = this.add.image(150, 535, "rommy_sprite");
		layer_2.add(rommy_sprite_inv);

		// inv_rambow_number
		const inv_rambow_number = this.add.text(210, 240, "", {});
		inv_rambow_number.setOrigin(0.5, 0.5);
		inv_rambow_number.text = "0";
		inv_rambow_number.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });
		layer_2.add(inv_rambow_number);

		// inv_elventito_number
		const inv_elventito_number = this.add.text(210, 310, "", {});
		inv_elventito_number.setOrigin(0.5, 0.5);
		inv_elventito_number.text = "0";
		inv_elventito_number.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });
		layer_2.add(inv_elventito_number);

		// inv_gipio_number
		const inv_gipio_number = this.add.text(210, 385, "", {});
		inv_gipio_number.setOrigin(0.5, 0.5);
		inv_gipio_number.text = "0";
		inv_gipio_number.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });
		layer_2.add(inv_gipio_number);

		// inv_decibelle_number
		const inv_decibelle_number = this.add.text(210, 460, "", {});
		inv_decibelle_number.setOrigin(0.5, 0.5);
		inv_decibelle_number.text = "0";
		inv_decibelle_number.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });
		layer_2.add(inv_decibelle_number);

		// inv_rommy_number
		const inv_rommy_number = this.add.text(210, 535, "", {});
		inv_rommy_number.setOrigin(0.5, 0.5);
		inv_rommy_number.text = "0";
		inv_rommy_number.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });
		layer_2.add(inv_rommy_number);

		// player1_wins
		const player1_wins = this.add.text(150, 610, "", {});
		player1_wins.setOrigin(0.5, 0.5);
		player1_wins.text = "%Player1Wins%";
		player1_wins.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "30px" });
		layer_2.add(player1_wins);

		// player1_losses
		const player1_losses = this.add.text(150, 655, "", {});
		player1_losses.setOrigin(0.5, 0.5);
		player1_losses.text = "%Player1Losses%";
		player1_losses.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "30px" });
		layer_2.add(player1_losses);

		// player2_losses
		const player2_losses = this.add.text(1140, 655, "", {});
		player2_losses.setOrigin(0.5, 0.5);
		player2_losses.text = "%Player2Losses%";
		player2_losses.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "30px" });
		layer_2.add(player2_losses);

		// player2_wins
		const player2_wins = this.add.text(1140, 610, "", {});
		player2_wins.setOrigin(0.5, 0.5);
		player2_wins.text = "%Player2Wins%";
		player2_wins.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "30px" });
		layer_2.add(player2_wins);

		// layer_3
		const layer_3 = this.add.layer();

		// rec_desc_hover
		const rec_desc_hover = this.add.rectangle(1439, 441, 128, 128);
		rec_desc_hover.scaleX = 2;
		rec_desc_hover.scaleY = 1.3;
		rec_desc_hover.isFilled = true;
		rec_desc_hover.fillColor = 3552822;
		rec_desc_hover.fillAlpha = 0.75;
		layer_3.add(rec_desc_hover);

		// text_desc_hover
		const text_desc_hover = this.add.text(1325, 372, "", {});
		text_desc_hover.text = "desc";
		layer_3.add(text_desc_hover);

		// layer_4
		const layer_4 = this.add.layer();

		// title
		const title = this.add.text(640, 70, "", {});
		title.setOrigin(0.5, 0.5);
		title.text = "HARDWARE WARFARE";
		title.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "60px" });
		layer_4.add(title);

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(title);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeScript_1);

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 1500;

		this.player1 = player1;
		this.player2 = player2;
		this.player1_wins = player1_wins;
		this.player1_losses = player1_losses;
		this.player2_losses = player2_losses;
		this.player2_wins = player2_wins;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	player1;
	/** @type {Phaser.GameObjects.Text} */
	player2;
	/** @type {Phaser.GameObjects.Text} */
	player1_wins;
	/** @type {Phaser.GameObjects.Text} */
	player1_losses;
	/** @type {Phaser.GameObjects.Text} */
	player2_losses;
	/** @type {Phaser.GameObjects.Text} */
	player2_wins;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		// This generates a map with 7x9 tiles.
		// this.generateMap(7,9);

		this.editorCreate();

		// Sync the game state every 2 seconds
		var TIME_BETWEEN_SYNC = 2000;

		// call function every 2 seconds (TIME_BETWEEN_SYNC milliseconds)
		setInterval(() => {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					console.log(data);

					// Get the player stats from the response
					var player1Name = data[0].player_username
					var player2Name = data[1].player_username

					var player1Wins = "Wins: " + data[0].player_wins
					var player2Wins = "Wins: " + data[1].player_wins

					var player1Losses = "Losses: " + data[0].player_losses
					var player2Losses = "Losses: " + data[1].player_losses

					console.log("player1Name:" + player1Name);
					console.log("player1Wins:" + player1Wins);
					console.log("player1Losses:" + player1Losses);

					// Set the player stats in the game
					this.player1.text = player1Name;
					this.player2.text = player2Name;

					this.player1_wins.text = player1Wins;
					this.player2_wins.text = player2Wins;

					this.player1_losses.text = player1Losses;
					this.player2_losses.text = player2Losses;

					return;
					// !!! If the tiles were added manually in the editor, you can use the following code:
					this.tile1.setTexture("character_rambow_blue");
					this.tile8.setTexture("character_decibelle_red");

					// !!! If the tiles were added dynamically, you can use the following code:
					// Cleans the previous position of the characters
					this.tiles[(this.char1_posX-1)  + (this.char1_posY-1) * 7].setTexture("empty");
					this.tiles[(this.char2_posX-1)  + (this.char2_posY-1) * 7].setTexture("empty");

					// Move the characters
					this.char1_posX++;
					if (this.char1_posX > 7)
						this.char1_posX = 1;
					this.char2_posX--;
					if (this.char2_posX < 1)
						this.char2_posX = 7;

					// Set the new position of the characters
					this.tiles[(this.char1_posX-1)  + (this.char1_posY-1) * 7].setTexture("character_rambow_blue");
					this.tiles[(this.char2_posX-1)  + (this.char2_posY-1) * 7].setTexture("character_decibelle_red");
				}
			};

			// Send a GET request to the server (just testing with /match/11 endpoint)
			xhttp.open("GET", "/match/matches/1/playerStats", true);
			xhttp.send();
		}, TIME_BETWEEN_SYNC)
	}

	// 💩 Disclaimer: If you found this hard to understand/handle, add the tiles manually in the editor and use them!
	// Function that receives x and y amount of tiles and generates a map.
	// generateMap(xAmount, yAmount){
	// 	// 7 (horizontal) x 9 (vertical) tiles
	// 	for (var x = 0; x < xAmount; x++){
	// 		for (var y = 0; y < yAmount; y++){
	// 			const tile = this.add.image(100 + x * 50, 100 + y * 50, "empty");

	// 			// We store the tile in an array for later use.
	// 			this.tiles[x + y * xAmount] = tile;
	// 		}
	// 	}
	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

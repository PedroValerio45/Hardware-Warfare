// You can write more code here
var selectedChar = null
var list = null

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
		tile45.name = "tile45";
		tile45.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile45);

		// tile46
		const tile46 = this.add.image(700, 360, "empty");
		tile46.name = "tile46";
		tile46.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile46);

		// tile47
		const tile47 = this.add.image(760, 360, "empty");
		tile47.name = "tile47";
		tile47.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile47);

		// tile43
		const tile43 = this.add.image(520, 360, "empty");
		tile43.name = "tile43";
		tile43.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile43);

		// tile44
		const tile44 = this.add.image(580, 360, "empty");
		tile44.name = "tile44";
		tile44.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile44);

		// tile49
		const tile49 = this.add.image(880, 360, "empty_cpu");
		tile49.name = "tile49";
		layer_1.add(tile49);

		// tile48
		const tile48 = this.add.image(820, 360, "empty");
		tile48.name = "tile48";
		tile48.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile48);

		// tile42
		const tile42 = this.add.image(460, 360, "empty");
		tile42.name = "tile42";
		tile42.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile42);

		// tile41
		const tile41 = this.add.image(400, 360, "empty_cpu");
		tile41.name = "tile41";
		layer_1.add(tile41);

		// tile51
		const tile51 = this.add.image(400, 420, "empty");
		tile51.name = "tile51";
		tile51.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile51);

		// tile55
		const tile55 = this.add.image(640, 420, "empty");
		tile55.name = "tile55";
		tile55.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile55);

		// tile56
		const tile56 = this.add.image(700, 420, "empty");
		tile56.name = "tile56";
		tile56.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile56);

		// tile57
		const tile57 = this.add.image(760, 420, "empty");
		tile57.name = "tile57";
		tile57.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile57);

		// tile53
		const tile53 = this.add.image(520, 420, "empty");
		tile53.name = "tile53";
		tile53.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile53);

		// tile54
		const tile54 = this.add.image(580, 420, "empty");
		tile54.name = "tile54";
		tile54.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile54);

		// tile59
		const tile59 = this.add.image(880, 420, "empty");
		tile59.name = "tile59";
		tile59.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile59);

		// tile58
		const tile58 = this.add.image(820, 420, "empty");
		tile58.name = "tile58";
		tile58.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile58);

		// tile52
		const tile52 = this.add.image(460, 420, "empty");
		tile52.name = "tile52";
		tile52.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile52);

		// tile31
		const tile31 = this.add.image(400, 300, "empty");
		tile31.name = "tile31";
		tile31.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile31);

		// tile35
		const tile35 = this.add.image(640, 300, "empty");
		tile35.name = "tile35";
		tile35.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile35);

		// tile36
		const tile36 = this.add.image(700, 300, "empty");
		tile36.name = "tile36";
		tile36.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile36);

		// tile37
		const tile37 = this.add.image(760, 300, "empty");
		tile37.name = "tile37";
		tile37.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile37);

		// tile33
		const tile33 = this.add.image(520, 300, "empty");
		tile33.name = "tile33";
		tile33.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile33);

		// tile34
		const tile34 = this.add.image(580, 300, "empty");
		tile34.name = "tile34";
		tile34.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile34);

		// tile39
		const tile39 = this.add.image(880, 300, "empty");
		tile39.name = "tile39";
		tile39.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile39);

		// tile38
		const tile38 = this.add.image(820, 300, "empty");
		tile38.name = "tile38";
		tile38.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile38);

		// tile32
		const tile32 = this.add.image(460, 300, "empty");
		tile32.name = "tile32";
		tile32.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile32);

		// tile16
		const tile16 = this.add.image(700, 180, "empty");
		tile16.name = "tile16";
		tile16.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile16);

		// tile27
		const tile27 = this.add.image(760, 240, "empty");
		tile27.name = "tile27";
		tile27.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile27);

		// tile26
		const tile26 = this.add.image(700, 240, "empty");
		tile26.name = "tile26";
		tile26.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile26);

		// tile25
		const tile25 = this.add.image(640, 240, "empty");
		tile25.name = "tile25";
		tile25.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile25);

		// tile21
		const tile21 = this.add.image(400, 240, "empty");
		tile21.name = "tile21";
		tile21.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile21);

		// tile11
		const tile11 = this.add.image(400, 180, "empty");
		tile11.name = "tile11";
		tile11.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile11);

		// tile12
		const tile12 = this.add.image(460, 180, "empty");
		tile12.name = "tile12";
		tile12.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile12);

		// tile18
		const tile18 = this.add.image(820, 180, "empty");
		tile18.name = "tile18";
		tile18.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile18);

		// tile19
		const tile19 = this.add.image(880, 180, "empty");
		tile19.name = "tile19";
		tile19.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile19);

		// tile14
		const tile14 = this.add.image(580, 180, "empty");
		tile14.name = "tile14";
		tile14.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile14);

		// tile13
		const tile13 = this.add.image(520, 180, "empty");
		tile13.name = "tile13";
		tile13.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile13);

		// tile17
		const tile17 = this.add.image(760, 180, "empty");
		tile17.name = "tile17";
		tile17.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile17);

		// tile28
		const tile28 = this.add.image(820, 240, "empty");
		tile28.name = "tile28";
		tile28.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile28);

		// tile29
		const tile29 = this.add.image(880, 240, "empty");
		tile29.name = "tile29";
		tile29.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile29);

		// tile24
		const tile24 = this.add.image(580, 240, "empty");
		tile24.name = "tile24";
		tile24.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile24);

		// tile23
		const tile23 = this.add.image(520, 240, "empty");
		tile23.name = "tile23";
		tile23.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile23);

		// tile22
		const tile22 = this.add.image(460, 240, "empty");
		tile22.name = "tile22";
		tile22.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile22);

		// tile15
		const tile15 = this.add.image(640, 180, "empty");
		tile15.name = "tile15";
		tile15.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile15);

		// tile66
		const tile66 = this.add.image(700, 480, "empty");
		tile66.name = "tile66";
		tile66.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile66);

		// tile77
		const tile77 = this.add.image(760, 540, "empty");
		tile77.name = "tile77";
		tile77.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile77);

		// tile76
		const tile76 = this.add.image(700, 540, "empty");
		tile76.name = "tile76";
		tile76.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile76);

		// tile75
		const tile75 = this.add.image(640, 540, "empty");
		tile75.name = "tile75";
		tile75.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile75);

		// tile71
		const tile71 = this.add.image(400, 540, "empty");
		tile71.name = "tile71";
		tile71.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile71);

		// tile61
		const tile61 = this.add.image(400, 480, "empty");
		tile61.name = "tile61";
		tile61.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile61);

		// tile62
		const tile62 = this.add.image(460, 480, "empty");
		tile62.name = "tile62";
		tile62.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile62);

		// tile68
		const tile68 = this.add.image(820, 480, "empty");
		tile68.name = "tile68";
		tile68.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile68);

		// tile69
		const tile69 = this.add.image(880, 480, "empty");
		tile69.name = "tile69";
		tile69.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile69);

		// tile64
		const tile64 = this.add.image(580, 480, "empty");
		tile64.name = "tile64";
		tile64.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile64);

		// tile63
		const tile63 = this.add.image(520, 480, "empty");
		tile63.name = "tile63";
		tile63.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile63);

		// tile67
		const tile67 = this.add.image(760, 480, "empty");
		tile67.name = "tile67";
		tile67.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile67);

		// tile78
		const tile78 = this.add.image(820, 540, "empty");
		tile78.name = "tile78";
		tile78.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile78);

		// tile79
		const tile79 = this.add.image(880, 540, "empty");
		tile79.name = "tile79";
		tile79.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile79);

		// tile74
		const tile74 = this.add.image(580, 540, "empty");
		tile74.name = "tile74";
		tile74.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile74);

		// tile73
		const tile73 = this.add.image(520, 540, "empty");
		tile73.name = "tile73";
		tile73.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile73);

		// tile72
		const tile72 = this.add.image(460, 540, "empty");
		tile72.name = "tile72";
		tile72.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile72);

		// tile65
		const tile65 = this.add.image(640, 480, "empty");
		tile65.name = "tile65";
		tile65.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_1.add(tile65);

		// layer_2
		const layer_2 = this.add.layer();

		// inv_text_ignore
		const inv_text_ignore = this.add.text(190, 180, "", {});
		inv_text_ignore.setOrigin(0.5, 0.5);
		inv_text_ignore.text = "Inventory";
		inv_text_ignore.setStyle({ "align": "center", "fontSize": "30px" });
		layer_2.add(inv_text_ignore);

		// player_slot1
		const player_slot1 = this.add.image(190, 235, "empty");
		player_slot1.scaleX = 1.3;
		player_slot1.scaleY = 1.3;
		layer_2.add(player_slot1);

		// player_slot2
		const player_slot2 = this.add.image(190, 310, "empty");
		player_slot2.scaleX = 1.3;
		player_slot2.scaleY = 1.3;
		layer_2.add(player_slot2);

		// player_slot3
		const player_slot3 = this.add.image(190, 385, "empty");
		player_slot3.scaleX = 1.3;
		player_slot3.scaleY = 1.3;
		layer_2.add(player_slot3);

		// player_slot5
		const player_slot5 = this.add.image(190, 535, "empty");
		player_slot5.scaleX = 1.3;
		player_slot5.scaleY = 1.3;
		layer_2.add(player_slot5);

		// player_slot4
		const player_slot4 = this.add.image(190, 460, "empty");
		player_slot4.scaleX = 1.3;
		player_slot4.scaleY = 1.3;
		layer_2.add(player_slot4);

		// player1
		const player1 = this.add.text(360, 600, "", {});
		player1.setOrigin(0.5, 0.5);
		player1.text = "Your Name...";
		player1.setStyle({ "align": "center", "fontSize": "35px" });
		layer_2.add(player1);

		// player2
		const player2 = this.add.text(920, 600, "", {});
		player2.setOrigin(0.5, 0.5);
		player2.text = "Waiting for Player 2...";
		player2.setStyle({ "align": "center", "fontSize": "35px" });
		layer_2.add(player2);

		// rambow_sprite_inv
		const rambow_sprite_inv = this.add.image(190, 235, "rambow_sprite");
		rambow_sprite_inv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_2.add(rambow_sprite_inv);

		// gipio_sprite_inv
		const gipio_sprite_inv = this.add.image(190, 385, "gipio_sprite");
		gipio_sprite_inv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_2.add(gipio_sprite_inv);

		// decibelle_sprite_inv
		const decibelle_sprite_inv = this.add.image(190, 460, "decibelle_sprite");
		decibelle_sprite_inv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_2.add(decibelle_sprite_inv);

		// rommy_sprite_inv
		const rommy_sprite_inv = this.add.image(190, 535, "rommy_sprite");
		rommy_sprite_inv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_2.add(rommy_sprite_inv);

		// inv_rambow_number
		const inv_rambow_number = this.add.text(250, 240, "", {});
		inv_rambow_number.setOrigin(0.5, 0.5);
		inv_rambow_number.text = "0";
		inv_rambow_number.setStyle({ "fontSize": "30px" });
		layer_2.add(inv_rambow_number);

		// inv_elventito_number
		const inv_elventito_number = this.add.text(250, 310, "", {});
		inv_elventito_number.setOrigin(0.5, 0.5);
		inv_elventito_number.text = "0";
		inv_elventito_number.setStyle({ "fontSize": "30px" });
		layer_2.add(inv_elventito_number);

		// inv_gipio_number
		const inv_gipio_number = this.add.text(250, 385, "", {});
		inv_gipio_number.setOrigin(0.5, 0.5);
		inv_gipio_number.text = "0";
		inv_gipio_number.setStyle({ "fontSize": "30px" });
		layer_2.add(inv_gipio_number);

		// inv_decibelle_number
		const inv_decibelle_number = this.add.text(250, 460, "", {});
		inv_decibelle_number.setOrigin(0.5, 0.5);
		inv_decibelle_number.text = "0";
		inv_decibelle_number.setStyle({ "fontSize": "30px" });
		layer_2.add(inv_decibelle_number);

		// inv_rommy_number
		const inv_rommy_number = this.add.text(250, 535, "", {});
		inv_rommy_number.setOrigin(0.5, 0.5);
		inv_rommy_number.text = "0";
		inv_rommy_number.setStyle({ "fontSize": "30px" });
		layer_2.add(inv_rommy_number);

		// player1_wins
		const player1_wins = this.add.text(360, 645, "", {});
		player1_wins.setOrigin(0.5, 0.5);
		player1_wins.text = "Your Wins...";
		player1_wins.setStyle({ "align": "center", "fontSize": "30px" });
		layer_2.add(player1_wins);

		// player1_losses
		const player1_losses = this.add.text(360, 690, "", {});
		player1_losses.setOrigin(0.5, 0.5);
		player1_losses.text = "Your Losses:...";
		player1_losses.setStyle({ "align": "center", "fontSize": "30px" });
		layer_2.add(player1_losses);

		// player2_losses
		const player2_losses = this.add.text(920, 690, "", {});
		player2_losses.setOrigin(0.5, 0.5);
		player2_losses.text = "Opponent's Losses...";
		player2_losses.setStyle({ "align": "center", "fontSize": "30px" });
		layer_2.add(player2_losses);

		// player2_wins
		const player2_wins = this.add.text(920, 645, "", {});
		player2_wins.setOrigin(0.5, 0.5);
		player2_wins.text = "Opponent's Wins...";
		player2_wins.setStyle({ "align": "center", "fontSize": "30px" });
		layer_2.add(player2_wins);

		// turn
		const turn = this.add.text(640, 125, "", {});
		turn.setOrigin(0.5, 0.5);
		turn.text = "Turn: 0";
		turn.setStyle({ "align": "center", "fontSize": "35px" });
		layer_2.add(turn);

		// elventito_sprite_inv
		const elventito_sprite_inv = this.add.image(190, 310, "elventito_sprite");
		elventito_sprite_inv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_2.add(elventito_sprite_inv);

		// layer_3
		const layer_3 = this.add.layer();

		// rec_desc_hover
		const rec_desc_hover = this.add.rectangle(1090, 360, 128, 128);
		rec_desc_hover.scaleX = 2;
		rec_desc_hover.scaleY = 3;
		rec_desc_hover.isFilled = true;
		rec_desc_hover.fillColor = 2171169;
		rec_desc_hover.fillAlpha = 0.45;
		layer_3.add(rec_desc_hover);

		// text_char_name_ignore
		const text_char_name_ignore = this.add.text(975, 185, "", {});
		text_char_name_ignore.text = "Character Name:";
		layer_3.add(text_char_name_ignore);

		// title
		const title = this.add.text(640, 70, "", {});
		title.setOrigin(0.5, 0.5);
		title.text = "HARDWARE WARFARE";
		title.setStyle({ "align": "center", "fontSize": "60px", "fontStyle": "bold italic" });
		layer_3.add(title);

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(title);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeScript_1);

		// glowFx
		title.preFX.addGlow(2789689, 4, 0, false);

		// text_char_stats
		const text_char_stats = this.add.text(975, 245, "", {});
		text_char_stats.text = "Character Stats:";
		layer_3.add(text_char_stats);

		// text_char_desc_ignore
		const text_char_desc_ignore = this.add.text(975, 370, "", {});
		text_char_desc_ignore.text = "Character Description:";
		layer_3.add(text_char_desc_ignore);

		// text_char_name
		const text_char_name = this.add.text(975, 200, "", {});
		text_char_name.text = "-----";
		layer_3.add(text_char_name);

		// text_char_stats_hp
		const text_char_stats_hp = this.add.text(975, 265, "", {});
		text_char_stats_hp.text = "HP: ---";
		layer_3.add(text_char_stats_hp);

		// text_char_stats_atk
		const text_char_stats_atk = this.add.text(975, 280, "", {});
		text_char_stats_atk.text = "ATK: ---";
		layer_3.add(text_char_stats_atk);

		// text_char_stats_spd
		const text_char_stats_spd = this.add.text(975, 295, "", {});
		text_char_stats_spd.text = "SPD: ---";
		layer_3.add(text_char_stats_spd);

		// text_char_stats_range
		const text_char_stats_range = this.add.text(975, 310, "", {});
		text_char_stats_range.text = "Range: ---";
		layer_3.add(text_char_stats_range);

		// text_char_stats_target
		const text_char_stats_target = this.add.text(975, 325, "", {});
		text_char_stats_target.text = "Target: ---";
		layer_3.add(text_char_stats_target);

		// text_char_desc
		const text_char_desc = this.add.text(975, 385, "", {});
		text_char_desc.text = "-----";
		layer_3.add(text_char_desc);

		// layer_4
		const layer_4 = this.add.layer();

		// layer_5
		const layer_5 = this.add.layer();

		// moveOrRange_square_71
		const moveOrRange_square_71 = this.add.rectangle(400, 540, 0, 0);
		moveOrRange_square_71.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_71.visible = false;
		layer_5.add(moveOrRange_square_71);

		// moveOrRange_square_61
		const moveOrRange_square_61 = this.add.rectangle(400, 480, 0, 0);
		moveOrRange_square_61.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_61.visible = false;
		layer_5.add(moveOrRange_square_61);

		// moveOrRange_square_51
		const moveOrRange_square_51 = this.add.rectangle(400, 420, 0, 0);
		moveOrRange_square_51.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_51.visible = false;
		layer_5.add(moveOrRange_square_51);

		// moveOrRange_square_31
		const moveOrRange_square_31 = this.add.rectangle(400, 300, 0, 0);
		moveOrRange_square_31.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_31.visible = false;
		layer_5.add(moveOrRange_square_31);

		// moveOrRange_square_21
		const moveOrRange_square_21 = this.add.rectangle(400, 240, 0, 0);
		moveOrRange_square_21.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_21.visible = false;
		layer_5.add(moveOrRange_square_21);

		// moveOrRange_square_11
		const moveOrRange_square_11 = this.add.rectangle(400, 180, 0, 0);
		moveOrRange_square_11.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_11.visible = false;
		layer_5.add(moveOrRange_square_11);

		// moveOrRange_square_41
		const moveOrRange_square_41 = this.add.rectangle(400, 360, 0, 0);
		moveOrRange_square_41.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_41.visible = false;
		layer_5.add(moveOrRange_square_41);

		// moveOrRange_square_72
		const moveOrRange_square_72 = this.add.rectangle(460, 540, 0, 0);
		moveOrRange_square_72.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_72.visible = false;
		layer_5.add(moveOrRange_square_72);

		// moveOrRange_square_42
		const moveOrRange_square_42 = this.add.rectangle(460, 360, 0, 0);
		moveOrRange_square_42.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_42.visible = false;
		layer_5.add(moveOrRange_square_42);

		// moveOrRange_square_12
		const moveOrRange_square_12 = this.add.rectangle(460, 180, 0, 0);
		moveOrRange_square_12.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_12.visible = false;
		layer_5.add(moveOrRange_square_12);

		// moveOrRange_square_22
		const moveOrRange_square_22 = this.add.rectangle(460, 240, 0, 0);
		moveOrRange_square_22.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_22.visible = false;
		layer_5.add(moveOrRange_square_22);

		// moveOrRange_square_32
		const moveOrRange_square_32 = this.add.rectangle(460, 300, 0, 0);
		moveOrRange_square_32.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_32.visible = false;
		layer_5.add(moveOrRange_square_32);

		// moveOrRange_square_52
		const moveOrRange_square_52 = this.add.rectangle(460, 420, 0, 0);
		moveOrRange_square_52.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_52.visible = false;
		layer_5.add(moveOrRange_square_52);

		// moveOrRange_square_62
		const moveOrRange_square_62 = this.add.rectangle(460, 480, 0, 0);
		moveOrRange_square_62.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_62.visible = false;
		layer_5.add(moveOrRange_square_62);

		// moveOrRange_square_73
		const moveOrRange_square_73 = this.add.rectangle(520, 540, 0, 0);
		moveOrRange_square_73.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_73.visible = false;
		layer_5.add(moveOrRange_square_73);

		// moveOrRange_square_43
		const moveOrRange_square_43 = this.add.rectangle(520, 360, 0, 0);
		moveOrRange_square_43.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_43.visible = false;
		layer_5.add(moveOrRange_square_43);

		// moveOrRange_square_13
		const moveOrRange_square_13 = this.add.rectangle(520, 180, 0, 0);
		moveOrRange_square_13.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_13.visible = false;
		layer_5.add(moveOrRange_square_13);

		// moveOrRange_square_23
		const moveOrRange_square_23 = this.add.rectangle(520, 240, 0, 0);
		moveOrRange_square_23.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_23.visible = false;
		layer_5.add(moveOrRange_square_23);

		// moveOrRange_square_33
		const moveOrRange_square_33 = this.add.rectangle(520, 300, 0, 0);
		moveOrRange_square_33.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_33.visible = false;
		layer_5.add(moveOrRange_square_33);

		// moveOrRange_square_53
		const moveOrRange_square_53 = this.add.rectangle(520, 420, 0, 0);
		moveOrRange_square_53.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_53.visible = false;
		layer_5.add(moveOrRange_square_53);

		// moveOrRange_square_63
		const moveOrRange_square_63 = this.add.rectangle(520, 480, 0, 0);
		moveOrRange_square_63.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_63.visible = false;
		layer_5.add(moveOrRange_square_63);

		// moveOrRange_square_76
		const moveOrRange_square_76 = this.add.rectangle(700, 540, 0, 0);
		moveOrRange_square_76.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_76.visible = false;
		layer_5.add(moveOrRange_square_76);

		// moveOrRange_square_46
		const moveOrRange_square_46 = this.add.rectangle(700, 360, 0, 0);
		moveOrRange_square_46.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_46.visible = false;
		layer_5.add(moveOrRange_square_46);

		// moveOrRange_square_16
		const moveOrRange_square_16 = this.add.rectangle(700, 180, 0, 0);
		moveOrRange_square_16.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_16.visible = false;
		layer_5.add(moveOrRange_square_16);

		// moveOrRange_square_26
		const moveOrRange_square_26 = this.add.rectangle(700, 240, 0, 0);
		moveOrRange_square_26.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_26.visible = false;
		layer_5.add(moveOrRange_square_26);

		// moveOrRange_square_36
		const moveOrRange_square_36 = this.add.rectangle(700, 300, 0, 0);
		moveOrRange_square_36.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_36.visible = false;
		layer_5.add(moveOrRange_square_36);

		// moveOrRange_square_56
		const moveOrRange_square_56 = this.add.rectangle(700, 420, 0, 0);
		moveOrRange_square_56.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_56.visible = false;
		layer_5.add(moveOrRange_square_56);

		// moveOrRange_square_66
		const moveOrRange_square_66 = this.add.rectangle(700, 480, 0, 0);
		moveOrRange_square_66.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_66.visible = false;
		layer_5.add(moveOrRange_square_66);

		// moveOrRange_square_65
		const moveOrRange_square_65 = this.add.rectangle(640, 480, 0, 0);
		moveOrRange_square_65.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_65.visible = false;
		layer_5.add(moveOrRange_square_65);

		// moveOrRange_square_55
		const moveOrRange_square_55 = this.add.rectangle(640, 420, 0, 0);
		moveOrRange_square_55.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_55.visible = false;
		layer_5.add(moveOrRange_square_55);

		// moveOrRange_square_35
		const moveOrRange_square_35 = this.add.rectangle(640, 300, 0, 0);
		moveOrRange_square_35.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_35.visible = false;
		layer_5.add(moveOrRange_square_35);

		// moveOrRange_square_25
		const moveOrRange_square_25 = this.add.rectangle(640, 240, 0, 0);
		moveOrRange_square_25.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_25.visible = false;
		layer_5.add(moveOrRange_square_25);

		// moveOrRange_square_15
		const moveOrRange_square_15 = this.add.rectangle(640, 180, 0, 0);
		moveOrRange_square_15.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_15.visible = false;
		layer_5.add(moveOrRange_square_15);

		// moveOrRange_square_45
		const moveOrRange_square_45 = this.add.rectangle(640, 360, 0, 0);
		moveOrRange_square_45.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_45.visible = false;
		layer_5.add(moveOrRange_square_45);

		// moveOrRange_square_75
		const moveOrRange_square_75 = this.add.rectangle(640, 540, 0, 0);
		moveOrRange_square_75.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_75.visible = false;
		layer_5.add(moveOrRange_square_75);

		// moveOrRange_square_44
		const moveOrRange_square_44 = this.add.rectangle(580, 360, 0, 0);
		moveOrRange_square_44.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_44.visible = false;
		layer_5.add(moveOrRange_square_44);

		// moveOrRange_square_14
		const moveOrRange_square_14 = this.add.rectangle(580, 180, 0, 0);
		moveOrRange_square_14.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_14.visible = false;
		layer_5.add(moveOrRange_square_14);

		// moveOrRange_square_24
		const moveOrRange_square_24 = this.add.rectangle(580, 240, 0, 0);
		moveOrRange_square_24.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_24.visible = false;
		layer_5.add(moveOrRange_square_24);

		// moveOrRange_square_34
		const moveOrRange_square_34 = this.add.rectangle(580, 300, 0, 0);
		moveOrRange_square_34.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_34.visible = false;
		layer_5.add(moveOrRange_square_34);

		// moveOrRange_square_54
		const moveOrRange_square_54 = this.add.rectangle(580, 420, 0, 0);
		moveOrRange_square_54.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_54.visible = false;
		layer_5.add(moveOrRange_square_54);

		// moveOrRange_square_64
		const moveOrRange_square_64 = this.add.rectangle(580, 480, 0, 0);
		moveOrRange_square_64.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_64.visible = false;
		layer_5.add(moveOrRange_square_64);

		// moveOrRange_square_74
		const moveOrRange_square_74 = this.add.rectangle(580, 540, 0, 0);
		moveOrRange_square_74.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_74.visible = false;
		layer_5.add(moveOrRange_square_74);

		// moveOrRange_square_79
		const moveOrRange_square_79 = this.add.rectangle(880, 540, 0, 0);
		moveOrRange_square_79.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_79.visible = false;
		layer_5.add(moveOrRange_square_79);

		// moveOrRange_square_49
		const moveOrRange_square_49 = this.add.rectangle(880, 360, 0, 0);
		moveOrRange_square_49.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_49.visible = false;
		layer_5.add(moveOrRange_square_49);

		// moveOrRange_square_19
		const moveOrRange_square_19 = this.add.rectangle(880, 180, 0, 0);
		moveOrRange_square_19.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_19.visible = false;
		layer_5.add(moveOrRange_square_19);

		// moveOrRange_square_29
		const moveOrRange_square_29 = this.add.rectangle(880, 240, 0, 0);
		moveOrRange_square_29.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_29.visible = false;
		layer_5.add(moveOrRange_square_29);

		// moveOrRange_square_39
		const moveOrRange_square_39 = this.add.rectangle(880, 300, 0, 0);
		moveOrRange_square_39.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_39.visible = false;
		layer_5.add(moveOrRange_square_39);

		// moveOrRange_square_59
		const moveOrRange_square_59 = this.add.rectangle(880, 420, 0, 0);
		moveOrRange_square_59.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_59.visible = false;
		layer_5.add(moveOrRange_square_59);

		// moveOrRange_square_69
		const moveOrRange_square_69 = this.add.rectangle(880, 480, 0, 0);
		moveOrRange_square_69.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_69.visible = false;
		layer_5.add(moveOrRange_square_69);

		// moveOrRange_square_68
		const moveOrRange_square_68 = this.add.rectangle(820, 480, 0, 0);
		moveOrRange_square_68.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_68.visible = false;
		layer_5.add(moveOrRange_square_68);

		// moveOrRange_square_58
		const moveOrRange_square_58 = this.add.rectangle(820, 420, 0, 0);
		moveOrRange_square_58.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_58.visible = false;
		layer_5.add(moveOrRange_square_58);

		// moveOrRange_square_38
		const moveOrRange_square_38 = this.add.rectangle(820, 300, 0, 0);
		moveOrRange_square_38.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_38.visible = false;
		layer_5.add(moveOrRange_square_38);

		// moveOrRange_square_28
		const moveOrRange_square_28 = this.add.rectangle(820, 240, 0, 0);
		moveOrRange_square_28.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_28.visible = false;
		layer_5.add(moveOrRange_square_28);

		// moveOrRange_square_18
		const moveOrRange_square_18 = this.add.rectangle(820, 180, 0, 0);
		moveOrRange_square_18.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_18.visible = false;
		layer_5.add(moveOrRange_square_18);

		// moveOrRange_square_48
		const moveOrRange_square_48 = this.add.rectangle(820, 360, 0, 0);
		moveOrRange_square_48.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_48.visible = false;
		layer_5.add(moveOrRange_square_48);

		// moveOrRange_square_78
		const moveOrRange_square_78 = this.add.rectangle(820, 540, 0, 0);
		moveOrRange_square_78.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_78.visible = false;
		layer_5.add(moveOrRange_square_78);

		// moveOrRange_square_47
		const moveOrRange_square_47 = this.add.rectangle(760, 360, 0, 0);
		moveOrRange_square_47.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_47.visible = false;
		layer_5.add(moveOrRange_square_47);

		// moveOrRange_square_17
		const moveOrRange_square_17 = this.add.rectangle(760, 180, 0, 0);
		moveOrRange_square_17.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_17.visible = false;
		layer_5.add(moveOrRange_square_17);

		// moveOrRange_square_27
		const moveOrRange_square_27 = this.add.rectangle(760, 240, 0, 0);
		moveOrRange_square_27.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_27.visible = false;
		layer_5.add(moveOrRange_square_27);

		// moveOrRange_square_37
		const moveOrRange_square_37 = this.add.rectangle(760, 300, 0, 0);
		moveOrRange_square_37.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_37.visible = false;
		layer_5.add(moveOrRange_square_37);

		// moveOrRange_square_57
		const moveOrRange_square_57 = this.add.rectangle(760, 420, 0, 0);
		moveOrRange_square_57.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_57.visible = false;
		layer_5.add(moveOrRange_square_57);

		// moveOrRange_square_67
		const moveOrRange_square_67 = this.add.rectangle(760, 480, 0, 0);
		moveOrRange_square_67.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_67.visible = false;
		layer_5.add(moveOrRange_square_67);

		// moveOrRange_square_77
		const moveOrRange_square_77 = this.add.rectangle(760, 540, 0, 0);
		moveOrRange_square_77.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_77.visible = false;
		layer_5.add(moveOrRange_square_77);

		// place_square_1_1
		const place_square_1_1 = new Prefab(this, 400, 180);
		place_square_1_1.removeInteractive();
		place_square_1_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_1_1.visible = false;
		layer_5.add(place_square_1_1);

		// place_square_2_1
		const place_square_2_1 = new Prefab(this, 400, 240);
		place_square_2_1.removeInteractive();
		place_square_2_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_2_1.visible = false;
		layer_5.add(place_square_2_1);

		// place_square_3_1
		const place_square_3_1 = new Prefab(this, 400, 300);
		place_square_3_1.removeInteractive();
		place_square_3_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_3_1.visible = false;
		layer_5.add(place_square_3_1);

		// place_square_5_1
		const place_square_5_1 = new Prefab(this, 400, 420);
		place_square_5_1.removeInteractive();
		place_square_5_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_5_1.visible = false;
		layer_5.add(place_square_5_1);

		// place_square_6_1
		const place_square_6_1 = new Prefab(this, 400, 480);
		place_square_6_1.removeInteractive();
		place_square_6_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_6_1.visible = false;
		layer_5.add(place_square_6_1);

		// place_square_7_1
		const place_square_7_1 = new Prefab(this, 400, 540);
		place_square_7_1.removeInteractive();
		place_square_7_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_7_1.visible = false;
		layer_5.add(place_square_7_1);

		// place_square_1_2
		const place_square_1_2 = new Prefab(this, 880, 180);
		place_square_1_2.removeInteractive();
		place_square_1_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_1_2.visible = false;
		layer_5.add(place_square_1_2);

		// place_square_7_2
		const place_square_7_2 = new Prefab(this, 880, 540);
		place_square_7_2.removeInteractive();
		place_square_7_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_7_2.visible = false;
		layer_5.add(place_square_7_2);

		// place_square_6_2
		const place_square_6_2 = new Prefab(this, 880, 480);
		place_square_6_2.removeInteractive();
		place_square_6_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_6_2.visible = false;
		layer_5.add(place_square_6_2);

		// place_square_5_2
		const place_square_5_2 = new Prefab(this, 880, 420);
		place_square_5_2.removeInteractive();
		place_square_5_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_5_2.visible = false;
		layer_5.add(place_square_5_2);

		// place_square_3_2
		const place_square_3_2 = new Prefab(this, 880, 300);
		place_square_3_2.removeInteractive();
		place_square_3_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_3_2.visible = false;
		layer_5.add(place_square_3_2);

		// place_square_2_2
		const place_square_2_2 = new Prefab(this, 880, 240);
		place_square_2_2.removeInteractive();
		place_square_2_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_2_2.visible = false;
		layer_5.add(place_square_2_2);

		// lists
		const listOfTiles = [tile45, tile65, tile72, tile73, tile74, tile79, tile78, tile67, tile63, tile64, tile69, tile68, tile62, tile61, tile71, tile75, tile76, tile77, tile66, tile15, tile22, tile23, tile24, tile29, tile28, tile17, tile13, tile14, tile19, tile18, tile12, tile11, tile21, tile25, tile26, tile27, tile16, tile32, tile38, tile39, tile34, tile33, tile37, tile36, tile35, tile31, tile52, tile58, tile59, tile54, tile53, tile57, tile56, tile55, tile51, tile42, tile48, tile44, tile43, tile47, tile46, tile41, tile49];
		const place_squares = [place_square_3_1, place_square_1_1, place_square_5_1, place_square_6_1, place_square_7_1, place_square_2_1];
		const moreOrRange_tiles = [moveOrRange_square_71, moveOrRange_square_77, moveOrRange_square_67, moveOrRange_square_57, moveOrRange_square_37, moveOrRange_square_27, moveOrRange_square_17, moveOrRange_square_47, moveOrRange_square_78, moveOrRange_square_48, moveOrRange_square_18, moveOrRange_square_28, moveOrRange_square_38, moveOrRange_square_58, moveOrRange_square_68, moveOrRange_square_69, moveOrRange_square_59, moveOrRange_square_39, moveOrRange_square_29, moveOrRange_square_19, moveOrRange_square_49, moveOrRange_square_79, moveOrRange_square_74, moveOrRange_square_64, moveOrRange_square_54, moveOrRange_square_34, moveOrRange_square_24, moveOrRange_square_14, moveOrRange_square_44, moveOrRange_square_75, moveOrRange_square_45, moveOrRange_square_15, moveOrRange_square_25, moveOrRange_square_35, moveOrRange_square_55, moveOrRange_square_65, moveOrRange_square_66, moveOrRange_square_56, moveOrRange_square_36, moveOrRange_square_26, moveOrRange_square_16, moveOrRange_square_46, moveOrRange_square_76, moveOrRange_square_63, moveOrRange_square_53, moveOrRange_square_33, moveOrRange_square_23, moveOrRange_square_13, moveOrRange_square_43, moveOrRange_square_73, moveOrRange_square_62, moveOrRange_square_52, moveOrRange_square_32, moveOrRange_square_22, moveOrRange_square_12, moveOrRange_square_42, moveOrRange_square_72, moveOrRange_square_41, moveOrRange_square_11, moveOrRange_square_21, moveOrRange_square_31, moveOrRange_square_51, moveOrRange_square_61];
		const boardCharacters = [];

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 1500;

		this.hw_bg = hw_bg;
		this.tile45 = tile45;
		this.tile46 = tile46;
		this.tile47 = tile47;
		this.tile43 = tile43;
		this.tile44 = tile44;
		this.tile49 = tile49;
		this.tile48 = tile48;
		this.tile42 = tile42;
		this.tile41 = tile41;
		this.tile51 = tile51;
		this.tile55 = tile55;
		this.tile56 = tile56;
		this.tile57 = tile57;
		this.tile53 = tile53;
		this.tile54 = tile54;
		this.tile59 = tile59;
		this.tile58 = tile58;
		this.tile52 = tile52;
		this.tile31 = tile31;
		this.tile35 = tile35;
		this.tile36 = tile36;
		this.tile37 = tile37;
		this.tile33 = tile33;
		this.tile34 = tile34;
		this.tile39 = tile39;
		this.tile38 = tile38;
		this.tile32 = tile32;
		this.tile16 = tile16;
		this.tile27 = tile27;
		this.tile26 = tile26;
		this.tile25 = tile25;
		this.tile21 = tile21;
		this.tile11 = tile11;
		this.tile12 = tile12;
		this.tile18 = tile18;
		this.tile19 = tile19;
		this.tile14 = tile14;
		this.tile13 = tile13;
		this.tile17 = tile17;
		this.tile28 = tile28;
		this.tile29 = tile29;
		this.tile24 = tile24;
		this.tile23 = tile23;
		this.tile22 = tile22;
		this.tile15 = tile15;
		this.tile66 = tile66;
		this.tile77 = tile77;
		this.tile76 = tile76;
		this.tile75 = tile75;
		this.tile71 = tile71;
		this.tile61 = tile61;
		this.tile62 = tile62;
		this.tile68 = tile68;
		this.tile69 = tile69;
		this.tile64 = tile64;
		this.tile63 = tile63;
		this.tile67 = tile67;
		this.tile78 = tile78;
		this.tile79 = tile79;
		this.tile74 = tile74;
		this.tile73 = tile73;
		this.tile72 = tile72;
		this.tile65 = tile65;
		this.layer_1 = layer_1;
		this.inv_text_ignore = inv_text_ignore;
		this.player_slot1 = player_slot1;
		this.player_slot2 = player_slot2;
		this.player_slot3 = player_slot3;
		this.player_slot5 = player_slot5;
		this.player_slot4 = player_slot4;
		this.player1 = player1;
		this.player2 = player2;
		this.rambow_sprite_inv = rambow_sprite_inv;
		this.gipio_sprite_inv = gipio_sprite_inv;
		this.decibelle_sprite_inv = decibelle_sprite_inv;
		this.rommy_sprite_inv = rommy_sprite_inv;
		this.inv_rambow_number = inv_rambow_number;
		this.inv_elventito_number = inv_elventito_number;
		this.inv_gipio_number = inv_gipio_number;
		this.inv_decibelle_number = inv_decibelle_number;
		this.inv_rommy_number = inv_rommy_number;
		this.player1_wins = player1_wins;
		this.player1_losses = player1_losses;
		this.player2_losses = player2_losses;
		this.player2_wins = player2_wins;
		this.turn = turn;
		this.elventito_sprite_inv = elventito_sprite_inv;
		this.layer_2 = layer_2;
		this.text_char_name = text_char_name;
		this.text_char_stats_hp = text_char_stats_hp;
		this.text_char_stats_atk = text_char_stats_atk;
		this.text_char_stats_spd = text_char_stats_spd;
		this.text_char_stats_range = text_char_stats_range;
		this.text_char_stats_target = text_char_stats_target;
		this.text_char_desc = text_char_desc;
		this.layer_3 = layer_3;
		this.layer_4 = layer_4;
		this.moveOrRange_square_71 = moveOrRange_square_71;
		this.moveOrRange_square_61 = moveOrRange_square_61;
		this.moveOrRange_square_51 = moveOrRange_square_51;
		this.moveOrRange_square_31 = moveOrRange_square_31;
		this.moveOrRange_square_21 = moveOrRange_square_21;
		this.moveOrRange_square_11 = moveOrRange_square_11;
		this.moveOrRange_square_41 = moveOrRange_square_41;
		this.moveOrRange_square_72 = moveOrRange_square_72;
		this.moveOrRange_square_42 = moveOrRange_square_42;
		this.moveOrRange_square_12 = moveOrRange_square_12;
		this.moveOrRange_square_22 = moveOrRange_square_22;
		this.moveOrRange_square_32 = moveOrRange_square_32;
		this.moveOrRange_square_52 = moveOrRange_square_52;
		this.moveOrRange_square_62 = moveOrRange_square_62;
		this.moveOrRange_square_73 = moveOrRange_square_73;
		this.moveOrRange_square_43 = moveOrRange_square_43;
		this.moveOrRange_square_13 = moveOrRange_square_13;
		this.moveOrRange_square_23 = moveOrRange_square_23;
		this.moveOrRange_square_33 = moveOrRange_square_33;
		this.moveOrRange_square_53 = moveOrRange_square_53;
		this.moveOrRange_square_63 = moveOrRange_square_63;
		this.moveOrRange_square_76 = moveOrRange_square_76;
		this.moveOrRange_square_46 = moveOrRange_square_46;
		this.moveOrRange_square_16 = moveOrRange_square_16;
		this.moveOrRange_square_26 = moveOrRange_square_26;
		this.moveOrRange_square_36 = moveOrRange_square_36;
		this.moveOrRange_square_56 = moveOrRange_square_56;
		this.moveOrRange_square_66 = moveOrRange_square_66;
		this.moveOrRange_square_65 = moveOrRange_square_65;
		this.moveOrRange_square_55 = moveOrRange_square_55;
		this.moveOrRange_square_35 = moveOrRange_square_35;
		this.moveOrRange_square_25 = moveOrRange_square_25;
		this.moveOrRange_square_15 = moveOrRange_square_15;
		this.moveOrRange_square_45 = moveOrRange_square_45;
		this.moveOrRange_square_75 = moveOrRange_square_75;
		this.moveOrRange_square_44 = moveOrRange_square_44;
		this.moveOrRange_square_14 = moveOrRange_square_14;
		this.moveOrRange_square_24 = moveOrRange_square_24;
		this.moveOrRange_square_34 = moveOrRange_square_34;
		this.moveOrRange_square_54 = moveOrRange_square_54;
		this.moveOrRange_square_64 = moveOrRange_square_64;
		this.moveOrRange_square_74 = moveOrRange_square_74;
		this.moveOrRange_square_79 = moveOrRange_square_79;
		this.moveOrRange_square_49 = moveOrRange_square_49;
		this.moveOrRange_square_19 = moveOrRange_square_19;
		this.moveOrRange_square_29 = moveOrRange_square_29;
		this.moveOrRange_square_39 = moveOrRange_square_39;
		this.moveOrRange_square_59 = moveOrRange_square_59;
		this.moveOrRange_square_69 = moveOrRange_square_69;
		this.moveOrRange_square_68 = moveOrRange_square_68;
		this.moveOrRange_square_58 = moveOrRange_square_58;
		this.moveOrRange_square_38 = moveOrRange_square_38;
		this.moveOrRange_square_28 = moveOrRange_square_28;
		this.moveOrRange_square_18 = moveOrRange_square_18;
		this.moveOrRange_square_48 = moveOrRange_square_48;
		this.moveOrRange_square_78 = moveOrRange_square_78;
		this.moveOrRange_square_47 = moveOrRange_square_47;
		this.moveOrRange_square_17 = moveOrRange_square_17;
		this.moveOrRange_square_27 = moveOrRange_square_27;
		this.moveOrRange_square_37 = moveOrRange_square_37;
		this.moveOrRange_square_57 = moveOrRange_square_57;
		this.moveOrRange_square_67 = moveOrRange_square_67;
		this.moveOrRange_square_77 = moveOrRange_square_77;
		this.place_square_1_1 = place_square_1_1;
		this.place_square_2_1 = place_square_2_1;
		this.place_square_3_1 = place_square_3_1;
		this.place_square_5_1 = place_square_5_1;
		this.place_square_6_1 = place_square_6_1;
		this.place_square_7_1 = place_square_7_1;
		this.place_square_1_2 = place_square_1_2;
		this.place_square_7_2 = place_square_7_2;
		this.place_square_6_2 = place_square_6_2;
		this.place_square_5_2 = place_square_5_2;
		this.place_square_3_2 = place_square_3_2;
		this.place_square_2_2 = place_square_2_2;
		this.layer_5 = layer_5;
		this.listOfTiles = listOfTiles;
		this.place_squares = place_squares;
		this.moreOrRange_tiles = moreOrRange_tiles;
		this.boardCharacters = boardCharacters;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	hw_bg;
	/** @type {Phaser.GameObjects.Image} */
	tile45;
	/** @type {Phaser.GameObjects.Image} */
	tile46;
	/** @type {Phaser.GameObjects.Image} */
	tile47;
	/** @type {Phaser.GameObjects.Image} */
	tile43;
	/** @type {Phaser.GameObjects.Image} */
	tile44;
	/** @type {Phaser.GameObjects.Image} */
	tile49;
	/** @type {Phaser.GameObjects.Image} */
	tile48;
	/** @type {Phaser.GameObjects.Image} */
	tile42;
	/** @type {Phaser.GameObjects.Image} */
	tile41;
	/** @type {Phaser.GameObjects.Image} */
	tile51;
	/** @type {Phaser.GameObjects.Image} */
	tile55;
	/** @type {Phaser.GameObjects.Image} */
	tile56;
	/** @type {Phaser.GameObjects.Image} */
	tile57;
	/** @type {Phaser.GameObjects.Image} */
	tile53;
	/** @type {Phaser.GameObjects.Image} */
	tile54;
	/** @type {Phaser.GameObjects.Image} */
	tile59;
	/** @type {Phaser.GameObjects.Image} */
	tile58;
	/** @type {Phaser.GameObjects.Image} */
	tile52;
	/** @type {Phaser.GameObjects.Image} */
	tile31;
	/** @type {Phaser.GameObjects.Image} */
	tile35;
	/** @type {Phaser.GameObjects.Image} */
	tile36;
	/** @type {Phaser.GameObjects.Image} */
	tile37;
	/** @type {Phaser.GameObjects.Image} */
	tile33;
	/** @type {Phaser.GameObjects.Image} */
	tile34;
	/** @type {Phaser.GameObjects.Image} */
	tile39;
	/** @type {Phaser.GameObjects.Image} */
	tile38;
	/** @type {Phaser.GameObjects.Image} */
	tile32;
	/** @type {Phaser.GameObjects.Image} */
	tile16;
	/** @type {Phaser.GameObjects.Image} */
	tile27;
	/** @type {Phaser.GameObjects.Image} */
	tile26;
	/** @type {Phaser.GameObjects.Image} */
	tile25;
	/** @type {Phaser.GameObjects.Image} */
	tile21;
	/** @type {Phaser.GameObjects.Image} */
	tile11;
	/** @type {Phaser.GameObjects.Image} */
	tile12;
	/** @type {Phaser.GameObjects.Image} */
	tile18;
	/** @type {Phaser.GameObjects.Image} */
	tile19;
	/** @type {Phaser.GameObjects.Image} */
	tile14;
	/** @type {Phaser.GameObjects.Image} */
	tile13;
	/** @type {Phaser.GameObjects.Image} */
	tile17;
	/** @type {Phaser.GameObjects.Image} */
	tile28;
	/** @type {Phaser.GameObjects.Image} */
	tile29;
	/** @type {Phaser.GameObjects.Image} */
	tile24;
	/** @type {Phaser.GameObjects.Image} */
	tile23;
	/** @type {Phaser.GameObjects.Image} */
	tile22;
	/** @type {Phaser.GameObjects.Image} */
	tile15;
	/** @type {Phaser.GameObjects.Image} */
	tile66;
	/** @type {Phaser.GameObjects.Image} */
	tile77;
	/** @type {Phaser.GameObjects.Image} */
	tile76;
	/** @type {Phaser.GameObjects.Image} */
	tile75;
	/** @type {Phaser.GameObjects.Image} */
	tile71;
	/** @type {Phaser.GameObjects.Image} */
	tile61;
	/** @type {Phaser.GameObjects.Image} */
	tile62;
	/** @type {Phaser.GameObjects.Image} */
	tile68;
	/** @type {Phaser.GameObjects.Image} */
	tile69;
	/** @type {Phaser.GameObjects.Image} */
	tile64;
	/** @type {Phaser.GameObjects.Image} */
	tile63;
	/** @type {Phaser.GameObjects.Image} */
	tile67;
	/** @type {Phaser.GameObjects.Image} */
	tile78;
	/** @type {Phaser.GameObjects.Image} */
	tile79;
	/** @type {Phaser.GameObjects.Image} */
	tile74;
	/** @type {Phaser.GameObjects.Image} */
	tile73;
	/** @type {Phaser.GameObjects.Image} */
	tile72;
	/** @type {Phaser.GameObjects.Image} */
	tile65;
	/** @type {Phaser.GameObjects.Layer} */
	layer_1;
	/** @type {Phaser.GameObjects.Text} */
	inv_text_ignore;
	/** @type {Phaser.GameObjects.Image} */
	player_slot1;
	/** @type {Phaser.GameObjects.Image} */
	player_slot2;
	/** @type {Phaser.GameObjects.Image} */
	player_slot3;
	/** @type {Phaser.GameObjects.Image} */
	player_slot5;
	/** @type {Phaser.GameObjects.Image} */
	player_slot4;
	/** @type {Phaser.GameObjects.Text} */
	player1;
	/** @type {Phaser.GameObjects.Text} */
	player2;
	/** @type {Phaser.GameObjects.Image} */
	rambow_sprite_inv;
	/** @type {Phaser.GameObjects.Image} */
	gipio_sprite_inv;
	/** @type {Phaser.GameObjects.Image} */
	decibelle_sprite_inv;
	/** @type {Phaser.GameObjects.Image} */
	rommy_sprite_inv;
	/** @type {Phaser.GameObjects.Text} */
	inv_rambow_number;
	/** @type {Phaser.GameObjects.Text} */
	inv_elventito_number;
	/** @type {Phaser.GameObjects.Text} */
	inv_gipio_number;
	/** @type {Phaser.GameObjects.Text} */
	inv_decibelle_number;
	/** @type {Phaser.GameObjects.Text} */
	inv_rommy_number;
	/** @type {Phaser.GameObjects.Text} */
	player1_wins;
	/** @type {Phaser.GameObjects.Text} */
	player1_losses;
	/** @type {Phaser.GameObjects.Text} */
	player2_losses;
	/** @type {Phaser.GameObjects.Text} */
	player2_wins;
	/** @type {Phaser.GameObjects.Text} */
	turn;
	/** @type {Phaser.GameObjects.Image} */
	elventito_sprite_inv;
	/** @type {Phaser.GameObjects.Layer} */
	layer_2;
	/** @type {Phaser.GameObjects.Text} */
	text_char_name;
	/** @type {Phaser.GameObjects.Text} */
	text_char_stats_hp;
	/** @type {Phaser.GameObjects.Text} */
	text_char_stats_atk;
	/** @type {Phaser.GameObjects.Text} */
	text_char_stats_spd;
	/** @type {Phaser.GameObjects.Text} */
	text_char_stats_range;
	/** @type {Phaser.GameObjects.Text} */
	text_char_stats_target;
	/** @type {Phaser.GameObjects.Text} */
	text_char_desc;
	/** @type {Phaser.GameObjects.Layer} */
	layer_3;
	/** @type {Phaser.GameObjects.Layer} */
	layer_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_71;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_61;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_51;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_31;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_21;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_11;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_41;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_72;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_42;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_12;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_22;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_32;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_52;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_62;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_73;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_43;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_13;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_23;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_33;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_53;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_63;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_76;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_46;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_16;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_26;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_36;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_56;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_66;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_65;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_55;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_35;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_25;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_15;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_45;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_75;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_44;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_14;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_24;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_34;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_54;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_64;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_74;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_79;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_49;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_19;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_29;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_39;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_59;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_69;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_68;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_58;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_38;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_28;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_18;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_48;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_78;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_47;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_17;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_27;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_37;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_57;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_67;
	/** @type {Phaser.GameObjects.Rectangle} */
	moveOrRange_square_77;
	/** @type {Prefab} */
	place_square_1_1;
	/** @type {Prefab} */
	place_square_2_1;
	/** @type {Prefab} */
	place_square_3_1;
	/** @type {Prefab} */
	place_square_5_1;
	/** @type {Prefab} */
	place_square_6_1;
	/** @type {Prefab} */
	place_square_7_1;
	/** @type {Prefab} */
	place_square_1_2;
	/** @type {Prefab} */
	place_square_7_2;
	/** @type {Prefab} */
	place_square_6_2;
	/** @type {Prefab} */
	place_square_5_2;
	/** @type {Prefab} */
	place_square_3_2;
	/** @type {Prefab} */
	place_square_2_2;
	/** @type {Phaser.GameObjects.Layer} */
	layer_5;
	/** @type {Phaser.GameObjects.Image[]} */
	listOfTiles;
	/** @type {Prefab[]} */
	place_squares;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	moreOrRange_tiles;
	/** @type {Array<any>} */
	boardCharacters;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		// This generates a map with 7x9 tiles.
		// this.generateMap(7,9);

		this.editorCreate();

		// Sync the game state every 2 seconds
		var TIME_BETWEEN_SYNC = 2000;

		this.moreOrRange_tiles.forEach((square) => {
			square.on("pointerdown", () => {
			console.log(square.name + "clicked");
			});
		})

		this.rambow_sprite_inv.on("pointerdown", () => {
			this.regginFunction(1)
			console.log("clicked on rambow_sprite_inv: " + selectedChar);
		});

		this.elventito_sprite_inv.on("pointerdown", () => {		
			this.regginFunction(2)
			console.log("clicked on elventito_sprite: " + selectedChar);
		});

		this.gipio_sprite_inv.on("pointerdown", () => {
			this.regginFunction(3)
			console.log("clicked on gipio_sprite_inv: " + selectedChar);
		});

		this.decibelle_sprite_inv.on("pointerdown", () => {
			this.regginFunction(4)
			console.log("clicked on decibelle_sprite_inv " + selectedChar);
		});

		this.rommy_sprite_inv.on("pointerdown", () => {
			this.regginFunction(5)
			console.log("clicked on rommy_sprite_inv " + selectedChar);
		});

		this.place_squares.forEach((tile) => {
			tile.on("pointerdown", () => {
			console.log(tile.name + " clicked");

			var whiteSquare = this.children.list[this.children.list.length - 1]

			for (let i = 0; i < whiteSquare.length; i++){

				// var whiteSquare = whiteSquare[i];
				whiteSquare.list[i].visible = false;
			}

			var tileY = null
			if (tile.y == 180) {
				tileY = 1
			} else if (tile.y == 240) {
				tileY = 2
			} else if (tile.y == 300) {
				tileY = 3
			} else if (tile.y == 420) {
				tileY = 5
			} else if (tile.y == 480) {
				tileY = 6
			} else if (tile.y == 540) {
				tileY = 7
			}

			console.log("whiteSquare.y: " + tile.y)
			console.log("tileY: " + tileY)
			this.updatePlacement(selectedChar, tileY);
			selectedChar = null;
			});
		});

		this.updateMatchState(5);

		// call function every 2 seconds (TIME_BETWEEN_SYNC milliseconds)
		setInterval(() => {
			this.getGamePlayerState();
			this.getGameInvState();
			this.getGameTurnState();
			this.getMPC();
			this.boardCharacters();
		}, TIME_BETWEEN_SYNC)
	}

	//set the placement squares visible or not
	regginFunction(charID) {
		console.log("reggin selectedChar: " + selectedChar)
		var whiteSquare = this.children.list[this.children.list.length - 1];

		if(selectedChar == charID){
			for (let i = 0; i < whiteSquare.length; i++){
				whiteSquare.list[i].visible = false;
			}
			selectedChar = null
		}else{
			for (let i = 0; i < whiteSquare.length; i++){
				whiteSquare.list[i].visible = true;
			}
			selectedChar = charID
		}
	}

	boardCharacters() {
		console.log("mafalda :" , list)
		this.boardCharacters.forEach((char) => {
			// char.setInteractive();
			console.log("ola")
			char.on("pointerdown", () => {
			// console.log(char.name + " pressed");

			var character = this.children.list[this.children.list.length - 1]

			for (let i = 0; i < character.length; i++){
				console.log("not sure about this")
			}

			var charY = null
			if (char.y == 180) {
				charY = 1
			} else if (char.y == 240) {
				charY = 2
			} else if (char.y == 300) {
				charY = 3
			} else if (char.x == 360) {
				charY = 4
			} else if (char.y == 420) {
				charY = 5
			} else if (char.y == 480) {
				charY = 6
			} else if (char.y == 540) {
				charY = 7
			}

			var charX = null
			if (char.x == 400) {
				charX = 1
			} else if (char.x == 460) {
				charX = 2
			} else if (char.x == 520) {
				charX = 3
			} else if (char.x == 580) {
				charX = 4
			} else if (char.x == 640) {
				charX = 5
			} else if (char.x == 700) {
				charX = 6
			} else if (char.x == 760) {
				charX = 7
			} else if (char.x == 820) {
				charX = 8
			} else if (char.x == 880) {
				charX = 9
			}

			console.log("char.x: " + char.x);
			console.log("charY: " + charY);
			})
		});
	}

	updatePlacement(selectedChar, tileY) {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					console.log(data);
				}
			}

			console.log("selectedChar, tileY: " + selectedChar + " " + tileY)
			// Send a PUT request to the server to place a character on the board
			xhttp.open("PUT", "/placement/place/" + selectedChar + "/" + tileY, true);
			xhttp.send();
	}

	updateMatchState(stateNumber) {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					console.log(data);
				}
			}
			// Send a PUT request to the server to change all info about a specific match
			xhttp.open("PUT", "/match/updateMatchState/" + stateNumber, true);
			xhttp.send();
	}

	getGamePlayerState() {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					console.log(data);

					if (data.length == 0){
						console.log("Oopsi doopsi, nao devia acontecer --by prof. Cesar")
						return;
					}

				if (data.length > 0){
					var player1Name = data[0].player_username
					var player1Wins = "Wins: " + data[0].player_wins
					var player1Losses = "Losses: " + data[0].player_losses

					console.log("player1Name:" + player1Name);
					console.log("player1Wins:" + player1Wins);
					console.log("player1Losses:" + player1Losses);

					this.player1.text = player1Name;
					this.player1_losses.text = player1Losses;
					this.player1_wins.text = player1Wins;
				}

				if (data.length > 1) {
					// Get the player stats from the response
					var player2Name = data[1].player_username
					var player2Wins = "Wins: " + data[1].player_wins
					var player2Losses = "Losses: " + data[1].player_losses

					// Set the player stats in the game
					this.player2.text = player2Name;
					this.player2_wins.text = player2Wins;
					this.player2_losses.text = player2Losses;
				}

					// // !!! If the tiles were added manually in the editor, you can use the following code:
					// this.tile1.setTexture("character_rambow_blue");
					// this.tile8.setTexture("character_decibelle_red");

					// // !!! If the tiles were added dynamically, you can use the following code:
					// // Cleans the previous position of the characters
					// this.tiles[(this.char1_posX-1)  + (this.char1_posY-1) * 7].setTexture("empty");
					// this.tiles[(this.char2_posX-1)  + (this.char2_posY-1) * 7].setTexture("empty");

					// // Move the characters
					// this.char1_posX++;
					// if (this.char1_posX > 7)
					// 	this.char1_posX = 1;
					// this.char2_posX--;
					// if (this.char2_posX < 1)
					// 	this.char2_posX = 7;

					// // Set the new position of the characters
					// this.tiles[(this.char1_posX-1)  + (this.char1_posY-1) * 7].setTexture("character_rambow_blue");
					// this.tiles[(this.char2_posX-1)  + (this.char2_posY-1) * 7].setTexture("character_decibelle_red");
				}
			};

			// Send a GET request to the server to get info about both players in a certain match
			xhttp.open("GET", "/match/getData", true);
			xhttp.send();
	}

	getGameTurnState() {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					console.log(data);

					var turn = data[0].match_turn

					console.log("turn: " + turn)

					this.turn.text = "Turn: " + turn;
				}
			}

			// Send a GET request to the server to all info about a specific match
			xhttp.open("GET", "/match/thisMatch", true);
			xhttp.send();
	}

	getMPC() {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					console.log(data);
					console.log("IM HERE!!!")

					// this.boardCharacters.forEach(function (c) { c.kill(); });

					this.boardCharacters.forEach(char => {
						console.log("char: " + char);
						char.destroy();  // Destroy the object (all objects inside this list, in this case)
					});						
					this.boardCharacters = []; // Clear the array

					for(var i = 0; i < data.length; i++){
						console.log("there's a friend inside this for loop")

						var charID = data[i].mpc_cha_id
						// var currentHP = data[0].cha_cur_hp
						var charX = data[i].mpc_tile_x
						var charY = data[i].mpc_tile_y

						var teamSide = data[i].match_player1_id
						var teamOwner = data[i].mpc_mp_id

						var char = {}
						if (charY == 1) {
							char.y = 180
						} else if (charY == 2) {
							char.y = 240
						} else if (charY == 3) {
							char.y = 300
						} else if (charY == 4) {
							char.y = 360
						} else if (charY == 5) {
							char.y = 420
						} else if (charY == 6) {
							char.y = 480
						} else if (charY == 7) {
							char.y = 540
						}

						if (charX == 1) {
							char.x = 400
						} else if (charX == 2) {
							char.x = 460
						} else if (charX == 3) {
							char.x = 520
						} else if (charX == 4) {
							char.x = 580
						} else if (charX == 5) {
							char.x = 640
						} else if (charX == 6) {
							char.x = 700
						} else if (charX == 7) {
							char.x = 760
						} else if (charX == 8) {
							char.x = 820
						} else if (charX == 9) {
							char.x = 880
						}

						var instance;
						if (charID == 1) {
							instance = this.add.image(char.x, char.y, "rambow_sprite");
						} else if (charID == 2) {
							instance = this.add.image(char.x, char.y, "elventito_sprite");
						} else if (charID == 3) {
							instance = this.add.image(char.x, char.y, "gipio_sprite");
						} else if (charID == 4) {
							instance = this.add.image(char.x, char.y, "decibelle_sprite");
						} else if (charID == 5) {
							instance = this.add.image(char.x, char.y, "rommy_sprite");
						}

						if (instance) {
							instance.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
							this.layer_2.add(instance);
							list = this.boardCharacters
							list.push(instance);
							console.log("lista: " , list)
							console.log("asasasasas" + instance)
							console.log("HELLO " + this.boardCharacters.push)
							console.log(instance + " " + selectedChar);
						}

						console.log("char: " + char.x + " " + char.y);
						console.log("boardCharacters: " + this.boardCharacters.length)

						if (selectedChar != null) {
							this.text_char_stats_hp = "HP: " + data[0].cha_cur_hp // NOTE: THIS NEEDS TO BE CHANGED!!!
						} else {
							this.text_char_stats_hp = "HP: ---"
						}
					}
				}
			}

			// Send a GET request to the server to all info about a specific match
			xhttp.open("GET", "/match/thisMPC", true);
			xhttp.send();
	}

	getGameInvState() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.responseText)

				// Parse the JSON response
				var data = JSON.parse(xhttp.responseText);
				console.log(data);

				var invRambow = data[0].n_rambow
				var invElVentito = data[0].n_elventito
				var invGipio = data[0].n_gipio
				var invDecibelle = data[0].n_decibelle
				var invRommy = data[0].n_rommy

				console.log("invRambow: " + invRambow)

				this.inv_rambow_number.text = invRambow;
				this.inv_elventito_number.text = invElVentito;
				this.inv_gipio_number.text = invGipio;
				this.inv_decibelle_number.text = invDecibelle;
				this.inv_rommy_number.text = invRommy;

				// NOTE: THIS DOESNT WORK RIGHT NOW!!!
				if (selectedChar == 1) {
					this.text_char_name.text = "Rambow"

					this.text_char_stats_atk.text = "ATK: 2"
					this.text_char_stats_spd.text = "SPD: 2"
					this.text_char_stats_range.text = "Range: 2"
					this.text_char_stats_target.text = "Target: Single"

					this.text_char_desc.text = "ram desc, add later"
				} else if (selectedChar == 2) {
					this.text_char_name.text = "El Ventito"

					this.text_char_stats_atk.text = "ATK: 0 (Push enemies back!)"
					this.text_char_stats_spd.text = "SPD: 1"
					this.text_char_stats_range.text = "Range: 1"
					this.text_char_stats_target.text = "Target: Single"

					this.text_char_desc.text = "fan desc, add later"
				} else if (selectedChar == 2) {
					this.text_char_name.text = "Gipio"

					this.text_char_stats_atk.text = "ATK: 1"
					this.text_char_stats_spd.text = "SPD: 2"
					this.text_char_stats_range.text = "Range: 3"
					this.text_char_stats_target.text = "Target: Single"

					this.text_char_desc.text = "gpu desc, add later"
				} else if (selectedChar == 2) {
					this.text_char_name.text = "Decibelle"

					this.text_char_stats_atk = "ATK: 1"
					this.text_char_stats_spd = "SPD: 1"
					this.text_char_stats_range = "Range: 2"
					this.text_char_stats_target = "Target: Area"

					this.text_char_desc = "sound card desc, add later"
				} else if (selectedChar == 2) {
					this.text_char_name = "Rommy"

					this.text_char_stats_atk = "ATK: 2"
					this.text_char_stats_spd = "SPD: 4"
					this.text_char_stats_range = "Range: 1"
					this.text_char_stats_target = "Target: Single"

					this.text_char_desc = "rom desc, add later"
				} else {
					this.text_char_name = "-----"

					this.text_char_stats_atk = "ATK: ---"
					this.text_char_stats_spd = "SPD: ---"
					this.text_char_stats_range = "Range: ---"
					this.text_char_stats_target = "Target: ---"

					this.text_char_desc = "-----"
				}
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
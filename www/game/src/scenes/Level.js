// You can write more code here ( Global variables - should not be used.)
var selectedChar = null
var list = null

var teamLeft = null
var teamOwner = null

var turn = 0



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

		// hw_bg
		const hw_bg = this.add.image(640, 359, "hw_bg");

		// layer_1
		const layer_1 = this.add.layer();

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

		// layer_4
		const layer_4 = this.add.layer();

		// inv_text_ignore
		const inv_text_ignore = this.add.text(190, 180, "", {});
		inv_text_ignore.setOrigin(0.5, 0.5);
		inv_text_ignore.text = "Inventory";
		inv_text_ignore.setStyle({ "align": "center", "fontSize": "30px" });
		layer_4.add(inv_text_ignore);

		// player_slot1
		const player_slot1 = this.add.image(190, 235, "empty");
		player_slot1.scaleX = 1.3;
		player_slot1.scaleY = 1.3;
		layer_4.add(player_slot1);

		// player_slot2
		const player_slot2 = this.add.image(190, 310, "empty");
		player_slot2.scaleX = 1.3;
		player_slot2.scaleY = 1.3;
		layer_4.add(player_slot2);

		// player_slot3
		const player_slot3 = this.add.image(190, 385, "empty");
		player_slot3.scaleX = 1.3;
		player_slot3.scaleY = 1.3;
		layer_4.add(player_slot3);

		// player_slot5
		const player_slot5 = this.add.image(190, 535, "empty");
		player_slot5.scaleX = 1.3;
		player_slot5.scaleY = 1.3;
		layer_4.add(player_slot5);

		// player_slot4
		const player_slot4 = this.add.image(190, 460, "empty");
		player_slot4.scaleX = 1.3;
		player_slot4.scaleY = 1.3;
		layer_4.add(player_slot4);

		// player1
		const player1 = this.add.text(360, 600, "", {});
		player1.setOrigin(0.5, 0.5);
		player1.text = "Your Name...";
		player1.setStyle({ "align": "center", "fontSize": "35px" });
		layer_4.add(player1);

		// player2
		const player2 = this.add.text(920, 600, "", {});
		player2.setOrigin(0.5, 0.5);
		player2.text = "Waiting for Player 2...";
		player2.setStyle({ "align": "center", "fontSize": "35px" });
		layer_4.add(player2);

		// rambow_sprite_inv
		const rambow_sprite_inv = this.add.image(190, 235, "rambow_sprite");
		rambow_sprite_inv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_4.add(rambow_sprite_inv);

		// gipio_sprite_inv
		const gipio_sprite_inv = this.add.image(190, 385, "gipio_sprite");
		gipio_sprite_inv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_4.add(gipio_sprite_inv);

		// decibelle_sprite_inv
		const decibelle_sprite_inv = this.add.image(190, 460, "decibelle_sprite");
		decibelle_sprite_inv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_4.add(decibelle_sprite_inv);

		// rommy_sprite_inv
		const rommy_sprite_inv = this.add.image(190, 535, "rommy_sprite");
		rommy_sprite_inv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_4.add(rommy_sprite_inv);

		// inv_rambow_number
		const inv_rambow_number = this.add.text(250, 240, "", {});
		inv_rambow_number.setOrigin(0.5, 0.5);
		inv_rambow_number.text = "0";
		inv_rambow_number.setStyle({ "fontSize": "30px" });
		layer_4.add(inv_rambow_number);

		// inv_elventito_number
		const inv_elventito_number = this.add.text(250, 310, "", {});
		inv_elventito_number.setOrigin(0.5, 0.5);
		inv_elventito_number.text = "0";
		inv_elventito_number.setStyle({ "fontSize": "30px" });
		layer_4.add(inv_elventito_number);

		// inv_gipio_number
		const inv_gipio_number = this.add.text(250, 385, "", {});
		inv_gipio_number.setOrigin(0.5, 0.5);
		inv_gipio_number.text = "0";
		inv_gipio_number.setStyle({ "fontSize": "30px" });
		layer_4.add(inv_gipio_number);

		// inv_decibelle_number
		const inv_decibelle_number = this.add.text(250, 460, "", {});
		inv_decibelle_number.setOrigin(0.5, 0.5);
		inv_decibelle_number.text = "0";
		inv_decibelle_number.setStyle({ "fontSize": "30px" });
		layer_4.add(inv_decibelle_number);

		// inv_rommy_number
		const inv_rommy_number = this.add.text(250, 535, "", {});
		inv_rommy_number.setOrigin(0.5, 0.5);
		inv_rommy_number.text = "0";
		inv_rommy_number.setStyle({ "fontSize": "30px" });
		layer_4.add(inv_rommy_number);

		// player1_wins
		const player1_wins = this.add.text(360, 645, "", {});
		player1_wins.setOrigin(0.5, 0.5);
		player1_wins.text = "Your Wins...";
		player1_wins.setStyle({ "align": "center", "fontSize": "30px" });
		layer_4.add(player1_wins);

		// player1_losses
		const player1_losses = this.add.text(360, 690, "", {});
		player1_losses.setOrigin(0.5, 0.5);
		player1_losses.text = "Your Losses:...";
		player1_losses.setStyle({ "align": "center", "fontSize": "30px" });
		layer_4.add(player1_losses);

		// player2_losses
		const player2_losses = this.add.text(920, 690, "", {});
		player2_losses.setOrigin(0.5, 0.5);
		player2_losses.text = "Opponent's Losses...";
		player2_losses.setStyle({ "align": "center", "fontSize": "30px" });
		layer_4.add(player2_losses);

		// player2_wins
		const player2_wins = this.add.text(920, 645, "", {});
		player2_wins.setOrigin(0.5, 0.5);
		player2_wins.text = "Opponent's Wins...";
		player2_wins.setStyle({ "align": "center", "fontSize": "30px" });
		layer_4.add(player2_wins);

		// turn
		const turn = this.add.text(640, 125, "", {});
		turn.setOrigin(0.5, 0.5);
		turn.text = "Turn: 0";
		turn.setStyle({ "align": "center", "fontSize": "35px" });
		layer_4.add(turn);

		// elventito_sprite_inv
		const elventito_sprite_inv = this.add.image(190, 310, "elventito_sprite");
		elventito_sprite_inv.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
		layer_4.add(elventito_sprite_inv);

		// stateText
		const stateText = this.add.text(149, -75, "", {});
		layer_4.add(stateText);

		// layer_2
		const layer_2 = this.add.layer();

		// layer_3
		const layer_3 = this.add.layer();

		// rec_desc_hover
		const rec_desc_hover = this.add.rectangle(1090, 360, 128, 128);
		rec_desc_hover.scaleX = 2.1;
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

		// layer_5
		const layer_5 = this.add.layer();

		// place_square_1_1
		const place_square_1_1 = this.add.rectangle(400, 180, 51, 51);
		place_square_1_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_1_1.visible = false;
		place_square_1_1.isFilled = true;
		place_square_1_1.fillAlpha = 0.5;
		layer_5.add(place_square_1_1);

		// place_square_2_1
		const place_square_2_1 = this.add.rectangle(400, 240, 51, 51);
		place_square_2_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_2_1.visible = false;
		place_square_2_1.isFilled = true;
		place_square_2_1.fillAlpha = 0.5;
		layer_5.add(place_square_2_1);

		// place_square_3_1
		const place_square_3_1 = this.add.rectangle(400, 300, 51, 51);
		place_square_3_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_3_1.visible = false;
		place_square_3_1.isFilled = true;
		place_square_3_1.fillAlpha = 0.5;
		layer_5.add(place_square_3_1);

		// place_square_5_1
		const place_square_5_1 = this.add.rectangle(400, 420, 51, 51);
		place_square_5_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_5_1.visible = false;
		place_square_5_1.isFilled = true;
		place_square_5_1.fillAlpha = 0.5;
		layer_5.add(place_square_5_1);

		// place_square_6_1
		const place_square_6_1 = this.add.rectangle(400, 480, 51, 51);
		place_square_6_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_6_1.visible = false;
		place_square_6_1.isFilled = true;
		place_square_6_1.fillAlpha = 0.5;
		layer_5.add(place_square_6_1);

		// place_square_7_1
		const place_square_7_1 = this.add.rectangle(400, 540, 51, 51);
		place_square_7_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_7_1.visible = false;
		place_square_7_1.isFilled = true;
		place_square_7_1.fillAlpha = 0.5;
		layer_5.add(place_square_7_1);

		// layer_7
		const layer_7 = this.add.layer();

		// place_square_1_2
		const place_square_1_2 = this.add.rectangle(880, 180, 51, 51);
		place_square_1_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_1_2.visible = false;
		place_square_1_2.isFilled = true;
		place_square_1_2.fillAlpha = 0.5;
		layer_7.add(place_square_1_2);

		// place_square_7_2
		const place_square_7_2 = this.add.rectangle(880, 540, 51, 51);
		place_square_7_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_7_2.visible = false;
		place_square_7_2.isFilled = true;
		place_square_7_2.fillAlpha = 0.5;
		layer_7.add(place_square_7_2);

		// place_square_6_2
		const place_square_6_2 = this.add.rectangle(880, 480, 51, 51);
		place_square_6_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_6_2.visible = false;
		place_square_6_2.isFilled = true;
		place_square_6_2.fillAlpha = 0.5;
		layer_7.add(place_square_6_2);

		// place_square_5_2
		const place_square_5_2 = this.add.rectangle(880, 420, 51, 51);
		place_square_5_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_5_2.visible = false;
		place_square_5_2.isFilled = true;
		place_square_5_2.fillAlpha = 0.5;
		layer_7.add(place_square_5_2);

		// place_square_3_2
		const place_square_3_2 = this.add.rectangle(880, 300, 51, 51);
		place_square_3_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_3_2.visible = false;
		place_square_3_2.isFilled = true;
		place_square_3_2.fillAlpha = 0.5;
		layer_7.add(place_square_3_2);

		// place_square_2_2
		const place_square_2_2 = this.add.rectangle(880, 240, 51, 51);
		place_square_2_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		place_square_2_2.visible = false;
		place_square_2_2.isFilled = true;
		place_square_2_2.fillAlpha = 0.5;
		layer_7.add(place_square_2_2);

		// layer_6
		const layer_6 = this.add.layer();

		// moveOrRange_square_71
		const moveOrRange_square_71 = this.add.rectangle(400, 540, 51, 51);
		moveOrRange_square_71.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_71.visible = false;
		moveOrRange_square_71.isFilled = true;
		moveOrRange_square_71.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_71);

		// moveOrRange_square_61
		const moveOrRange_square_61 = this.add.rectangle(400, 480, 51, 51);
		moveOrRange_square_61.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_61.visible = false;
		moveOrRange_square_61.isFilled = true;
		moveOrRange_square_61.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_61);

		// moveOrRange_square_51
		const moveOrRange_square_51 = this.add.rectangle(400, 420, 51, 51);
		moveOrRange_square_51.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_51.visible = false;
		moveOrRange_square_51.isFilled = true;
		moveOrRange_square_51.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_51);

		// moveOrRange_square_31
		const moveOrRange_square_31 = this.add.rectangle(400, 300, 51, 51);
		moveOrRange_square_31.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_31.visible = false;
		moveOrRange_square_31.isFilled = true;
		moveOrRange_square_31.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_31);

		// moveOrRange_square_21
		const moveOrRange_square_21 = this.add.rectangle(400, 240, 51, 51);
		moveOrRange_square_21.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_21.visible = false;
		moveOrRange_square_21.isFilled = true;
		moveOrRange_square_21.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_21);

		// moveOrRange_square_11
		const moveOrRange_square_11 = this.add.rectangle(400, 180, 51, 51);
		moveOrRange_square_11.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_11.visible = false;
		moveOrRange_square_11.isFilled = true;
		moveOrRange_square_11.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_11);

		// moveOrRange_square_41
		const moveOrRange_square_41 = this.add.rectangle(400, 360, 51, 51);
		moveOrRange_square_41.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_41.visible = false;
		moveOrRange_square_41.isFilled = true;
		moveOrRange_square_41.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_41);

		// moveOrRange_square_72
		const moveOrRange_square_72 = this.add.rectangle(460, 540, 51, 51);
		moveOrRange_square_72.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_72.visible = false;
		moveOrRange_square_72.isFilled = true;
		moveOrRange_square_72.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_72);

		// moveOrRange_square_42
		const moveOrRange_square_42 = this.add.rectangle(460, 360, 51, 51);
		moveOrRange_square_42.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_42.visible = false;
		moveOrRange_square_42.isFilled = true;
		moveOrRange_square_42.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_42);

		// moveOrRange_square_12
		const moveOrRange_square_12 = this.add.rectangle(460, 180, 51, 51);
		moveOrRange_square_12.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_12.visible = false;
		moveOrRange_square_12.isFilled = true;
		moveOrRange_square_12.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_12);

		// moveOrRange_square_22
		const moveOrRange_square_22 = this.add.rectangle(460, 240, 51, 51);
		moveOrRange_square_22.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_22.visible = false;
		moveOrRange_square_22.isFilled = true;
		moveOrRange_square_22.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_22);

		// moveOrRange_square_32
		const moveOrRange_square_32 = this.add.rectangle(460, 300, 51, 51);
		moveOrRange_square_32.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_32.visible = false;
		moveOrRange_square_32.isFilled = true;
		moveOrRange_square_32.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_32);

		// moveOrRange_square_52
		const moveOrRange_square_52 = this.add.rectangle(460, 420, 51, 51);
		moveOrRange_square_52.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_52.visible = false;
		moveOrRange_square_52.isFilled = true;
		moveOrRange_square_52.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_52);

		// moveOrRange_square_62
		const moveOrRange_square_62 = this.add.rectangle(460, 480, 51, 51);
		moveOrRange_square_62.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_62.visible = false;
		moveOrRange_square_62.isFilled = true;
		moveOrRange_square_62.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_62);

		// moveOrRange_square_73
		const moveOrRange_square_73 = this.add.rectangle(520, 540, 51, 51);
		moveOrRange_square_73.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_73.visible = false;
		moveOrRange_square_73.isFilled = true;
		moveOrRange_square_73.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_73);

		// moveOrRange_square_43
		const moveOrRange_square_43 = this.add.rectangle(520, 360, 51, 51);
		moveOrRange_square_43.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_43.visible = false;
		moveOrRange_square_43.isFilled = true;
		moveOrRange_square_43.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_43);

		// moveOrRange_square_13
		const moveOrRange_square_13 = this.add.rectangle(520, 180, 51, 51);
		moveOrRange_square_13.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_13.visible = false;
		moveOrRange_square_13.isFilled = true;
		moveOrRange_square_13.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_13);

		// moveOrRange_square_23
		const moveOrRange_square_23 = this.add.rectangle(520, 240, 51, 51);
		moveOrRange_square_23.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_23.visible = false;
		moveOrRange_square_23.isFilled = true;
		moveOrRange_square_23.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_23);

		// moveOrRange_square_33
		const moveOrRange_square_33 = this.add.rectangle(520, 300, 51, 51);
		moveOrRange_square_33.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_33.visible = false;
		moveOrRange_square_33.isFilled = true;
		moveOrRange_square_33.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_33);

		// moveOrRange_square_53
		const moveOrRange_square_53 = this.add.rectangle(520, 420, 51, 51);
		moveOrRange_square_53.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_53.visible = false;
		moveOrRange_square_53.isFilled = true;
		moveOrRange_square_53.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_53);

		// moveOrRange_square_63
		const moveOrRange_square_63 = this.add.rectangle(520, 480, 51, 51);
		moveOrRange_square_63.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_63.visible = false;
		moveOrRange_square_63.isFilled = true;
		moveOrRange_square_63.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_63);

		// moveOrRange_square_76
		const moveOrRange_square_76 = this.add.rectangle(700, 540, 51, 51);
		moveOrRange_square_76.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_76.visible = false;
		moveOrRange_square_76.isFilled = true;
		moveOrRange_square_76.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_76);

		// moveOrRange_square_46
		const moveOrRange_square_46 = this.add.rectangle(700, 360, 51, 51);
		moveOrRange_square_46.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_46.visible = false;
		moveOrRange_square_46.isFilled = true;
		moveOrRange_square_46.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_46);

		// moveOrRange_square_16
		const moveOrRange_square_16 = this.add.rectangle(700, 180, 51, 51);
		moveOrRange_square_16.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_16.visible = false;
		moveOrRange_square_16.isFilled = true;
		moveOrRange_square_16.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_16);

		// moveOrRange_square_26
		const moveOrRange_square_26 = this.add.rectangle(700, 240, 51, 51);
		moveOrRange_square_26.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_26.visible = false;
		moveOrRange_square_26.isFilled = true;
		moveOrRange_square_26.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_26);

		// moveOrRange_square_36
		const moveOrRange_square_36 = this.add.rectangle(700, 300, 51, 51);
		moveOrRange_square_36.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_36.visible = false;
		moveOrRange_square_36.isFilled = true;
		moveOrRange_square_36.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_36);

		// moveOrRange_square_56
		const moveOrRange_square_56 = this.add.rectangle(700, 420, 51, 51);
		moveOrRange_square_56.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_56.visible = false;
		moveOrRange_square_56.isFilled = true;
		moveOrRange_square_56.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_56);

		// moveOrRange_square_66
		const moveOrRange_square_66 = this.add.rectangle(700, 480, 51, 51);
		moveOrRange_square_66.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_66.visible = false;
		moveOrRange_square_66.isFilled = true;
		moveOrRange_square_66.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_66);

		// moveOrRange_square_65
		const moveOrRange_square_65 = this.add.rectangle(640, 480, 51, 51);
		moveOrRange_square_65.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_65.visible = false;
		moveOrRange_square_65.isFilled = true;
		moveOrRange_square_65.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_65);

		// moveOrRange_square_55
		const moveOrRange_square_55 = this.add.rectangle(640, 420, 51, 51);
		moveOrRange_square_55.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_55.visible = false;
		moveOrRange_square_55.isFilled = true;
		moveOrRange_square_55.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_55);

		// moveOrRange_square_35
		const moveOrRange_square_35 = this.add.rectangle(640, 300, 51, 51);
		moveOrRange_square_35.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_35.visible = false;
		moveOrRange_square_35.isFilled = true;
		moveOrRange_square_35.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_35);

		// moveOrRange_square_25
		const moveOrRange_square_25 = this.add.rectangle(640, 240, 51, 51);
		moveOrRange_square_25.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_25.visible = false;
		moveOrRange_square_25.isFilled = true;
		moveOrRange_square_25.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_25);

		// moveOrRange_square_15
		const moveOrRange_square_15 = this.add.rectangle(640, 180, 51, 51);
		moveOrRange_square_15.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_15.visible = false;
		moveOrRange_square_15.isFilled = true;
		moveOrRange_square_15.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_15);

		// moveOrRange_square_45
		const moveOrRange_square_45 = this.add.rectangle(640, 360, 51, 51);
		moveOrRange_square_45.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_45.visible = false;
		moveOrRange_square_45.isFilled = true;
		moveOrRange_square_45.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_45);

		// moveOrRange_square_75
		const moveOrRange_square_75 = this.add.rectangle(640, 540, 51, 51);
		moveOrRange_square_75.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_75.visible = false;
		moveOrRange_square_75.isFilled = true;
		moveOrRange_square_75.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_75);

		// moveOrRange_square_44
		const moveOrRange_square_44 = this.add.rectangle(580, 360, 51, 51);
		moveOrRange_square_44.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_44.visible = false;
		moveOrRange_square_44.isFilled = true;
		moveOrRange_square_44.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_44);

		// moveOrRange_square_14
		const moveOrRange_square_14 = this.add.rectangle(580, 180, 51, 51);
		moveOrRange_square_14.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_14.visible = false;
		moveOrRange_square_14.isFilled = true;
		moveOrRange_square_14.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_14);

		// moveOrRange_square_24
		const moveOrRange_square_24 = this.add.rectangle(580, 240, 51, 51);
		moveOrRange_square_24.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_24.visible = false;
		moveOrRange_square_24.isFilled = true;
		moveOrRange_square_24.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_24);

		// moveOrRange_square_34
		const moveOrRange_square_34 = this.add.rectangle(580, 300, 51, 51);
		moveOrRange_square_34.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_34.visible = false;
		moveOrRange_square_34.isFilled = true;
		moveOrRange_square_34.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_34);

		// moveOrRange_square_54
		const moveOrRange_square_54 = this.add.rectangle(580, 420, 51, 51);
		moveOrRange_square_54.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_54.visible = false;
		moveOrRange_square_54.isFilled = true;
		moveOrRange_square_54.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_54);

		// moveOrRange_square_64
		const moveOrRange_square_64 = this.add.rectangle(580, 480, 51, 51);
		moveOrRange_square_64.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_64.visible = false;
		moveOrRange_square_64.isFilled = true;
		moveOrRange_square_64.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_64);

		// moveOrRange_square_74
		const moveOrRange_square_74 = this.add.rectangle(580, 540, 51, 51);
		moveOrRange_square_74.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_74.visible = false;
		moveOrRange_square_74.isFilled = true;
		moveOrRange_square_74.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_74);

		// moveOrRange_square_79
		const moveOrRange_square_79 = this.add.rectangle(880, 540, 51, 51);
		moveOrRange_square_79.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_79.visible = false;
		moveOrRange_square_79.isFilled = true;
		moveOrRange_square_79.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_79);

		// moveOrRange_square_49
		const moveOrRange_square_49 = this.add.rectangle(880, 360, 51, 51);
		moveOrRange_square_49.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_49.visible = false;
		moveOrRange_square_49.isFilled = true;
		moveOrRange_square_49.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_49);

		// moveOrRange_square_19
		const moveOrRange_square_19 = this.add.rectangle(880, 180, 51, 51);
		moveOrRange_square_19.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_19.visible = false;
		moveOrRange_square_19.isFilled = true;
		moveOrRange_square_19.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_19);

		// moveOrRange_square_29
		const moveOrRange_square_29 = this.add.rectangle(880, 240, 51, 51);
		moveOrRange_square_29.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_29.visible = false;
		moveOrRange_square_29.isFilled = true;
		moveOrRange_square_29.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_29);

		// moveOrRange_square_39
		const moveOrRange_square_39 = this.add.rectangle(880, 300, 51, 51);
		moveOrRange_square_39.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_39.visible = false;
		moveOrRange_square_39.isFilled = true;
		moveOrRange_square_39.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_39);

		// moveOrRange_square_59
		const moveOrRange_square_59 = this.add.rectangle(880, 420, 51, 51);
		moveOrRange_square_59.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_59.visible = false;
		moveOrRange_square_59.isFilled = true;
		moveOrRange_square_59.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_59);

		// moveOrRange_square_69
		const moveOrRange_square_69 = this.add.rectangle(880, 480, 51, 51);
		moveOrRange_square_69.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_69.visible = false;
		moveOrRange_square_69.isFilled = true;
		moveOrRange_square_69.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_69);

		// moveOrRange_square_68
		const moveOrRange_square_68 = this.add.rectangle(820, 480, 51, 51);
		moveOrRange_square_68.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_68.visible = false;
		moveOrRange_square_68.isFilled = true;
		moveOrRange_square_68.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_68);

		// moveOrRange_square_58
		const moveOrRange_square_58 = this.add.rectangle(820, 420, 51, 51);
		moveOrRange_square_58.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_58.visible = false;
		moveOrRange_square_58.isFilled = true;
		moveOrRange_square_58.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_58);

		// moveOrRange_square_38
		const moveOrRange_square_38 = this.add.rectangle(820, 300, 51, 51);
		moveOrRange_square_38.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_38.visible = false;
		moveOrRange_square_38.isFilled = true;
		moveOrRange_square_38.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_38);

		// moveOrRange_square_28
		const moveOrRange_square_28 = this.add.rectangle(820, 240, 51, 51);
		moveOrRange_square_28.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_28.visible = false;
		moveOrRange_square_28.isFilled = true;
		moveOrRange_square_28.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_28);

		// moveOrRange_square_18
		const moveOrRange_square_18 = this.add.rectangle(820, 180, 51, 51);
		moveOrRange_square_18.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_18.visible = false;
		moveOrRange_square_18.isFilled = true;
		moveOrRange_square_18.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_18);

		// moveOrRange_square_48
		const moveOrRange_square_48 = this.add.rectangle(820, 360, 51, 51);
		moveOrRange_square_48.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_48.visible = false;
		moveOrRange_square_48.isFilled = true;
		moveOrRange_square_48.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_48);

		// moveOrRange_square_78
		const moveOrRange_square_78 = this.add.rectangle(820, 540, 51, 51);
		moveOrRange_square_78.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_78.visible = false;
		moveOrRange_square_78.isFilled = true;
		moveOrRange_square_78.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_78);

		// moveOrRange_square_47
		const moveOrRange_square_47 = this.add.rectangle(760, 360, 51, 51);
		moveOrRange_square_47.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_47.visible = false;
		moveOrRange_square_47.isFilled = true;
		moveOrRange_square_47.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_47);

		// moveOrRange_square_17
		const moveOrRange_square_17 = this.add.rectangle(760, 180, 51, 51);
		moveOrRange_square_17.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_17.visible = false;
		moveOrRange_square_17.isFilled = true;
		moveOrRange_square_17.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_17);

		// moveOrRange_square_27
		const moveOrRange_square_27 = this.add.rectangle(760, 240, 51, 51);
		moveOrRange_square_27.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_27.visible = false;
		moveOrRange_square_27.isFilled = true;
		moveOrRange_square_27.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_27);

		// moveOrRange_square_37
		const moveOrRange_square_37 = this.add.rectangle(760, 300, 51, 51);
		moveOrRange_square_37.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_37.visible = false;
		moveOrRange_square_37.isFilled = true;
		moveOrRange_square_37.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_37);

		// moveOrRange_square_57
		const moveOrRange_square_57 = this.add.rectangle(760, 420, 51, 51);
		moveOrRange_square_57.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_57.visible = false;
		moveOrRange_square_57.isFilled = true;
		moveOrRange_square_57.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_57);

		// moveOrRange_square_67
		const moveOrRange_square_67 = this.add.rectangle(760, 480, 51, 51);
		moveOrRange_square_67.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_67.visible = false;
		moveOrRange_square_67.isFilled = true;
		moveOrRange_square_67.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_67);

		// moveOrRange_square_77
		const moveOrRange_square_77 = this.add.rectangle(760, 540, 51, 51);
		moveOrRange_square_77.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		moveOrRange_square_77.visible = false;
		moveOrRange_square_77.isFilled = true;
		moveOrRange_square_77.fillAlpha = 0.5;
		layer_6.add(moveOrRange_square_77);

		// lists
		const listOfTiles = [tile45, tile65, tile72, tile73, tile74, tile79, tile78, tile67, tile63, tile64, tile69, tile68, tile62, tile61, tile71, tile75, tile76, tile77, tile66, tile15, tile22, tile23, tile24, tile29, tile28, tile17, tile13, tile14, tile19, tile18, tile12, tile11, tile21, tile25, tile26, tile27, tile16, tile32, tile38, tile39, tile34, tile33, tile37, tile36, tile35, tile31, tile52, tile58, tile59, tile54, tile53, tile57, tile56, tile55, tile51, tile42, tile48, tile44, tile43, tile47, tile46, tile41, tile49];
		const place_squares = [place_square_3_1, place_square_1_1, place_square_5_1, place_square_6_1, place_square_7_1, place_square_2_1, place_square_2_2, place_square_3_2, place_square_5_2, place_square_6_2, place_square_7_2, place_square_1_2];
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
		this.stateText = stateText;
		this.layer_4 = layer_4;
		this.layer_2 = layer_2;
		this.text_char_name = text_char_name;
		this.text_char_stats_hp = text_char_stats_hp;
		this.text_char_stats_atk = text_char_stats_atk;
		this.text_char_stats_spd = text_char_stats_spd;
		this.text_char_stats_range = text_char_stats_range;
		this.text_char_stats_target = text_char_stats_target;
		this.text_char_desc = text_char_desc;
		this.layer_3 = layer_3;
		this.place_square_1_1 = place_square_1_1;
		this.place_square_2_1 = place_square_2_1;
		this.place_square_3_1 = place_square_3_1;
		this.place_square_5_1 = place_square_5_1;
		this.place_square_6_1 = place_square_6_1;
		this.place_square_7_1 = place_square_7_1;
		this.layer_5 = layer_5;
		this.place_square_1_2 = place_square_1_2;
		this.place_square_7_2 = place_square_7_2;
		this.place_square_6_2 = place_square_6_2;
		this.place_square_5_2 = place_square_5_2;
		this.place_square_3_2 = place_square_3_2;
		this.place_square_2_2 = place_square_2_2;
		this.layer_7 = layer_7;
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
		this.layer_6 = layer_6;
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
	/** @type {Phaser.GameObjects.Text} */
	stateText;
	/** @type {Phaser.GameObjects.Layer} */
	layer_4;
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
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_1_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_2_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_3_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_5_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_6_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_7_1;
	/** @type {Phaser.GameObjects.Layer} */
	layer_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_1_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_7_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_6_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_5_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_3_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	place_square_2_2;
	/** @type {Phaser.GameObjects.Layer} */
	layer_7;
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
	/** @type {Phaser.GameObjects.Layer} */
	layer_6;
	/** @type {Phaser.GameObjects.Image[]} */
	listOfTiles;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	place_squares;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	moreOrRange_tiles;
	/** @type {Array<any>} */
	boardCharacters;

	/* START-USER-CODE */
	currentSelectedChar = null;
	// Write more your code here

	create() {

		// This generates a map with 7x9 tiles.
		// this.generateMap(7,9);

		this.editorCreate();

		// Sync the game state every 2 seconds
		var TIME_BETWEEN_SYNC = 2000;

		this.listOfTiles.forEach((tile) => {
			tile.on("pointerdown", () => {
				if (this.currentSelectedChar) {
					this.stateText.text = "Character Moving";
					this.moveCharacter(this.currentSelectedChar, tile);
				} else {
					console.log("No character selected");
				}
			});
		});

		this.moreOrRange_tiles.forEach((square) => {
			square.on("pointerdown", () => {
			//console.log(square.name + "clicked");

			var whiteSquare = this.children.list[this.children.list.length - 1]

			for (let i = 0; i < whiteSquare.length; i++) {

				// var whiteSquare = whiteSquare[i];
				whiteSquare.list[i].visible = false;
			}

			var tileY = this.worldToTilePosition(tile.x, tile.y).y;

			//console.log("whiteSquare.y: " + tile.y)
			//console.log("tileY: " + tileY)
			this.updatePlacement(selectedChar, tileY);
			selectedChar = null;
			});
		})

		this.rambow_sprite_inv.on("pointerdown", () => {
			this.regginFunction(1)
			//console.log("clicked on rambow_sprite_inv: " + selectedChar);
		});

		this.elventito_sprite_inv.on("pointerdown", () => {		
			this.regginFunction(2)
			//console.log("clicked on elventito_sprite: " + selectedChar);
		});

		this.gipio_sprite_inv.on("pointerdown", () => {
			this.regginFunction(3)
			//console.log("clicked on gipio_sprite_inv: " + selectedChar);
		});

		this.decibelle_sprite_inv.on("pointerdown", () => {
			this.regginFunction(4)
			//console.log("clicked on decibelle_sprite_inv " + selectedChar);
		});

		this.rommy_sprite_inv.on("pointerdown", () => {
			this.regginFunction(5)
			//console.log("clicked on rommy_sprite_inv " + selectedChar);
		});

		this.place_squares.forEach((tile) => {
			tile.on("pointerdown", () => {
			//console.log(tile.name + " clicked");

			var whiteSquare = this.children.list[this.children.list.length - 1]

			for (let i = 0; i < whiteSquare.length; i++){

				// var whiteSquare = whiteSquare[i];
				whiteSquare.list[i].visible = false;
			}

			var tilePosition = this.worldToTilePosition(tile.x, tile.y);

			console.log(tilePosition)
			this.updatePlacement(selectedChar, tilePosition.y);
			selectedChar = null;
			});
		});

		this.updateMatchState(5);

		// Update right away.
		this.UpdateGameData();
		// call function every 2 seconds (TIME_BETWEEN_SYNC milliseconds)
		setInterval(() => {
			this.UpdateGameData();
		}, TIME_BETWEEN_SYNC)
	}

	UpdateGameData(){
		// Update text
		this.getGamePlayerState();

		// Update inventory
		this.getGameInvState();

		// Update turn
		this.getGameTurnState();

		// Update match state (board characters)
		this.getMatchAndMPC();
	}

	//set the placement squares visible or not
	regginFunction(charID) {
		//console.log("reggin selectedChar: " + selectedChar + " " + turn)

		if(turn % 2 == 0 && turn != 0){
			var whiteSquare = this.children.list[this.children.list.length - 2];
		} else if (turn % 2 != 0 && turn != 0){
			var whiteSquare = this.children.list[this.children.list.length - 3];
		}

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

	updatePlacement(selectedChar, tileY) {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					//console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);

					// Change visibility of the white squares to false
					this.place_squares.forEach((tile) => {
						tile.visible = false;
					});
					//console.log(data);
				}
			}

			//console.log("selectedChar, tileY: " + selectedChar + " " + tileY)
			// Send a PUT request to the server to place a character on the board
			xhttp.open("PUT", "/placement/place/" + selectedChar + "/" + tileY, true);
			xhttp.send();
	}

	updateMatchState(stateNumber) {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					//console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					//console.log(data);
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
					//console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					//console.log(data);

					if (data.length == 0){
						//console.log("Oopsi doopsi, nao devia acontecer --by prof. Cesar")
						return;
					}

				if (data.length > 0){
					var player1Name = data[0].player_username
					var player1Wins = "Wins: " + data[0].player_wins
					var player1Losses = "Losses: " + data[0].player_losses

					//console.log("player1Name:" + player1Name);
					//console.log("player1Wins:" + player1Wins);
					//console.log("player1Losses:" + player1Losses);

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

					// Know whos turn it is
					if (turn % 2 == 0) this.turn.text = "Turn: " + turn + " (It's " + player2Name + "'s turn)"
					else this.turn.text = "Turn: " + turn + " (It's " + player1Name + "'s turn)"
					//console.log("turn: " + turn)

				}}
			};

			// Send a GET request to the server to get info about both players in a certain match
			xhttp.open("GET", "/match/getData", true);
			xhttp.send();
	}

	getGameTurnState() {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					//console.log(xhttp.responseText)

					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					//console.log(data);

					turn = data[0].match_turn


				}
			}

			// Send a GET request to the server to all info about a specific match
			xhttp.open("GET", "/match/thisMatch", true);
			xhttp.send();
	}

	worldToTilePosition(x, y){
		var position = {};

		if (x == 400) position.x = 1
		else if (x == 460) position.x = 2
		else if (x == 520)	position.x = 3
		else if (x == 580)	position.x = 4
		else if (x == 640)	position.x = 5
		else if (x == 700)	position.x = 6
		else if (x == 760) position.x = 7
		else if (x == 820)	position.x = 8
		else if (x == 880)	position.x = 9

		if (y == 180) position.y = 1
		else if (y == 240)	position.y = 2
		else if (y == 300)	position.y = 3
		else if (y == 360) position.y = 4
		else if (y == 420)	position.y = 5
		else if (y == 480)	position.y = 6
		else if (y == 540) position.y = 7

		return position;
	}

	tileToWorldPosition(x, y){
		var position = {};

		if (x == 1) position.x = 400
		else if (x == 2) position.x = 460
		else if (x == 3) position.x = 520
		else if (x == 4) position.x = 580
		else if (x == 5) position.x = 640
		else if (x == 6) position.x = 700
		else if (x == 7) position.x = 760
		else if (x == 8) position.x = 820
		else if (x == 9) position.x = 880

		if (y == 1) position.y = 180
		else if (y == 2) position.y = 240
		else if (y == 3) position.y = 300
		else if (y == 4) position.y = 360
		else if (y == 5) position.y = 420
		else if (y == 6) position.y = 480
		else if (y == 7) position.y = 540

		return position;
	}

	getCharacterSprite(charID){
		if (charID == 1) return "rambow_sprite";
		else if (charID == 2) return "elventito_sprite";
		else if (charID == 3) return "gipio_sprite";
		else if (charID == 4) return "decibelle_sprite";
		else if (charID == 5) return 	"rommy_sprite";
	}

	getMatchAndMPC() {
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					if (xhttp.status == 403){
						document.location.href = "/login.html";
						return;
					}

					var data = JSON.parse(xhttp.responseText);
					console.log(data);

					this.boardCharacters.forEach(char => {
						char.destroy();  // Destroy the object (all objects inside this list, in this case)
					});		

					this.boardCharacters = []; // Clear the array

					data.characters.forEach((char) => {
						var position = this.tileToWorldPosition(char.mpc_tile_x, char.mpc_tile_y);

						var characterData = {
							characterID: char.mpc_cha_id, // Type of character
							playerID: char.mpc_mp_id,
							mpc_board_slot: char.mpc_board_slot, // Actual ID of the character
							x: position.x,
							y: position.y,
							isOwner: char.isOwner, 
							speed: null
							// We need some variable from the server that tell us if the character is mine or not
						};

						if (characterData.characterID == 1 || characterData.characterID == 3) characterData.speed = 2
						else if (characterData.characterID == 2 || characterData.characterID == 4) characterData.speed = 1
						else if (characterData.characterID == 5) characterData.speed = 3

						teamLeft = char.match_player1_id

						var charSprite = this.add.image(characterData.x, characterData.y, this.getCharacterSprite(characterData.characterID));
						charSprite.setInteractive(new Phaser.Geom.Rectangle(0, 0, 51, 51), Phaser.Geom.Rectangle.Contains);
						charSprite.setFlipX(teamLeft != characterData.playerID);

						charSprite.on("pointerdown", () => {
							this.tryInteractWithCharacter(characterData);
						});

						this.layer_2.add(charSprite);
						this.boardCharacters.push(charSprite);
					});

				}
			}

			// Send a GET request to the server to all info about a specific match
			xhttp.open("GET", "/match/thisMatchAndMPC", true);
			xhttp.send();
	}

	tryInteractWithCharacter(characterData){
		console.log(characterData);
		this.stateText.text = "";

		// If none selected AND the character is mine
		if (this.currentSelectedChar == null && (characterData != null && characterData.isOwner)){
			this.currentSelectedChar = characterData;
			// This is highlighting the tiles around.
			this.moreOrRange_tiles.forEach((square) => {
				// set visible to true for all squares with range (-1,1) on x and y
				var characterPosition = this.worldToTilePosition(characterData.x, characterData.y);
				var tilePosition = this.worldToTilePosition(square.x, square.y);

				var minX = characterPosition.x - characterData.speed;
				var maxX = characterPosition.x + characterData.speed;
				var minY = characterPosition.y - characterData.speed;
				var maxY = characterPosition.y + characterData.speed;

				var chaX = characterPosition.x 
				var tileX = tilePosition.x 
				var chaY = characterPosition.y 
				var tileY = tilePosition.y 


				// console log the tile position
				console.log("tilePosition: " + tilePosition.x + " " + tilePosition.y)
				console.log("minX: " + minX + " maxX: " + maxX + " minY: " + minY + " maxY: " + maxY)

				// if tilePosition inside the range of the square
				// if (tilePosition.x >= minX && tilePosition.x <= maxX && tilePosition.y >= minY && tilePosition.y <= maxY){
				// 	square.visible = true;
				// }

				// if tilePosition inside the range of the square
				if (Math.abs(chaX - tileX) + Math.abs(chaY - tileY) <= characterData.speed){
					square.visible = true;
				}

			});
			this.stateText.text = "Selected character";
			return;
		}

		// if the character I'm clicking IS NOT mine then attack
		if (this.currentSelectedChar != null && (characterData != null && !characterData.isOwner)){
			this.stateText.text = "ATTACK!!";
			this.attack_Character(this.currentSelectedChar, characterData);
			return;
		}

		if (this.currentSelectedChar.characterID == characterData.characterID && this.currentSelectedChar.playerID == characterData.playerID && (characterData != null && characterData.isOwner)){
			this.currentSelectedChar = null;
			this.moreOrRange_tiles.forEach((square) => {
				square.visible = false;
			})
			this.stateText.text = "Deselected character";
			return;
		}


	}

	getGameInvState() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				//console.log(xhttp.responseText)

				// Parse the JSON response
				var data = JSON.parse(xhttp.responseText);
				//console.log(data);

				var invRambow = data[0].n_rambow
				var invElVentito = data[0].n_elventito
				var invGipio = data[0].n_gipio
				var invDecibelle = data[0].n_decibelle
				var invRommy = data[0].n_rommy

				//console.log("invRambow: " + invRambow)

				this.inv_rambow_number.text = invRambow;
				this.inv_elventito_number.text = invElVentito;
				this.inv_gipio_number.text = invGipio;
				this.inv_decibelle_number.text = invDecibelle;
				this.inv_rommy_number.text = invRommy;

				// Update character information based on selectedChar				
				//console.log("TEXTO: " , selectedChar)
				if (selectedChar == 1) {
					this.text_char_name.setText("Rambow");

					this.text_char_stats_hp.setText("HP: 2");
					this.text_char_stats_atk.setText("ATK: 2");
					this.text_char_stats_spd.setText("SPD: 2");
					this.text_char_stats_range.setText("Range: 2");
					this.text_char_stats_target.setText("Target: Single");

					this.text_char_desc.setText("Despite his small \nappearence, this soldier \nhas one of the most \nimportant jobs of the \nsystem. He's in charge of \nprotecting and storing the \nworking data and machine\ncode of the PC he is from,\nso that they can be read\nand written faster.");
				} else if (selectedChar == 2) {
					this.text_char_name.setText("El Ventito");

					this.text_char_stats_hp.setText("HP: 5");
					this.text_char_stats_atk.setText("ATK: (Push enemies back!)");
					this.text_char_stats_spd.setText("SPD: 1");
					this.text_char_stats_range.setText("Range: 1");
					this.text_char_stats_target.setText("Target: Single");

					this.text_char_desc.setText("OH MY GOD IS THAT EL\nPALITO FROM THE HIT GAME\nEL PALITO AND THE XENO\nMOUSE??? No, he is the\nmember of the system that\nis in charge of making\nsure that the PC does\nnot overheat! Very under-\nrated job, honestly.\n");
				} else if (selectedChar == 3) {
					this.text_char_name.setText("Gipio");

					this.text_char_stats_hp.setText("HP: 1");
					this.text_char_stats_atk.setText("ATK: 1");
					this.text_char_stats_spd.setText("SPD: 2");
					this.text_char_stats_range.setText("Range: 3");
					this.text_char_stats_target.setText("Target: Single");

					this.text_char_desc.setText("Be not afraid, for this\nbeast is not dangerous.\nAnd, in fact, is a\npassionate artist! He is\nin charge of processing\nthe graphics and images\nin the PC, although\nnowadays he is more\nforced to do math. Ahhh,\nthe struggles of an \nartist...");
				} else if (selectedChar == 4) {
					this.text_char_name.setText("Decibelle");

					this.text_char_stats_hp.setText("HP: 4");
					this.text_char_stats_atk.setText("ATK: 1");
					this.text_char_stats_spd.setText("SPD: 1");
					this.text_char_stats_range.setText("Range: 2");
					this.text_char_stats_target.setText("Target: Area");

					this.text_char_desc.setText("The Damsel of Distress.\nHer job is to bless\nus with the sweet release\nof d- I mean sound. Just\ndon't be fooled by her\ndelicate appearance, she\ncan blow your eardrums\nup.");
				} else if (selectedChar == 5) {
					this.text_char_name.setText("Rommy");

					this.text_char_stats_hp.setText("HP: 2");
					this.text_char_stats_atk.setText("ATK: 2");
					this.text_char_stats_spd.setText("SPD: 4");
					this.text_char_stats_range.setText("Range: 1");
					this.text_char_stats_target.setText("Target: Single");

					this.text_char_desc.setText("Eek! A cockroach! But NO!\nThis thing handles all of \nRambow's dirty work! As\nit should. NASTY! This\ncreature is a software\nmailman, bringing data \nfrom external places into\nthe facility, often as\nplug-in cartriges!");
				} else {
					this.text_char_name.setText("-----");

					this.text_char_stats_hp.setText("HP: ---");
					this.text_char_stats_atk.setText("ATK: ---");
					this.text_char_stats_spd.setText("SPD: ---");
					this.text_char_stats_range.setText("Range: ---");
					this.text_char_stats_target.setText("Target: ---");

					this.text_char_desc.setText("-----");
				}
			}
		}

		// Send a GET request to the server to all info about a specific match
		xhttp.open("GET", "/store/checkInv", true);
		xhttp.send();
	}

	moveCharacter(selectedChar, tile) {
		var position = this.worldToTilePosition(tile.x, tile.y);

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.responseText)
			}
		}

		var data = {
			"peonID": selectedChar.mpc_board_slot,
			"newX": position.x,
			"newY": position.y
		}

		console.log("%cTrying to move:", "color: yellow;");
		console.log(data);

		xhttp.open("PUT", "/movement/move", true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send(JSON.stringify(data));
		this.currentSelectedChar = null;
		this.moreOrRange_tiles.forEach((square) => {
			square.visible = false;
		})
	}

	attack_Character(attacker, defender){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.responseText)
			}
		}

		var data = {
			"attackerID": attacker.mpc_board_slot,
			"targetID": defender.mpc_board_slot
		}

		console.log("%cTrying to attack:", "color: red;");
		console.log(data);

		xhttp.open("PUT", "/attack/attackCharacter", true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send(JSON.stringify(data));
		this.currentSelectedChar = null;
		this.moreOrRange_tiles.forEach((square) => {
			square.visible = false;
		})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
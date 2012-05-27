
// This is a *viewmodel* - JavaScript that defines the data and behavior of your UI

function AppViewModel() {
	var self = this;

	//array of objects, for the numbers part of the free column
	this.allNumbers = [
		//this for all 1s
		{
			name: "All 1s",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(true)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.fiveDice().length; i++){
				if (self.fiveDice()[i].face() === 1){
					numberofdice++;
					}
				}
				if (numberofdice === 0){
					this.result("x");
				}
				else {
					this.result(numberofdice*1);
				}
			}
		},
		//all 2s
		{
			name: "All 2s",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable("")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.fiveDice().length; i++){
					if (self.fiveDice()[i].face() === 2){
						numberofdice++;
					}
				}
				if (numberofdice === 0){
					this.result("x");
				}
				else {
					this.result(numberofdice*2);
				}
			}
		},
		//all 3s
		{
			name: "All 3s",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.fiveDice().length; i++){
					if (self.fiveDice()[i].face() === 3){
						numberofdice++;
					}
				}
				if (numberofdice === 0){
					this.result("x");
				}
				else {
					this.result(numberofdice*3);
				}
			}
		},
		//all 4s
		{
			name: "All 4s",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.fiveDice().length; i++){
					if (self.fiveDice()[i].face() === 4){
						numberofdice++;
					}
				}
				if (numberofdice === 0){
					this.result("x");
				}
				else {
					this.result(numberofdice*4);
				}
			}
		},
		//all 5s
		{
			name: "All 5s",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.fiveDice().length; i++){
					if (self.fiveDice()[i].face() === 5){
						numberofdice++;
					}
				}
				if (numberofdice === 0){
					this.result("x");
				}
				else {
					this.result(numberofdice*5);
				}
			}
		},
		//all 6s
		{
			name: "All 6s",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.fiveDice().length; i++){
					if (self.fiveDice()[i].face() === 6){
						numberofdice++;
					}
				}
				if (numberofdice === 0){
					this.result("x");
				}
				else {
					this.result(numberofdice*6);
				}
			}
		}
	];

	//array of objects, for the combos part of the free column
	this.allCombos = [
		// One pair
		{
			name: "One pair",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");
				for (i=freeDice.length; i>=0; i--){
					if (freeDice[i] === freeDice[i-1]){
						this.result(freeDice[i]*2);
						break;
					}
				}
			}
		},
		//double pair
		{
			name: "Double pair",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");
				var tempresult = 0;
				var doubles= 0;
				for (i=freeDice.length-1; i>=0; i--){
					if (doubles<2){
						if (freeDice[i] === freeDice[i-1]){
							doubles++;
							tempresult += freeDice[i]*2;
							i--;
						}
					}
					if (doubles === 0 || doubles === 1){
						this.result("x");
					}
					else if (doubles === 2){
						this.result(tempresult);
					}
				}
			}
		},
		// three of a kind
		{
			name: "Three of a kind",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");
				for (var i = freeDice.length; i > 0 ; i--) {
						if ( freeDice[i] === freeDice[i-1] && freeDice[i] === freeDice[i-2] ) {
							this.result(freeDice[i]*3);
							break;
						}
					}
				}
			},
			//Full house
			{
				name: "Full house",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");
				var i = 4;
				if (freeDice[i] === freeDice[i-1] && freeDice[i-2] === freeDice[i-4]){
					this.result(freeDice[i]*2+freeDice[i-2]*3);
				}
				else if (freeDice[i] === freeDice[i-2] && freeDice[i-3] === freeDice[i-4]){
					this.result(freeDice[i]*3+freeDice[i-3]*2);
				}
			}
		},
		//Square
		{
			name: "Square",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: 
			function(){
				var freeDice = self.sortedDice();
				this.result("x");
				var i = 4;
				if (freeDice[i] === freeDice[i-3]){
					this.result(freeDice[i]*4);
				}
				else if (freeDice[i-1] === freeDice[i-4]){
					this.result(freeDice[i-1]*4);
				}
			}
		},
		//Flush
		{
			name: "Flush",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");
				var i = 4;
				if (freeDice[i] === 6 && freeDice[i-1] === 5 && freeDice[i-2] === 4 && freeDice[i-3] === 3 && freeDice[i-4] === 2){
					this.result(20);
				}
				else if (freeDice[i] === 5 && freeDice[i-1] === 4 && freeDice[i-2] === 3 && freeDice[i-3] === 2 && freeDice[i-4] === 1){
					this.result(15);
				}
			}
		},
		//Small Chance
		{
			name: "Small Chance",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(otherScore){
				var freeDice = self.sortedDice();
				var tempScore = 0;
				this.result("x");
				for (var i in freeDice) {
					tempScore += freeDice[i];
				}
				if (tempScore <= otherScore) {
					this.result(tempScore);
				}
			}
		},
		//Big Chance
		{
			name: "Big Chance",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(otherScore){
				var freeDice = self.sortedDice();
				var tempScore = 0;
				this.result("x");
				for (var i in freeDice) {
					tempScore += freeDice[i];
				}
				if (tempScore >= otherScore) {
					this.result(tempScore);
				}
			}
		},
		//Yam
		{
			name: "Yam",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(false)},
			rising: {isSet:ko.observable(false), result:ko.observable(" "), allowed: ko.observable(true)},
			announced: {isSet:ko.observable(false), result:ko.observable(" "), announced: ko.observable(false)},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");
				var i = 4;
				if (freeDice[i] === freeDice[i-4]){
					this.result(50);
				}
			}
		}
	];

//array of Numbers Array
	this.allNumbersResults = [];
	// array of Combos Array
	this.allCombosResults = [];
	
	//populate column arrays
	for (i = 0; i<5; i++){
		self.allNumbersResults.push([]);
		self.allCombosResults.push([]);
	}

	for (var i in self.allNumbers) {
		self.allNumbersResults[0].push(self.allNumbers[i].free);
		self.allNumbersResults[1].push(self.allNumbers[i].falling);
		self.allNumbersResults[2].push(self.allNumbers[i].rising);
		self.allNumbersResults[3].push(self.allNumbers[i].announced);
		self.allNumbersResults[4].push(self.allNumbers[i].dry);
	}

	for (var j in self.allCombos) {
		self.allCombosResults[0].push(self.allCombos[j].free);
		self.allCombosResults[1].push(self.allCombos[j].falling);
		self.allCombosResults[2].push(self.allCombos[j].rising);
		self.allCombosResults[3].push(self.allCombos[j].announced);
		self.allCombosResults[4].push(self.allCombos[j].dry);
	}

	// allNumbersResults 0 = free, 1=falling, 2=rising, 3=announced, 4=dry
	// creating function for ALL allNumbersResults

	// allNumbersResults [ [{result, isset},{result},{result},{result},{result}], [], [], [], [], [] ];
	// allNumbersResults[0] = [{result},{},{},{},{}]
	// allNumbersResults[0][0] = {result: ko.observable()}
	// allNumbersResults[0][0].result() === an actual usable number

	//calculate number results sub totals
	this.computeANRScores = ko.computed(function() {
		var subtotals = [];

		for (var i=0; i<5;i++){
			var tempScore = 0;
			for (var j in self.allNumbersResults[i]){
				if ( typeof ( self.allNumbersResults[i][j].result() ) === "number" ){
					tempScore += self.allNumbersResults[i][j].result();
				}
			}
			subtotals[i] = tempScore;
		}
		return subtotals;
	});

	//calculate number bonues
	this.computeBonuses = ko.computed(function() {
		var bonuses = [];
		for (var i in self.computeANRScores()){
			if (self.computeANRScores()[i] >=60 ){
				bonuses[i] = 30;
			}
			else{
				bonuses[i] = 0;
			}
		}
		return bonuses;
	});

	//calculate combo subscores
	this.computeACRScores = ko.computed(function() {
		var subtotals = [];

		for (var i=0; i<5;i++){
			var tempScore = 0;
			for (var j in self.allCombosResults[i]){
				if ( typeof ( self.allCombosResults[i][j].result() ) === "number" ){
					tempScore += self.allCombosResults[i][j].result();
				}
			}
			subtotals[i] = tempScore;
		}
		return subtotals;
	});
	
	//calculate column totals
	this.computeAllTotals = ko.computed(function(){
		var totals = [];
		for (var i = 0; i<5; i++){
			totals[i] = self.computeANRScores()[i] + self.computeBonuses()[i] + self.computeACRScores()[i];
		}
		return totals;
	});

	// calculate combined total
	this.computeScore = ko.computed(function(){
		var myscore = 0;
		for (var i=0; i<5 ;i++){
			myscore += self.computeAllTotals()[i];
		}
		return myscore;
	});

	//Rolling the dice once
	this.rollSingleDice = function(){
			return Math.floor(Math.random()*6+1);
	};

	// creates dice constructor
	function Die(name) {
		this.name = name;
			this.face = ko.observable(0);
			this.reroll = ko.observable(true);
		}
	
	//creates array with 5 dice objects
	this.fiveDice = ko.observableArray([
			new Die("die1"), new Die("die2"), new Die("die3"), new Die("die4"), new Die("die5")
		]);

	// Controls the number of times rollFiveDice has been activated
	this.rollcounter = ko.observable(3);

	//gives a face value to all dice
	this.rollFiveDice = function(){
		if (self.rollcounter()>0){ //checks if rolled less than 3 times
				for (i=0; i<5; i++) {
					if (self.fiveDice()[i].reroll() === true){
						var temp = self.rollSingleDice(); //gets a number from function
								self.fiveDice()[i].face(temp);//assigns that new value to die
								//pass temp as variable to method ko.observable								
					}
				}
			self.scoreCalculated = false;
			var temproll = self.rollcounter();
			temproll--;
			self.rollcounter(temproll);
			//autofill announced choice if out of re-rolls
			if (self.announceMode() && temproll === 0) {
				self.finishAnnounceMode(self.announceClicked);
			}
		}
		else{
			alert("Tu ne peux plus relancer!\n You can't roll anymore!");
		}

	};


	// Choose non-rerollable dices
	this.toggleReroll = function(clicked){
		clicked.reroll(!clicked.reroll());
	};

	
	// Updates numbers of rolls
	this.rollbuttontext = ko.computed(function(){
		if (self.rollcounter()===3) {
			return "Roll my dice";
		} else {
		return "Reroll dice (" + self.rollcounter() +")";
		}
	});

	//Creating a duplicate dice array to sort values
	this.sortedDice = function(){
		var freeDice = [];
		for (var i=0; i<this.fiveDice().length; i++){
			freeDice.push(this.fiveDice()[i].face());
		}
		return freeDice.sort();
	};

	//stops clicking on several numbers at one rollDice, set true at launch to prevent clicks before first roll
	this.scoreCalculated = true;
	
	// create free calcscore
	this.freeCalc = function(clicked,index){ 
		self.calcScore(clicked,"free");
	};

	//create falling calcscore  
	this.fallingCalc = function(clicked, index, group){	// clicked object; index (position in array of column)
		// if clicked object.falling property allowed is true
			if (!self.scoreCalculated && clicked.falling.allowed()) {
				// pass object to score function
				self.calcScore(clicked,"falling");
				// if score function accepted object and set result
				if (self.scoreCalculated) {
					// if we're the last entry in allNumbersResults, change the first object in allCombosResults
					if (group === "allNumbersResults" && index() === 5){
						self.allCombosResults[1][0].allowed(true);
					} else if (group === "allCombosResults" && index() === 8) {
						// do nothing as we're at the Yam!
					} else {
					// change next object in group column to allowed (can click next cell in column)
						self[group][1][index()+1].allowed(true);	
					}
					// change the clicked object allowed to false, as it's been set			
					clicked.falling.allowed(false);
				}
			// if not on the allowed falling object
			} else {
				alert("Tu ne peux pas encore faire ca! \nYou need to roll the dice first!");
			}		
	};

	//create rising calcscore
	this.risingCalc = function(clicked, index, group){	
		if (!self.scoreCalculated && clicked.rising.allowed()){ //if you can click
			self.calcScore(clicked,"rising");	//parse to calc function
			if (self.scoreCalculated){ // if calc function passed
				if (group==="allCombosResults" && index() === 0){//if we're the last in comboresults
					self.allNumbersResults[2][5].allowed(true);//allow all?Numbers results to start
				}
				else if (group === "allNumbersResults" && index() === 0){ //if the whole column is done, do nothing
				}
				else { //otherwise, change next object in group column to be allowed
					self[group][2][index()-1].allowed(true);	
				}//change clicked object to false, because set
				clicked.rising.allowed(false);
			}
		}
		else{
			alert("Tu ne peux pas encore faire ca! \nYou can't do that");
		}	

	};

	//create announced calcscore
	this.announceMode = ko.observable(false);
	this.announceClicked = {};

	this.announcedCalc = function(clicked){	
		if (self.scoreCalculated)
		{
			alert("You need to roll the dice first!");
		} else {
			//first click
			if (!self.announceMode()) {
				self.announceMode(true);
				clicked.announced.announced(true);
				self.announceClicked = clicked;
			} else {
				self.finishAnnounceMode(self.announceClicked);
			}
		}
	};

	this.finishAnnounceMode = function(clicked){
				self.announceMode(false);
				clicked.announced.announced(false);
				self.calcScore(clicked,"announced");
	};


	//create dry calcscore
	this.dryCalc = function(clicked){		
		if (self.rollcounter()===2){
			self.calcScore(clicked,"dry");
		}
		else{
			alert("Tu ne peux plus inscrire ton resultat ici.\n You can't put your result here.");
		}
	};

	//Applies rules of calculation of score for individual cells
	this.calcScore = function(clicked,column){
		// if you've not already added a score to a table cell
		if (self.scoreCalculated === false){
			// and if that table cell has not yet been clicked on
			if (clicked[column].isSet() === false){
				// then mark that cell as being set
				clicked[column].isSet(true);		
				// calculate the score by the rules of that cell from fiveDice, put into result
				if (clicked.name === "Big Chance") {
					// big chance, so need to pass result of small chance in same column and check if a real number
					var smallchance = self.allCombos[6][column].result();
					if (typeof smallchance === "number") {
						clicked.rules(smallchance);	
					} else {
						// small chance not set/set with invalid so allow any score
						clicked.rules(0);	
					}			
				} else if (clicked.name === "Small Chance") {
					// small chance, so need to pass result of big chance in same column and check if a real number
					var bigchance = self.allCombos[7][column].result();
					if (typeof bigchance === "number") {
						clicked.rules(bigchance);	
					} else {
						// big chance not set/set with invalid so allow any score
						clicked.rules(30);	
					}			
				} else {
					// not looking at big chance or small chance so just score by the rules
					clicked.rules();	
				}
				// put the calculated result into the cell result
				clicked[column].result(clicked.result());
				// set that we've already clicked a cell this turn
				self.scoreCalculated = true;

				// prep for undo/end turn
				self.wasClicked(clicked);
				self.wasClickedColumn = column;

			}	
			else {
				alert("Tu as deja choisi cette case. \nYou have already picked that number.");
			}		
		}
		else {
			alert("Tu as deja choisi une case, relance les des! \nYou need to roll the dice first!");
		}
	};

	this.wasClicked = ko.observable(null);
	this.wasClickedColumn = null;
	
	this.canRoll = ko.computed(function(){
		if ( self.rollcounter()!=0 && self.wasClicked()==null ) return true;

	});

	this.undo = function() {
		//reset clicked result
		self.wasClicked()[self.wasClickedColumn].result(" ");
		self.wasClicked()[self.wasClickedColumn].isSet(false);
		//reset clicked pointer
		self.wasClicked(null);
		self.wasClickedColumn = null;
		// allow clicking on a cell
		self.scoreCalculated = false;
	};


	this.endTurn = function (){
		//reset clicked pointer
		self.wasClicked(null);
		self.wasClickedColumn = null;
		// allow clicking on a cell
		self.scoreCalculated = false;
		// resets roll totals
		self.rollcounter(3); 
		//resets toggles
		for (i=0; i<5;i++){
			self.fiveDice()[i].reroll(true);
			self.fiveDice()[i].face(0);
		}
	};


	

// end of appviewmodel
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

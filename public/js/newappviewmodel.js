
// This is a *viewmodel* - JavaScript that defines the data and behavior of your UI

function AppViewModel() {

	////////////////
	// DATA MODELS
	////////////////

	// data model for individual cells, as class constructor
	function cellModel(index,column) {
		var mycell = this;
		this.isSet = ko.observable(false);
		this.isSelected = ko.observable(false);
		this.isAllowed = ko.observable(false);
		this.result = ko.observable(" ");
		this.index = index;
		this.column = column;
		this.isClickable = ko.computed(function(){
			// if another score already calculated, or first turn, or this cell already has a score, ignore click
			if (self.scoreCalculated() || mycell.isSet() ) return false;

			switch(mycell.column) {
				case "free":
					if (self.announceMode()) {return false;}
					else if (self.rollcounter() <= 2 ) {return true;}
  				break;
				case "falling":
					if (self.announceMode()) {return false;}
					else if (self.rollcounter() <= 2 && mycell.isAllowed()) {return true;}
  				break;
  			case "rising":
  				if (self.announceMode()) {return false;}
  				else if (self.rollcounter() <= 2 && mycell.isAllowed()) {return true;}
  				break;
  			case "announced":
  				if (self.announceMode() && mycell.isSelected()) {return true;}
  				else if (self.announceMode() ) {return false;}
  				else if (self.rollcounter() == 2 ) {return true;}
  				break;
  			case "dry":
  				if (self.announceMode()) {return false;}
  				if (self.rollcounter() == 2 ) {return true;}
  				break;
  			default:
  				break;
			}
		});
		this.colour = ko.computed(function(){
			if ( mycell.isSelected() ) { return "lightblue"; }
			else if ( mycell.isClickable() ) { return "#CCFFCC"; }
			else { return "white"; }
		});
	}

	// creates dice class constructor
	function Die(name) {
		this.name = name;
		this.face = ko.observable(0);
		this.reroll = ko.observable(true);
	}

//Array of rules object literals, one rule per row
	var rulesModel = [
		//this for all 1s
		{
			name: "All 1s",
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.numOfDice; i++){
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
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.numOfDice; i++){
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
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.numOfDice; i++){
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
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.numOfDice; i++){
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
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.numOfDice; i++){
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
			rules: function(){
				var numberofdice = 0;
				for (i=0; i<self.numOfDice; i++){
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
		},
		// One pair
		{
			name: "One pair",
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

	///////////////
	// VARIABLES
	///////////////

	// 'global' scope variables in the viewmodel
	var self = this;
	var i;

	///////////////////
	// INITIALIZATION
	///////////////////

	this.numOfDice = 5;
	this.scoreCalculated = ko.observable(false);
	// Controls the number of times rollFiveDice has been activated
	this.rollcounter = ko.observable(3);
	this.wasClicked = null;
	this.wasClickedColumn = null;
	this.announceMode = ko.observable(false);

	// allRows contains all the clickable cell objects, with one object per array element; each element object holds all data for a given row of the table.
	this.allRows = [];

	// total number of rules, i.e. number of rows in our data table
	this.numOfRows = rulesModel.length;

	for ( i=0; i < self.numOfRows; i++) {
		// let's populate each allRows element with an object containing a name, the rules, a temporary results holder, and an object per column with all info relevent to that specific column cell.
		// cellModel class is: function(index,column)
				this.allRows[i] = {
					"name": rulesModel[i].name,
					"rules": rulesModel[i].rules,
					"result": ko.observable(" "),
					"free": new cellModel(i,"free"),
					"falling": new cellModel(i,"falling"),
					"rising": new cellModel(i,"rising"),
					"announced": new cellModel(i,"announced"),
					"dry": new cellModel(i,"dry")
				};
	}

	// for display purposes, we want to link allRows into two arrays - numbers and combos.

	this.allNumbers = [];
	this.allCombos = [];

	for ( i=0; i < 6; i++) {
		self.allNumbers.push(self.allRows[i]);
	}
	for (i=6; i<self.numOfRows; i++) {
		self.allCombos.push(self.allRows[i]);
	}

	// for scoring and falling/rising purposes, we want a linked array with elements listed by column, not row.
	this.allColumns = [];
	// create 5 columns in allColumns - 1 array per column
	for (i = 0; i<5; i++){
		self.allColumns[i] = [];
	}
	// now we need to read each 'row' from allRows, and link each column (array element) sub-object in the row to a separate array in allColumns.
		// allColumns 0 = free, 1=falling, 2=rising, 3=announced, 4=dry

	for ( i=0; i < self.numOfRows ; i++) {
		self.allColumns[0][i] = self.allRows[i].free;
		self.allColumns[1][i] = self.allRows[i].falling;
		self.allColumns[2][i] = self.allRows[i].rising;
		self.allColumns[3][i] = self.allRows[i].announced;
		self.allColumns[4][i] = self.allRows[i].dry;
	}

	//calculate number results sub totals
	this.computeNumberScores = ko.computed(function() {
		// allColumns 0 = free, 1=falling, 2=rising, 3=announced, 4=dry
		var subtotals = [];
		for (var i=0; i<5;i++){
			var tempScore = 0;
			for (var j = 0; j < 6 ; j++){
				if ( typeof ( self.allColumns[i][j].result() ) === "number" ){
					tempScore += self.allColumns[i][j].result();
				}
			}
			subtotals[i] = tempScore;
		}
		return subtotals;
	});

	//calculate number bonuses
	this.computeNumberBonuses = ko.computed(function() {
		var bonuses = [];
		for (var i in self.computeNumberScores()){
			if (self.computeNumberScores()[i] >=60 ){
				bonuses[i] = 30;
			}
			else{
				bonuses[i] = 0;
			}
		}
		return bonuses;
	});

	//calculate combo subscores
	this.computeComboScores = ko.computed(function() {
		// allColumns 0 = free, 1=falling, 2=rising, 3=announced, 4=dry
		var subtotals = [];
		for (var i=0; i<5;i++){
			var tempScore = 0;
			for (var j = 6; j < self.numOfRows ; j++){
				if ( typeof ( self.allColumns[i][j].result() ) === "number" ){
					tempScore += self.allColumns[i][j].result();
				}
			}
			subtotals[i] = tempScore;
		}
		return subtotals;
	});
	
	//calculate column totals
	this.computeTotals = ko.computed(function(){
		var totals = [];
		for (var i = 0; i<5; i++){
			totals[i] = self.computeNumberScores()[i] + self.computeNumberBonuses()[i] + self.computeComboScores()[i];
		}
		return totals;
	});

	// calculate combined total score
	this.computeScore = ko.computed(function(){
		var myscore = 0;
		for (var i=0; i<5 ;i++){
			myscore += self.computeTotals()[i];
		}
		return myscore;
	});



	//creates array with 5 dice objects
	this.fiveDice = ko.observableArray([
			new Die("die1"), new Die("die2"), new Die("die3"), new Die("die4"), new Die("die5")
		]);

	// sets the initial falling and rising elements 'allowed'
	self.allColumns[1][0].isAllowed(true);
	self.allColumns[2][self.numOfRows-1].isAllowed(true);




	/////////////
	// OPERATIONS
	/////////////




	//Rolling the dice once
	this.rollSingleDice = function(){
			return Math.floor(Math.random()*6+1);
	};
	
	//gives a face value to all dice
	this.rollFiveDice = function(){
		if (self.rollcounter() > 0){ //checks if rolled less than 3 times
				for (i=0; i<self.numOfDice; i++) {
					if (self.fiveDice()[i].reroll() === true){
						var temp = self.rollSingleDice(); //gets a number from function
						//pass temp as variable to method ko.observable			
						self.fiveDice()[i].face(temp);//assigns that new value to die									
					}
				}				
			var temproll = self.rollcounter();
			temproll--;
			self.rollcounter(temproll);
			if (self.announceMode && temproll == 0 ) {
				// run out of rolls, so finish announce
				self.finishAnnounceMode(self.wasClicked);
			}
		}

	};

	// Choose non-rerollable dices
	this.toggleReroll = function(clicked){
		clicked.reroll(!clicked.reroll());
	};

	
	// Updates numbers of rolls on button
	this.rollbuttontext = ko.computed(function(){
		if (self.rollcounter() === 3) {
			return "Roll my dice";
		} else {
		return "Reroll dice (" + self.rollcounter() +")";
		}
	});

	//Creating a duplicate dice array to sort values
	this.sortedDice = function(){
		var freeDice = [];
		for (var i=0; i<self.numOfDice; i++){
			freeDice.push(this.fiveDice()[i].face());
		}
		return freeDice.sort();
	};


	// create free calcscore
	this.freeCalc = function(clicked){ 
		if (clicked.free.isClickable()) {
			self.calcScore(clicked,"free");
		}
	};

	// create falling calcscore
	this.fallingCalc = function(clicked){ 
		if (clicked.falling.isClickable()) {
			self.calcScore(clicked,"falling");
		}
	};

	// create rising calcscore
	this.risingCalc = function(clicked){ 
		if (clicked.rising.isClickable()) {
			self.calcScore(clicked,"rising");
		}
	};

	// create announced calcscore
	this.announcedCalc = function(clicked){ 
		if (clicked.announced.isClickable()) {
			//first click
			if (!self.announceMode()) {
				self.announceMode(true);
				clicked.announced.isSelected(true);
				self.wasClicked = clicked;
			} else {
				//2nd click
				self.finishAnnounceMode(self.wasClicked);
			}
		}
	};

		this.finishAnnounceMode = function(clicked){
				self.calcScore(clicked,"announced");
	};

	// create dry calcscore
	this.dryCalc = function(clicked){ 
		if (clicked.dry.isClickable()) {
			self.calcScore(clicked,"dry");
		}
	};


	//Applies rules of calculation of score for individual cells
	this.calcScore = function(clicked,column){
		if (clicked.name === "Big Chance") {
			var index = clicked[column].index;
			// big chance, so need to pass result of small chance in same column and check if a real number
			var smallchance = self.allRows[index-1][column].result();
			if (typeof smallchance === "number") {
				clicked.rules(smallchance);	
			} else {
				// small chance not set/set with invalid so allow any score
				clicked.rules(0);	
			}			
		} else if (clicked.name === "Small Chance") {
			// small chance, so need to pass result of big chance in same column and check if a real number
			var index = clicked[column].index;
			var bigchance = self.allRows[index+1][column].result();
			if (typeof bigchance === "number") {
				clicked.rules(bigchance);	
			} else {
				// big chance not set/set with invalid so allow any score
				clicked.rules(30);	
			}			
		} else {
					// not looking at big chance or small chance so just score by the rules for the clicked row
					clicked.rules();	
		}
		// copy score from temporary row result to individual cell result
		clicked[column].result(clicked.result());
		// set score as having been calculated globally
		self.scoreCalculated(true);
		// set individual cell as having been selected
		clicked[column].isSelected(true);
		self.wasClicked = clicked;
		self.wasClickedColumn = column;

	};


	this.canRoll = ko.computed(function(){
		if (self.rollcounter() > 0 && !self.scoreCalculated() ) { return true; }
		else { return false; }
	});

this.canUndo = ko.computed(function(){
		if ( self.rollcounter() == 2 && self.announceMode() ) { return true; }
		else if ( self.scoreCalculated() && !self.announceMode() ) { return true; }
		else { return false; }
	});

	this.canEndTurn = ko.computed(function(){
		return self.scoreCalculated();
	});

	this.undo = function() {
		if (self.announceMode() ) {
			self.announceMode(false);
			self.wasClicked.announced.isSelected(false);
			self.wasClicked = null;
		} else {
			//reset clicked result
			self.wasClicked[self.wasClickedColumn].result(" ");
			self.wasClicked[self.wasClickedColumn].isSet(false);
			self.wasClicked[self.wasClickedColumn].isSelected(false);
			//reset clicked pointer
			self.wasClicked = null;
			self.wasClickedColumn = null;
			// allow clicking on a cell
			self.scoreCalculated(false);
		}
	};

	this.endTurn = function() {
		if (self.wasClickedColumn==="falling") {
				//find out where we are
				var index = self.wasClicked.falling.index;
				// remove self from being allowed in the next round
				self.wasClicked.falling.isAllowed(false);
					// if we're the last row, do nothing
				if (index === (self.numOfRows-1)) {
					// do nothing!
				} else {
					self.allColumns[1][index+1].isAllowed(true);
				}		
		}

		if (self.wasClickedColumn==="rising") {
				//find out where we are
				var index = self.wasClicked.rising.index;
				// remove self from being allowed in the next round
				self.wasClicked.rising.isAllowed(false);
					// if we're the first row, do nothing
				if (index === 0) {
					// do nothing!
				} else {
					// set next row up to allowed
					self.allColumns[2][index-1].isAllowed(true);	
				}		
		}
		self.announceMode(false);
		self.wasClicked[self.wasClickedColumn].isSet(true);
		self.wasClicked[self.wasClickedColumn].isSelected(false);
		//reset clicked pointer
		self.wasClicked = null;
		self.wasClickedColumn = null;
		self.scoreCalculated(false);
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

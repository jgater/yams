
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
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
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");
				for (var i=freeDice.length; i>=0; i--){
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");
				var tempresult = 0;
				var doubles= 0;
				for (var i=freeDice.length-1; i>=0; i--){
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
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
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result(freeDice[0]+freeDice[1]+freeDice[2]+freeDice[3]+freeDice[4]);
			}
		},
		//Big Chance
		{
			name: "Big Chance",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result(freeDice[0]+freeDice[1]+freeDice[2]+freeDice[3]+freeDice[4]);
			}
		},
		//Yam
		{
			name: "Yam",
			result: ko.observable(" "),
			free: {isSet:ko.observable(false),result:ko.observable(" ")},
			falling: {isSet:ko.observable(false), result:ko.observable(" ")},
			rising: {isSet:ko.observable(false), result:ko.observable(" ")},
			announced: {isSet:ko.observable(false), result:ko.observable(" ")},
			dry: {isSet:ko.observable(false), result:ko.observable(" ")},
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");n
				var i = 4;
				if (freeDice[i] === freeDice[i-4]){
					this.result(freeDice[i]*5);
				}
			}
		}
	];

	this.freeNumbersArray = [];
	this.fallingNumbersArray = [];
	this.risingNumbersArray=[];
	this.announcedNumbersArray = [];
	this.dryNumbersArray = [];

	this.freeCombosArray = [];
	this.fallingCombosArray = [];
	this.risingCombosArray=[];
	this.announcedCombosArray = [];
	this.dryCombosArray = [];

	//populate column arrays
	for (var i in self.allNumbers) {
		self.freeNumbersArray.push(self.allNumbers[i].free);
		self.fallingNumbersArray.push(self.allNumbers[i].falling);
		self.risingNumbersArray.push(self.allNumbers[i].rising);
		self.announcedNumbersArray.push(self.allNumbers[i].announced);
		self.dryNumbersArray.push(self.allNumbers[i].dry);
	}
	for (var i in self.allCombos) {
		self.freeCombosArray.push(self.allCombos[i].free);
		self.fallingCombosArray.push(self.allCombos[i].falling);
		self.risingCombosArray.push(self.allCombos[i].rising);
		self.announcedCombosArray.push(self.allCombos[i].announced);
		self.dryCombosArray.push(self.allCombos[i].dry);
	}

	this.freeNumberSubTotal = ko.computed(function() {
		var tempScore = 0;
		for (var i in self.freeNumbersArray){
			if (typeof (self.freeNumbersArray[i].result()) === "number"){
				tempScore += self.freeNumbersArray[i].result();
			}
		}
		return tempScore;
	});
	this.fallingNumberSubTotal = ko.computed(function() {
		var tempScore = 0;
		for (var i in self.fallingNumbersArray) {
			if (typeof (self.fallingNumbersArray[i].result()) === "number"){
				tempScore += self.fallingNumbersArray[i].result();
			}
		}
		return tempScore;
	});
	this.risingNumberSubTotal = ko.computed(function() {
		var tempScore = 0;
		for (var i in self.risingNumbersArray) {
			if (typeof (self.risingNumbersArray[i].result()) === "number"){
				tempScore += self.risingNumbersArray[i].result();
			}
		}
		return tempScore;
	});
	this.announcedNumberSubTotal = ko.computed(function() {
		var tempScore = 0;
		for (var i in self.announcedNumbersArray) {
			if (typeof (self.announcedNumbersArray[i].result()) === "number"){
				tempScore += self.announcedNumbersArray[i].result();
			}
		}
		return tempScore;
	});
	this.dryNumberSubTotal = ko.computed(function() {
		var tempScore = 0;
		for (var i in self.dryNumbersArray) {
			if (typeof (self.dryNumbersArray[i].result()) === "number"){
				tempScore += self.dryNumbersArray[i].result();
			}
		}
		return tempScore;
	});


	// calculate combos subtotals

	this.freeComboSubTotal = ko.computed(function() {
		var tempScore = 0;
		for (var i in self.freeCombosArray) {
			if (typeof (self.freeCombosArray[i].result()) === "number"){
				tempScore += self.freeCombosArray[i].result();
			}
		}
		return tempScore;
	});
	this.fallingComboSubTotal = ko.computed(function() {
		var tempScore = 0;
		for (var i in self.fallingCombosArray) {
			if (typeof (self.fallingCombosArray[i].result()) === "number"){
				tempScore += self.fallingCombosArray[i].result();
			}
		}
		return tempScore;
	});
	this.risingComboSubTotal = ko.computed(function() {
		var tempScore = 0;
		for (var i in self.risingCombosArray) {
			if (typeof (self.risingCombosArray[i].result()) === "number"){
				tempScore += self.risingCombosArray[i].result();
			}
		}
		return tempScore;
	});
	this.announcedComboSubTotal = ko.computed(function() {
		var tempScore = 0;
		for (var i in self.announcedCombosArray) {
			if (typeof (self.announcedCombosArray[i].result()) === "number"){
				tempScore += self.announcedCombosArray[i].result();
			}
		}
		return tempScore;
	});
	this.dryComboSubTotal = ko.computed(function() {
		var tempScore = 0;
		for (var i in self.dryCombosArray) {
			if (typeof (self.dryCombosArray[i].result()) === "number"){
				tempScore += self.dryCombosArray[i].result();
			}
		}
		return tempScore;
	});


	//totals
	this.freeTotal = ko.computed(function() {
		return self.freeNumberSubTotal() + self.freeComboSubTotal();
	});
	this.fallingTotal = ko.computed(function() {
		return self.fallingNumberSubTotal() + self.fallingComboSubTotal();
	});
	this.risingTotal = ko.computed(function() {
		return self.risingNumberSubTotal() + self.risingComboSubTotal();
	});
	this.announcedTotal = ko.computed(function() {
		return self.announcedNumberSubTotal() + self.announcedComboSubTotal();
	});
	this.dryTotal = ko.computed(function() {
		return self.dryNumberSubTotal() + self.dryComboSubTotal();
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


	//gives a face value to all dice
	this.rollFiveDice = function(){
		for (i=0; i<5; i++) {
			if (self.fiveDice()[i].reroll() === true){
				var temp = self.rollSingleDice(); //gets a number from function
      			self.fiveDice()[i].face(temp);//assigns that new value to die
      			//pass temp as variable to method ko.observable
			}
		};
		self.scoreCalculated = false;
	};

	//Creating a duplicate dice array to sort values
	this.sortedDice = function(){
		var freeDice = [];
		for (var i=0; i<this.fiveDice().length; i++){
			freeDice.push(this.fiveDice()[i].face());
		}
		return freeDice.sort();
	};

	//stops clicking on several numbers at one rollDice
	this.scoreCalculated = true;
	
	// create free calcscore
	this.freeCalc = function(clicked){
		self.calcScore(clicked,"free");
	};
	//create falling calcscore
	this.fallingCalc = function(clicked){		
		self.calcScore(clicked,"falling");
	};

	//create rising calcscore
	this.risingCalc = function(clicked){		
		self.calcScore(clicked,"rising");
	};

	//create announced calcscore
	this.announcedCalc = function(clicked){		
		self.calcScore(clicked,"announced");
	};

	//create dry calcscore
	this.dryCalc = function(clicked){		
		self.calcScore(clicked,"dry");
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
				clicked.rules();
				// put the calculated result into the cell result
				clicked[column].result(clicked.result());
				// set that we've already clicked a cell this turn
				self.scoreCalculated = true;
			}	
			else {
				alert("You have already picked that number");
			}		
		}
		else {
			alert("You've already picked a spot, roll the dice again!")
		}
	};






// end of appviewmodel
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

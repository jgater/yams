
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

	// creates 5 dies objects
	this.die1 = new Die("die1");
	this.die2 = new Die("die2");
	this.die3 = new Die("die3");
	this.die4 = new Die("die4");
	this.die5 = new Die ("die5");
	
	//declares array for storing 5 dies
	this.fiveDice = ko.observableArray([
    	self.die1, self.die2, self.die3, self.die4, self.die5
    ]);
	//populates array with 5 dies


	//gives a face value to all dice
	this.rollFiveDice = function(){
		for (i=0; i<5; i++) {
			if (self.fiveDice()[i].reroll() === true){
				var temp = self.rollSingleDice(); //gets a number from function
      			self.fiveDice()[i].face(temp);//assigns that new value to die
      			//parsing temp as variable to method ko.observable
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
		if (clicked.free.isSet() === false){
			self.calcScore(clicked);
			clicked.free.isSet(true);
			clicked.free.result(clicked.result());
		}	
		else {
				alert("You have already picked that number");
			}
	};
	//create falling calcscore
	this.fallingCalc = function(clicked){		
		if (clicked.falling.isSet() === false){
			self.calcScore(clicked);
			clicked.falling.isSet(true);
			clicked.falling.result(clicked.result());
		}	
		else {
				alert("You have already picked that number");
			}
	};

	//create rising calcscore
	this.risingCalc = function(clicked){		
		if (clicked.rising.isSet() === false){
			self.calcScore(clicked);
			clicked.rising.isSet(true);
			clicked.rising.result(clicked.result());
		}	
		else {
				alert("You have already picked that number");
			}
	};

	//create announced calcscore
	this.announcedCalc = function(clicked){		
		if (clicked.announced.isSet() === false){
			self.calcScore(clicked);
			clicked.announced.isSet(true);
			clicked.announced.result(clicked.result());
		}	
		else {
				alert("You have already picked that number");
			}
	};

	//create dry calcscore
	this.dryCalc = function(clicked){		
		if (clicked.dry.isSet() === false){
			self.calcScore(clicked);
			clicked.dry.isSet(true);
			clicked.dry.result(clicked.result());
		}	
		else {
				alert("You have already picked that number");
			}
	};

	//Applies rules of calculation of score for individual cells
	this.calcScore = function(clicked){
		if (self.scoreCalculated === false){
			clicked.rules();
			self.scoreCalculated = true;
		}
		else {
			alert("You've already picked a spot, roll the dice again!")
		}
	};

	// calculates and updates sub-total of allNumbers column
	this.allFreeScore = ko.computed(function(){
		var tempScore = 0;
		for (i=0;i<self.allNumbers.length; i++){
			if (typeof (self.allNumbers[i].free.result()) === "number"){
				tempScore += self.allNumbers[i].free.result();
			}
		}
		return tempScore;
	});


	// calculates and updates sub-total of allCombos column
	this.allFreeCombosScore = ko.computed(function(){
		var tempScore = 0;
		for (i=0;i<self.allCombos.length; i++){
			if (typeof (self.allCombos[i].free.result()) === "number"){
				tempScore += self.allCombos[i].free.result();
			}
		}
		return tempScore;
	});

	// calculates and updates finalScore
	this.allFreeScore = ko.computed(function(){
		var tempScore = 0;
		tempScore += self.allFreeScore() + self.allFreeCombosScore();
		return tempScore;
	});


// end of appviewmodel
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

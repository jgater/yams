
// This is a *viewmodel* - JavaScript that defines the data and behavior of your UI

function AppViewModel() {
	var self = this;

	//array of objects, for the numbers part of the free column
	this.freeNumbers = [
		//this for all 1s
		{
			name: "All 1s",
			isSet: ko.observable(false),
			result: ko.observable(" "),
			free: ko.observable(this.result),
			descending: ko.observable(this.result),
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
			isSet: ko.observable(false),
			result: ko.observable(" "),
			free: ko.observable(this.result),
			descending: ko.observable(this.result),
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
			isSet: ko.observable(false),
			result: ko.observable(" "),
			free: ko.observable(this.result),
			descending: ko.observable(this.result),
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
			isSet: ko.observable(false),
			result: ko.observable(" "),
			free: ko.observable(this.result),
			descending: ko.observable(this.result),
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
			isSet: ko.observable(false),
			result: ko.observable(" "),
			free: ko.observable(this.result),
			descending: ko.observable(this.result),
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
			isSet: ko.observable(false),
			result: ko.observable(" "),
			free: ko.observable(this.result),
			descending: ko.observable(this.result),
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
	this.freeCombos = [
		// One pair
		{
			name: "One pair",
			isSet: ko.observable(false),
			result: ko.observable(" "),
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
			isSet: ko.observable(false),
			result: ko.observable(" "),
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");
				var tempresult = 0;
				var doubles= 0;
				for (var i=freeDice.length; i>=0; i--){
					if (doubles<2){
						if (freeDice[i] === freeDice[i-1]){
							doubles++;
							tempresult += freeDice[i]*2;
						}
					}
					this.result(tempresult);
				}
			}
		},
		// three of a kind
		{
			name: "Three of a kind",
			isSet: ko.observable(false),
			result: ko.observable(" "),
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
			isSet: ko.observable(false),
			result: ko.observable(" "),
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
			isSet: ko.observable(false),
			result: ko.observable(" "),
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
			isSet: ko.observable(false),
			result: ko.observable(" "),
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
			isSet: ko.observable(false),
			result: ko.observable(" "),
			rules: function(){
				var freeDice = self.sortedDice();
				this.result(freeDice[0]+freeDice[1]+freeDice[2]+freeDice[3]+freeDice[4]);
			}
		},
		//Big Chance
		{
			name: "Big Chance",
			isSet: ko.observable(false),
			result: ko.observable(" "),
			rules: function(){
				var freeDice = self.sortedDice();
				this.result(freeDice[0]+freeDice[1]+freeDice[2]+freeDice[3]+freeDice[4]);
			}
		},
		//Yam
		{
			name: "Yam",
			isSet: ko.observable(false),
			result: ko.observable(" "),
			rules: function(){
				var freeDice = self.sortedDice();
				this.result("x");
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
	// creates 5 dies objects
	this.die1 ={
		name: "die1",
		face: ko.observable(0),
		reroll: ko.observable(true)
	};
	this.die2 ={
		name: "die2",
		face: ko.observable(0),
		reroll: ko.observable(true)
	};
	this.die3 ={
		name: "die3",
		face: ko.observable(0),
		reroll: ko.observable(true)
	};
	this.die4 ={
		name:"die4",
		face: ko.observable(0),
		reroll: ko.observable(true)
	};
	this.die5 ={
		name:"die5",
		face: ko.observable(0),
		reroll: ko.observable(true)
	};
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
	
	//Applies rules of calculation of score for individual cells
	this.calcScore = function(clicked){
		if (self.scoreCalculated === false){
			if (clicked.isSet() === false){
				clicked.rules();
				clicked.isSet(true);
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

	// calculates and updates sub-total of freeNumbers column
	this.freeNumbersScore = ko.computed(function(){
		var tempScore = 0;
		for (i=0;i<self.freeNumbers.length; i++){
			if (typeof (self.freeNumbers[i].result()) === "number"){
				tempScore += self.freeNumbers[i].result();
			}
		}
		return tempScore;
	});
	// calculates and updates sub-total of freeCombos column
	this.freeCombosScore = ko.computed(function(){
		var tempScore = 0;
		for (i=0;i<self.freeCombos.length; i++){
			if (typeof (self.freeCombos[i].result()) === "number"){
				tempScore += self.freeCombos[i].result();
			}
		}
		return tempScore;
	});

	// calculates and updates finalScore
	this.freeScore = ko.computed(function(){
		var tempScore = 0;
		tempScore += self.freeNumbersScore() + self.freeCombosScore();
		return tempScore;
	});


// end of appviewmodel
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

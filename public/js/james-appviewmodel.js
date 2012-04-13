
// This is a *viewmodel* - JavaScript that defines the data and behavior of your UI

function AppViewModel() {
	var self = this;

//data model
var td = function(rule) {
	this.isSet = ko.observable(false);
	this.result = ko.observable(" ");
	this.rules = rule;
};
	//array for all the rules in the game
var numberRules = [
	//this for all 1s
	function(){
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
	},
	//all 2s
	function(){
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
			
	},
	//all 3s
	function(){
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
	},
	//all 4s
	function(){
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
	},
	//all 5s
	function(){
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
	},
	//all 6s
	function(){
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
]

var comboRules = [
	// One pair
	function(){
		var freeDice = self.sortedDice();
		this.result("x");
		for (var i=freeDice.length; i>=0; i--){
			if (freeDice[i] === freeDice[i-1]){
				this.result(freeDice[i]*2);
				break;
			}
		}
	},
	//double pair
	function(){
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
	},
	// three of a kind
	function(){
		var freeDice = self.sortedDice();
		this.result("x");
		for (var i = freeDice.length; i > 0 ; i--) {
    		if ( freeDice[i] === freeDice[i-1] && freeDice[i] === freeDice[i-2] ) {
    			this.result(freeDice[i]*3);
    			break;
    		}
    	}
    },
    //Full house
    function(){
		var freeDice = self.sortedDice();
		this.result("x");
		var i = 4;
		if (freeDice[i] === freeDice[i-1] && freeDice[i-2] === freeDice[i-4]){
			this.result(freeDice[i]*2+freeDice[i-2]*3);
		}
		else if (freeDice[i] === freeDice[i-2] && freeDice[i-3] === freeDice[i-4]){
			this.result(freeDice[i]*3+freeDice[i-3]*2);
		}
	},
	//Square
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
	},
	//Flush
	function(){
		var freeDice = self.sortedDice();
		this.result("x");
		var i = 4;
		if (freeDice[i] === 6 && freeDice[i-1] === 5 && freeDice[i-2] === 4 && freeDice[i-3] === 3 && freeDice[i-4] === 2){
			this.result(20);
		}
		else if (freeDice[i] === 5 && freeDice[i-1] === 4 && freeDice[i-2] === 3 && freeDice[i-3] === 2 && freeDice[i-4] === 1){
			this.result(15);
		}
	},
	//Small Chance
	function(){
		var freeDice = self.sortedDice();
		this.result(freeDice[0]+freeDice[1]+freeDice[2]+freeDice[3]+freeDice[4]);
	},
	//Big Chance
	function(){
		var freeDice = self.sortedDice();
		this.result(freeDice[0]+freeDice[1]+freeDice[2]+freeDice[3]+freeDice[4]);
	},
	//Yam
	function(){
		var freeDice = self.sortedDice();
		this.result("x");
		var i = 4;
		if (freeDice[i] === freeDice[i-4]){
			this.result(freeDice[i]*5);
		}
	}
];

this.numbers = [
	"All 1s",
	"All 2s",
	"All 3s",
	"All 4s",
	"All 5s",
	"All 6s"
];

this.combos = [
	"One pair",
	"Double pair",
	"Triple",
	"Full house",
	"Square",
	"Flush",
	"Small chance",
	"Big chance",
	"Yam"
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


	//supposedly gives a face value to all dice
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

	this.numberTable = [];
	this.comboTable = [];
	for (i in numberRules) {
		// for each rule in numberRules, create a new row of table data objects, and link them to that rule
		var rule = numberRules[i];
		var row = [ new td(rule), new td(rule), new td(rule), new td(rule), new td(rule) ];
		self.numberTable.push( row );
	}
	for (i in comboRules) {
		// for each rule in comboRules, create a new row of table data objects, and link them to that rule
		var rule = comboRules[i];
		var row = [ new td(rule), new td(rule), new td(rule), new td(rule), new td(rule) ];
		self.comboTable.push( row );
	}


self.rollFiveDice();
// end of appviewmodel
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

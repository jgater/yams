// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
	var self = this;
    this.firstName = ko.observable("Bob");
    this.lastName = ko.observable("Builder");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();    
    }, this);

    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };    

	//My dice run
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
				console.log(self.fiveDice()[i].face());//shows off
			}
		};
		self.scoreCalculated = false;
	};


	//Creating an array which reflects scoring table
	this.free = [
		{
			name:"All 1s",
			isSet: ko.observable(false),
			result: ko.observable("   "),
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
		{
			name:"All 2s",
			isSet: ko.observable(false),
			result: ko.observable("   "),
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
		{
			name:"All 3s",
			isSet: ko.observable(false),
			result: ko.observable("   "),
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
		{
			name:"All 4s",
			isSet: ko.observable(false),
			result: ko.observable("   "),
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
		{
			name:"All 5s",
			isSet: ko.observable(false),
			result: ko.observable("   "),
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
		{
			name:"All 6s",
			isSet: ko.observable(false),
			result: ko.observable("   "),
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
		},
		{
			name:"One Pair",
			isSet: ko.observable(false),
			result: ko.observable("   "),
			rules: function(){
				var freeDice = [];
				for (var i=0; i<self.fiveDice().length; i++){
					freeDice.push(self.fiveDice()[i].face());
				}

				freeDice.sort();
				this.result("x");
				for (var i=freeDice.length; i>=0; i--){
					if (freeDice[i] === freeDice[i-1]){
						this.result(freeDice[i]*2);
						break;
					}
				}

			}
		}
	];

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
			else{
				alert("You have already picked that number");
			}
		}
	};
// calculates and updates total of free column
	this.freeScore = ko.computed(function(){
		var tempScore = 0;
		for (i=0;i<self.free.length; i++){
			if (typeof (self.free[i].result()) === "number"){
				tempScore += self.free[i].result();
			}
		}
		return tempScore;
	});
	













}

// Activates knockout.js
ko.applyBindings(new AppViewModel());